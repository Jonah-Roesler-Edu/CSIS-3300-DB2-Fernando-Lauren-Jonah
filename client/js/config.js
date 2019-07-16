const API_URL = "http://localhost:3000";

$(document).ready(function() {
    checkLoggedIn();
});

function checkLoggedIn() {
    if (localStorage.getItem('user') && localStorage.getItem('user') != '') {
        let user = JSON.parse(localStorage.getItem('user'))[0];
        $('.navbar-nav').append('<li id="logout" class="nav-item cta"><a href="#" onCLick="logout();" class="nav-link"><span>Logout ' + user.firstName + ' ' + user.lastName + '</span></a></li>');
        $('#btnLogin').remove();
    } else {
        // $('#ftco-nav').append('<li class="nav-item cta" id="btnLogin"><a href="login.html" class="nav-link"><span>login</span></a></li>');
        $('#logout').remove();
    }
    
}

function login() {
    $.ajax({
        url: API_URL + '/user/login',
        type: "POST",
        //dataType: "json",
        //contentType: 'application/json; charset=utf-8',
        data: {
            "email": $('#email').val()
        },
        success: function(data) {
            console.log(JSON.stringify(data));
            localStorage.setItem('user', JSON.stringify(data));
            window.location.href = 'index.html';
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + ' - ' + thrownError);
        }
    });
}

$('#login').click(() => {
    login();
});

function logout() {
    localStorage.setItem('user', '');
    window.location.reload();
}