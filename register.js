var pattern1 = /[a-zA-Z0-9][\u4e00-\u9fa5]+/;
var username = $('#username').val();
var pattern2 = /0?(13|14|15|18|17)[0-9]{9}/;
var phone = $('#phone').val();
var pattern3 = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{12,20}$/;
var password = $('#password').val();
$('#username').blur(function(){
    red1();
    // console.log(pattern.test(username))
})
function red1(){
    if(!pattern1.test(username)){
        $('#username').attr('style','border-color:red')
        $('#usernamerror').attr('style','display:block')
    }
}
$('#phone').blur(function(){
    red2();
})
function red2(){
    if(!pattern2.test(phone)){
        $('#phone').attr('style','border-color:red')
        $('#phonerror').attr('style','display:block')
    }
}
$('#password').blur(function(){
    red3();
    // console.log(pattern.test(password))
})
function red3(){
    if(!pattern3.test(password)){
        $('#password').attr('style','border-color:red')
        $('#pwderror').attr('style','display:block')
    }
}
$('.getNum').click(function(){
    $('.getNum').attr('disabled','disabled');
    var i = 10;
    var n = setInterval(a, 1000);
    function a(){
        if(i > 0){
            i--;
            $('.getNum').text(i+'s后重试');
        }else{
            clearInterval(n);
            $('#yanzhenerror').attr('style','display:block');
            $('.getNum').attr('disabled','none');
            $('.getNum').text('获取验证码');
        }
    }
})

$('.register').click(function(){
    red1();
    red2();
    red3();
})