<?php

/**
 * 通行证服务
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
class PassportService {

    //操作句柄
    protected $handler;
    //参数
    protected $options = array();
    //网站配置参数
    protected $config = array();
    //错误信息
    public $error = null;
    
    //当前登录会员详细信息
    static protected $userInfo = array();

    /**
     * 连接
     * @access public
     * @param array $options  配置数组
     * @return object
     */
    public static function connect($options = array()) {
        //网站配置
        $config = F("Member_Config");
        if ($config['interface']) {
            $type = $config['interface'];
        } else {
            $type = 'Local';
        }
        //附件存储方案
        $type = trim($type);
        $class = 'Passport' . ucwords($type);
        import("Driver.Passport.{$class}", LIB_PATH);
        if (class_exists($class))
            $Atta = new $class($options);
        else
            throw_exception('无法加载通行证:' . $type);
        return $Atta;
    }

    /**
     * 用户积分变更
     * @param type $uid 数字为用户ID，其他为用户名
     * @param type $integral 正数增加积分，负数扣除积分
     * @return int 成功返回当前积分数，失败返回false，-1 表示当前积分不够扣除
     */
    public function user_integral($uid, $integral) {
        $map = array();
        if (is_numeric($uid)) {
            $map['id'] = $uid;
        } else {
            $map['username'] = $uid;
        }
        $member = D("Member");
        $info = $member->where($map)->find();
        $point = $info['point'] + $integral;
        if ($point < 0) {
            return -1;
        }
        //计算会员组
        $groupid = $member->get_usergroup_bypoint((int) $point);
        //更新
        if ($member->where($map)->save(array("point" => (int) $point, "groupid" => $groupid))) {
            return $point;
        }
        return false;
    }

    /**
     * 检验用户是否已经登陆
     */
    public function isLogged() {
        //获取cookie中的用户id
        $uid = $this->getCookieUid();
        if (empty($uid) || $uid < 1) {
            return false;
        }
        return $uid;
    }

    /**
     * 注册用户的登陆状态 (即: 注册cookie + 注册session + 记录登陆信息)
     * @param array $user 用户相信信息 uid , username
     * @param type $is_remeber_me 有效期
     * @return type 成功返回布尔值
     */
    public function registerLogin(array $user, $is_remeber_me = 604800) {
        $key = 'appcms@' . $user['userid'];
        SiteCookie('appuser', $key, (int) $is_remeber_me);
        return true;
    }

    /**
     * 注销登陆
     */
    public function logoutLocal() {
        // 注销cookie
        cookie("appuser", null);
        return true;
    }

    /**
     * 获取cookie中记录的用户ID
     * @return type 成功返回用户ID，失败返回false
     */
    public function getCookieUid() {
        static $cookie_userid = null;
        if (isset($cookie_userid) && $cookie_userid) {
            return $cookie_userid;
        }
        $cookie = SiteCookie("appuser");
        if (empty($cookie)) {
            return false;
        }
        $cookie = explode('@', $cookie);
        $cookie_userid = ($cookie[0] !== 'appcms') ? false : $cookie[1];
        return $cookie_userid;
    }
    
     /**
     * 魔术方法
     * @param type $name
     * @return null
     */
    public function __get($name) {
        //从缓存中获取
        if (isset(self::$userInfo[$name])) {
            return self::$userInfo[$name];
        } else {
            $userInfo = $this->getInfo();
            if (!empty($userInfo)) {
                return $userInfo[$name];
            }
            return NULL;
        }
    }
    
    /**
     * 获取当前登录用户资料
     * @return array 
     */
    public function getInfo() {
        if (empty(self::$userInfo)) {
            self::$userInfo = $this->getLocalUser($this->getCookieUid());
        }
        return !empty(self::$userInfo) ? self::$userInfo : false;
    }

    /**
     * 前台会员信息
     * 根据提示符(username)和未加密的密码(密码为空时不参与验证)获取本地用户信息，前后台公用方法
     * @param type $identifier 为数字时，表示uid，其他为用户名
     * @param type $password 
     * @return 成功返回用户信息array()，否则返回布尔值false
     */
    public function getLocalUser($identifier, $password = null) {
        return false;
    }

    /**
     * 使用本地账号登陆 (密码为null时不参与验证)
     * @param type $identifier 用户标识，用户uid或者用户名
     * @param type $password 用户密码，未加密，如果为空，不参与验证
     * @param type $is_remember_me cookie有效期
     * return 返回状态，大于 0:返回用户 ID，表示用户登录成功
     *                                     -1:用户不存在，或者被删除
     *                                     -2:密码错
     *                                     -3会员注册登陆状态失败
     */
    public function loginLocal($identifier, $password = null, $is_remember_me = 3600) {
        return false;
    }

    /**
     * 用户注册
     * @param type $username 用户名
     * @param type $password 明文密码
     * @param type $email
     * @param type $_data 附加数据
     * @return int 大于 0:返回用户 ID，表示用户注册成功
     *                              -1:用户名不合法
     *                              -2:包含不允许注册的词语
     *                              -3:用户名已经存在
     *                              -4:Email 格式有误
     *                              -5:Email 不允许注册
     *                              -6:该 Email 已经被注册
     */
    public function user_register($username, $password, $email, $_data = array()) {
        return false;
    }

    /**
     * 更新用户基本资料
     * @param type $username 用户名
     * @param type $oldpw 旧密码
     * @param type $newpw 新密码，如不修改为空
     * @param type $email Email，如不修改为空
     * @param type $ignoreoldpw 是否忽略旧密码
     * @param type $_data 附加数据
     * @return int 1:更新成功
     *                      0:没有做任何修改
     *                     -1:旧密码不正确
     *                     -4:Email 格式有误
     *                     -5:Email 不允许注册
     *                     -6:该 Email 已经被注册
     *                     -7:没有做任何修改
     *                     -8:该用户受保护无权限更改
     */
    public function user_edit($username, $oldpw, $newpw, $email, $ignoreoldpw = 0, $_data = array()) {
        return false;
    }

    /**
     *  删除用户
     * @param type $uid 用户名
     * @return int 1:成功
     *                      0:失败
     */
    public function user_delete($uid) {
        return false;
    }

    /**
     * 删除用户头像
     * @param type $uid 用户名
     * @return int 1:成功
     *                      0:失败
     */
    public function user_deleteavatar($uid) {
        return false;
    }

    /**
     * 检查 Email 地址
     * @param type $email 邮箱地址
     * @return int 1:成功
     *                      -4:Email 格式有误
     *                      -5:Email 不允许注册
     *                      -6:该 Email 已经被注册
     */
    public function user_checkemail($email) {
        return false;
    }

    /**
     * 检查用户名
     * @param type $username 用户名
     * @return int 1:成功
     *                      -1:用户名不合法
     *                      -2:包含要允许注册的词语
     *                      -3:用户名已经存在
     */
    public function user_checkname($username) {
        return false;
    }

    /**
     * 修改头像
     * @param type $uid 用户 ID
     * @param type $type 头像类型
     *                                       real:真实头像
     *                                       virtual:(默认值) 虚拟头像
     * @param type $returnhtml 是否返回 HTML 代码
     *                                                     1:(默认值) 是，返回设置头像的 HTML 代码
     *                                                     0:否，返回设置头像的 Flash 调用数组
     * @return string:返回设置头像的 HTML 代码
     *                array:返回设置头像的 Flash 调用数组
     */
    public function user_avatar($uid, $type = 'virtual', $returnhtml = 1) {
        return false;
    }
    
    /**
     * 获取头像存储路径
     * @param type $uid 会员UID
     * @return type
     */
    public function getAvatarPath($uid) {
        return $this->getFileSavePath($uid);
    }
    
    public function getFileSavePath($uid, $dir = 'avatar') {
        $uid = abs(intval($uid)); //UID取整数绝对值
        $uid = sprintf("%09d", $uid); //前边加0补齐9位，例如UID为31的用户变成 000000031
        $dir1 = substr($uid, 0, 3);  //取左边3位，即 000
        $dir2 = substr($uid, 3, 2);  //取4-5位，即00
        $dir3 = substr($uid, 5, 2);  //取6-7位，即00
        return $dir . '/' . $dir1 . '/' . $dir2 . '/' . $dir3 . '/';
    }

    /**
     * 获取用户头像 
     * @param type $uid 用户ID
     * @param int $format 头像规格，默认参数90，支持 180,90,45,30
     * @param type $dbs 该参数为true时，表示使用查询数据库的方式，取得完整的头像地址。默认false
     * @return type 返回头像地址
     */
    public function user_getavatar($uid, $format = 90, $dbs = false) {
         //该参数为true时，表示使用查询数据库的方式，取得完整的头像地址。
        //比如QQ登陆，使用QQ头像，此时可以使用该种方式
        if ($dbs) {
            $user_getavatar_cache = S("user_getavatar_$uid");
            if ($user_getavatar_cache) {
                return $user_getavatar_cache;
            } else {
                $Member = M("Member");
                $userpic = $Member->where(array("userid" => $uid))->getField("userpic");
                if ($userpic) {
                    S("user_getavatar_$uid", $userpic, 3600);
                } else {
                    $userpic = self::$Cache['Config']['siteurl'] . "statics/images/member/nophoto.gif";
                }
                return $userpic;
            }
        }

        //头像规格
        $avatar = array(
            180 => "big",
            90 => "middle",
            45 => "small",
            30 => "small",
        );
        $format = in_array($format, $avatar) ? $format : 90;
        $picurl = $this->config['uc_api'] . "/avatar.php?uid=" . $uid . "&size=" . $avatar[$format];
        return $picurl;
    }

    /**
     * 记录登陆信息
     * @param type $uid 用户ID
     */
    public function recordLogin($uid) {
        return true;
    }
    
     /**
     * 获取错误信息
     * @return type
     */
    public function getError() {
        return $this->error;
    }

}

?>
