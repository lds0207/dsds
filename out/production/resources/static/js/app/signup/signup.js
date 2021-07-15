var signup = {
    init : function () {
        $("#SIGNUP_btnSignUp").on("click", function () {
            signup.signup();
        });
    },
    signup : function () {
       alert("회원가입에 성공했습니다.");
        var data = {
             userId : $("#SIGNUP_userId").val()
            ,userNm : $("#SIGNUP_userNm").val()
            ,userPw : $("#SIGNUP_userPw").val()
        }
        $.ajax({
            type: 'POST',
            url: '/api/signup/save',
            /*dataType: 'json',*/
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function (data) {
            /*alert("회원가입에 성공했습니다.");*/
            window.location.href = '/SYS/TOP';
        }).fail(function (error) {
         /*   console.log(error);*/
        });
    }
}



$(document)
    .ready(function() {
        signup.init();
    });