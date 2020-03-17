$('#username').blur(function(){
    var pattern1 = /[a-zA-Z0-9][\u4e00-\u9fa5]+/;
    var username = $('#username').val();
    pattern1.test(username) ? '' : red();
    function red(){
        $('#username').attr('style','border-color:red')
        $('#usernamerror').attr('style','display:block')
    }
    // console.log(pattern.test(username))
})

$('#phone').blur(function(){
    var pattern2 = /0?(13|14|15|18|17)[0-9]{9}/;
    var phone = $('#phone').val();
    pattern2.test(phone) ? '' : red();
    function red(){
        $('#phone').attr('style','border-color:red')
        $('#phonerror').attr('style','display:block')
    }
    // console.log(pattern.test(phone))
})

$('#password').blur(function(){
    var pattern3 = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{12,20}$/;
    var password = $('#password').val();
    pattern3.test(password) ? '' : red()
    function red(){
        $('#password').attr('style','border-color:red')
        $('#pwderror').attr('style','display:block')
    }
    // console.log(pattern.test(password))
})

$('.getNum').click(function(){
    var i = 10
    var n = setInterval(a, 1000);
    function a(){
        if(i > 0){
            i--;
            $('.getNum').text(i)
        }else{
            clearInterval(n);
            $('.getNum').attr('disabled','disabled')
            $('#yanzhenerror').attr('style','display:block')
        }
    }
})