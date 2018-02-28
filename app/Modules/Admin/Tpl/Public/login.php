<?php if (!defined('APP_VERSION')) exit(); ?>
<!doctype html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="edge" />
<meta charset="utf-8" />
<title>系统后台 - {$Config.sitename} - by AppCMS</title>
<script type="text/javascript" src="{$config_siteurl}statics/js/jquery-1.9.1.min.js"></script>
<link rel="stylesheet" href="{$config_siteurl}statics/admin/theme/default/css/login.css">
<style>
    body {
        background-color: #193c6d;
        filter: progid: DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#003073', endColorstr='#029797');
        background-image: url(https://file.iviewui.com/dist/ddb81d457e66ab31d3a2e7726a5b793a.png);
        background-size: 100%;
        text-align: center;
        margin-top: 350px;
        overflow: hidden;
    }
    a {
        color: #0078ff;
    }
</style>
<script type="text/javascript">
if (window.parent !== window.self) {
	document.write = '';
	window.parent.location.href = window.self.location.href;
	setTimeout(function () {
		document.body.innerHTML = '';
	}, 0);
}
</script>
</head>
<body>
<div class="login-form" style="position: absolute;">
    <div class="head-info">
       <div>花骨朵平台业务系统</div>
    </div>
    <div class="clear"> </div>
    <form id="loginform" method="post" name="loginform" action="{:U('Public/tologin')}">
        <div id="web_login">
            <input type="text" id="u" name="username" class="text" tabindex="1" placeholder="请输入登录帐号" value="" title="帐号">
            <div class="">
                <input type="password" id="p" name="password" tabindex="2" value="" placeholder="请输入登录密码" title="密码">
            </div>
            <div id="verifytip">
              <span id="verifyinput fl">
              <input  id="verifycode" name="code" maxlength=5 tabindex="3" class="input_txt" type="text" value="" onfocus="$('#verifycodehint').hide();" onblur="if($('#verifycode').val()=='')$('#verifycodehint').show();" placeholder="请输入验证码" />
              </span>
                <span class="yanzhengma_box fr" id="verifyshow">
                    <a href="javascript:document.getElementById('code_img').src='{:U('Api/Checkcode/index','code_len=4&font_size=20&width=130&height=50&font_color=&background=')}&time='+Math.random();void(0);" class="change_img">
                    <img class="yanzheng_img" id="code_img" alt="" src="{:U('Api/Checkcode/index','code_len=4&font_size=20&width=130&height=50&font_color=&background=')}">
                    </a>
                </span>
            </div>
        </div>
        <div class="signin">
            <input type="submit" tabindex="4" id="subbtn" value="登 录">
        </div>
    </form>
</div>
<div id="treeAmount"></div>
<script type="text/javascript">
    var leftPx = ($(window).width() - $('.login-form').width())/2 + 'px';
    var topPx = (($(window).height() - $('.login-form').height())/2 - 100) + 'px';
    $('.login-form').attr('style', 'position:absolute;left:'+leftPx+';top:'+topPx);
</script>
<script src="{$config_siteurl}statics/addons/threejs/three.min.js"></script>
<script type="text/javascript">
    var SEPARATION = 100,
        AMOUNTX = 100,
        AMOUNTY = 60;
    var container;
    var camera, scene, renderer;
    var particles, particle, count = 0;
    var mouseX = 35,
        mouseY = -342;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {
        container = document.createElement('div');
        //document.body.appendChild(container);
        document.getElementById('treeAmount').appendChild(container);
        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 5000);
        camera.position.z = 900;
        scene = new THREE.Scene();
        particles = new Array();

        var PI2 = Math.PI * 2;
        var material = new THREE.ParticleCanvasMaterial({
            color: 0x097BDB,
            program: function(context) {
                context.beginPath();
                context.arc(0, 0, .6, 0, PI2, true);
                context.fill();
            }
        });

        var i = 0;
        for (var ix = 0; ix < AMOUNTX; ix++) {
            for (var iy = 0; iy < AMOUNTY; iy++) {
                particle = particles[i++] = new THREE.Particle(material);
                particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
                particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
                scene.add(particle);
            }
        }

        renderer = new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('touchstart', onDocumentTouchStart, false);
        document.addEventListener('touchmove', onDocumentTouchMove, false);
        window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
        mouseX = event.clientX - windowHalfX;
        //mouseY = event.clientY - windowHalfY;
    }

    function onDocumentTouchStart(event) {
        if (event.touches.length === 1) {
            event.preventDefault();
            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY;
        }
    }

    function onDocumentTouchMove(event) {
        if (event.touches.length === 1) {
            event.preventDefault();
            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY;
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        camera.position.x += (mouseX - camera.position.x) * .05;
        camera.position.y += (-mouseY - camera.position.y) * .05;
        camera.lookAt(scene.position);

        var i = 0;
        for (var ix = 0; ix < AMOUNTX; ix++) {
            for (var iy = 0; iy < AMOUNTY; iy++) {
                particle = particles[i++];
                particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
                particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
            }
        }
        renderer.render(scene, camera);
        count += 0.1;
    }
</script>

<Admintemplate file="Admin/Common/Js"/>
<script src="{$config_siteurl}statics/js/common.js"></script>

</body>
</html>