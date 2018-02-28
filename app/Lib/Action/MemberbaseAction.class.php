<?php

/**
 * 前台会员中心Action Base
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
class MemberbaseAction extends BaseAction {

    //会员模型相关配置
    public $Member_config = array(); 
    //会员模型缓存
    protected $memberModel = array();
    //会有组缓存
    protected $memberGroup = array();
    //会员数据库对象
    protected $memberDb = NULL;
    //用户id
    protected $userid = 0;
    //用户名
    protected $username = NULL;
    //用户信息
    protected $userinfo = array();
    //是否connect登陆
    protected $isConnectLogin = false;

    protected function _initialize() {
        C("USER_AUTH_MODEL", "Member");
        parent::_initialize();
        $this->Member_config = F("Member_Config");

        //判断微信登录
        //$this->getWeiXinUserInfo();     

        //初始化当前登录用户信息
        $this->initUser();
        //所有以public_开头的方法都无需检测是否登陆
        if (substr(ACTION_NAME, 0, 7) != 'public_') {
            //登陆检测
            $this->check_member();
        }
        //============全局模板变量==============
        //会员组数组
        $this->assign("Member_group", F("Member_group"));
        //会员模型配置
        $this->assign("Member_config", $this->Member_config);
        //会员模型数组
        $this->assign("Model_member", F("Model_Member"));
    }
    

    private function autoUserLogin(&$info){
        //会员自动登录
        $status = service("Passport")->loginLocal($info['username'], null, 86400);
    }

    private function getWeiXinUserInfo(){
        if(isset($_SESSION['wxuser'])){
            $this->autoUserLogin($_SESSION['wxuser']);
            return;
        }

    	//调用微信支付
		ini_set('date.timezone','Asia/Shanghai');
		//error_reporting(E_ERROR);
		require_once APP_PATH . "Modules/H5/WXPay/WxPay.JsApiPay.php";
		
		$tools = new JsApiPay();
		$openUserInfo = $tools->GetOpenUserInfo();

        //保存微信用户的信息到数据表中
        if($openUserInfo){

            $wxkey = 'WXUser_' . $openUserInfo['openid']; 
            if(S($wxkey)){
                $info = S($wxkey);
                $_SESSION['wxuser'] = $info;
                $this->autoUserLogin($info);
                return;
            }

            //添加会员数据
            $info = array();
            $info['username'] = $openUserInfo['openid'];
            $info['password'] = $openUserInfo['openid'];
            $info['email']    = $openUserInfo['openid'] . '@weixin.com';
            
            S($wxkey, $info, 30*24*3600);
            $_SESSION['wxuser'] = $info;

            $userid = service("Passport")->user_register($info['username'], $info['password'], $info['email']);
            if ($userid > 0) {
                $memberinfo = service("Passport")->getLocalUser((int) $userid);
                $info['username'] = $memberinfo['username'];
                $info['password'] = $memberinfo['password'];
                $info['email'] = $memberinfo['email'];
                $info['checked'] = 1;
                $info['nickname'] = $openUserInfo['nickname'];
                $info['truename'] = $openUserInfo['nickname'];
                $info['userpic'] = $openUserInfo['headimgurl'];
                $info['regdate'] = $openUserInfo['subscribe_time'];
                $info['lastdate'] = $openUserInfo['subscribe_time'];
                $info['loginnum'] = 1;  
                $info['groupid'] = 2;
                $info['areaid'] = $openUserInfo['city'];
                $info['modelid'] = 3;

                if (false !== M("member")->where(array('userid' => $memberinfo['userid']))->save($info)) {
                    //$this->success("添加会员成功！", U("Member/index"));
                } else {
                    service("Passport")->user_delete($memberinfo['userid']);
                    //$this->error("添加会员失败！");
                }
            } else {
                //$this->error($this->member->getErrorMesg($userid));
            }

            //会员自动登录
            $this->autoUserLogin($info);
        }
    }

    /**
     * 操作错误跳转的快捷方法
     * @access protected
     * @param string $message 错误信息
     * @param string $jumpUrl 页面跳转地址
     * @param mixed $ajax 是否为Ajax方式 当数字时指定跳转时间
     * @return void
     */
    public function error($message, $jumpUrl = '', $ajax = false) {
        parent::error($message, $jumpUrl, $ajax);
    }

    /**
     * 检测用户是否已经登陆 
     */
    final public function check_member() {
        
        $this->userid = self::$Cache['uid'];
        $this->username = self::$Cache['username'];
        $this->userinfo = self::$Cache['User'];
        
        //特定方法无需登陆验证
        if (GROUP_NAME == 'Member' && MODULE_NAME == 'Index' && in_array(ACTION_NAME, array('login', 'register', 'logout', 'connectregister'))) {
            return true;
        } else {
            if (AppframeAction::$Cache['uid']) {
                //禁止访问会员组
                if (AppframeAction::$Cache['User']['groupid'] == 1) {
                    service("Passport")->logoutLocal();
                    $this->error("您的会员组为禁止访问！", CONFIG_SITEURL);
                } else if (AppframeAction::$Cache['User']['groupid'] == 7) {//邮箱认证
                    service("Passport")->logoutLocal();
                    $this->error("您还没有进行邮箱认证！", CONFIG_SITEURL);
                }
                //锁定用户
                if (AppframeAction::$Cache['User']['islock'] == 1) {
                    service("Passport")->logoutLocal();
                    $this->error("您的帐号已经被锁定！", CONFIG_SITEURL);
                }
                return true;
            } else {
                service("Passport")->logoutLocal();
                $forward = isset($_REQUEST['forward']) ? $_REQUEST['forward'] : get_url();
                cookie("forward", $forward);
                $this->error("您的会话已过期，请重新登录。！", U("Member/Index/login"));
            }
        }
    }

    /**
     * 检查用户名
     */
    /*public function public_checkname_ajax() {
        $username = isset($_GET['username']) && trim($_GET['username']) ? trim($_GET['username']) : exit(0);
        if (service("Passport")->user_checkname($username) == 1) {
            exit('1');
        }
        exit('0');
    }*/

    /**
     * 检查邮箱
     */
    /*public function public_checkemail_ajax() {
        $email = isset($_GET['email']) && trim($_GET['email']) ? trim($_GET['email']) : exit(0);
        if (service("Passport")->user_checkemail($email) == 1) {
            exit("1");
        }
        exit('0');
    }*/

    /**
     * 检查昵称是否存在 
     */
    /*public function public_checknickname_ajax() {
        $nickname = isset($_GET['nickname']) && trim($_GET['nickname']) ? trim($_GET['nickname']) : exit(0);
        if (M(C("USER_AUTH_MODEL"))->where(array("nickname" => $nickname))->count()) {
            exit("0");
        }
        exit("1");
    }*/

    /**
     * 会员注册 
     * @param type $username 用户名
     * @param type $password 密码
     * @param type $email 邮箱
     * @return int 大于 0:返回用户 ID，表示用户注册成功
     *                              -1:用户名不合法
     *                              -2:包含不允许注册的词语
     *                              -3:用户名已经存在
     *                              -4:Email 格式有误
     *                              -5:Email 不允许注册
     *                              -6:该 Email 已经被注册
     *                              -7模型ID为空
     *                              -8用户注册成功，但添加模型资料失败
     */
    protected function registeradd($username, $password, $email) {
        return service("Passport")->user_register($username, $password, $email);
    }

    /**
     * 增加帐号绑定信息
     * @param type $uid 用户ID
     * @param type $app 应用名称
     * @param type $openid 标识
     */
    protected function connectAdd($uid, $app, $openid) {
        if (!$uid || !$app || !$openid) {
            return false;
        }
        $accesstoken = session("access_token");
        $expires = session("Connect_expires");
        $db = M("Connect");
        return $db->add(array(
                    "openid" => $openid,
                    "app" => $app,
                    "uid" => $uid,
                    "accesstoken" => $accesstoken,
                    "expires" => $expires,
        ));
    }

    /**
     * 删除帐号绑定信息
     * @param type $uid 用户ID
     * @param type $app 应用名称
     * @param type $openid 标识
     */
    protected function connectDel($uid, $app, $openid) {
        if (!$uid || !$app || !$openid) {
            return false;
        }
        $db = M("Connect");
        return $db->where(array(
                    "openid" => $openid,
                    "app" => $app,
                    "uid" => $uid
                ))->delete();
    }
    
    /**
     * 获取用户模型中的详细数据
     */
    protected function getUserDetailModel(){
    	
	    $modelid = AppframeAction::$Cache['User']['modelid'];
		$user_detail = ContentModel::getInstance($modelid)->where(array("userid" => AppframeAction::$Cache['uid']))->find();
		if($user_detail){
			load('extend');
			if($user_detail['plate']){
				$user_detail['plate_region'] = msubstr($user_detail['plate'], 0, 1, 'utf-8', false);
				$user_detail['plate_num'] = msubstr($user_detail['plate'], 1, strlen($user_detail['plate']), 'utf-8', false);
			}
			$this->userinfo = array_merge($this->userinfo, $user_detail);
			$this->assign("User", $this->userinfo);
		}
    }
	
	/**
     * 信息提示
     * @access protected
     * @param string $message 错误信息，可以是错误代码
     * @param array $data 附带数据
     * @param $type error 错误提示，success，普通小心提示
     * @return void
     */
    protected function message($message = '', $data = array(), $type = 'success') {
        //如果是错误代码
        if (is_numeric($message)) {
            switch ($message) {
                case 1:
                    $message = '名字中带有禁用词，请更换一个！';
                    $data['error'] = 1;
                    break;
                case 2:
                    $message = '名字不能超过12个字母或6个汉字！';
                    $data['error'] = 2;
                    break;
                case 3:
                    $message = '名字中至少要含有一个字母或汉字！';
                    $data['error'] = 3;
                    break;
                case 4:
                    $message = '输入的电子邮箱格式不正确！';
                    $data['error'] = 4;
                    break;
                case 10000:
                    $message = '操作成功！';
                    $data['error'] = 10000;
                    break;
                case 10005:
                    $message = '登陆账号不能为空！';
                    $data['error'] = 10005;
                    break;
                case 10006:
                    $message = '分组名超过不能超过七个字！';
                    $data['error'] = 10006;
                    break;
                case 10007:
                    $message = '分组名称不能为空！';
                    $data['error'] = 10007;
                    break;
                case 1011:
                    $message = '该帐号已经存在，请更换一个！';
                    $data['error'] = 1011;
                    break;
                case 20001:
                    $message = '您没有登录或已经退出，请登录后再进行操作 ！';
                    $data['error'] = 20001;
                    break;
                case 20002:
                    $message = '您没有权限进行操作 ！';
                    $data['error'] = 20002;
                    break;
                case 20011:
                    $message = '此邮箱已经存在，请更换一个！';
                    $data['error'] = 20011;
                    break;
                case 20014:
                    $message = '该账号已被锁定！';
                    $data['error'] = 20014;
                    break;
                case 20015:
                    $message = '邮箱账号未激活！';
                    $data['error'] = 20015;
                    break;
                case 20021:
                    $message = '两次输入密码不相同！';
                    $data['error'] = 20021;
                    break;
                case 20022:
                    $message = '当前密码不正确，请从新输入！';
                    $data['error'] = 20022;
                    break;
                case 20023:
                    $message = '账号或密码错误！';
                    $data['error'] = 20023;
                    break;
                case 20024:
                    $message = '请输入您的密码！';
                    $data['error'] = 20024;
                    break;
                case 20025:
                    $message = '密码长度应是6位以上！';
                    $data['error'] = 20025;
                    break;
                case 20031:
                    $message = '验证码错误！';
                    $data['error'] = 20031;
                    break;
                default:
                    break;
            }
        }
        //如果是数组
        if (is_array($message)) {
            $info = $message['info'];
            $error = $message['error'];
            $message = $info;
            $data['error'] = $error;
        }
        if (IS_AJAX) {
            $callback = I('request.callback', '');
            if (empty($callback)) {
                $type = 'JSON';
            } else {
                $type = 'JSONP';
                C('VAR_JSONP_HANDLER', 'callback');
            }
			$data['info'] = $message;
			$data['status'] = $data['error'] == 10000 ? true : false;
            $this->ajaxReturn($data, $type);
        } else {
            if ('success' == $type || $type == true) {
                $this->success($message);
            } else {
                $this->error($message);
            }
        }
        exit;
    }

}

?>
