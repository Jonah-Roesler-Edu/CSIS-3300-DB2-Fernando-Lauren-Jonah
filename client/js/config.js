const API_URL = "http://localhost:3000";

function checkLoggedIn() {
    if (localStorage.getItem('user') != '') {
        user = JSON.parse(localStorage.getItem('user'));        
        $('#ftco-nav').append('<li id="logout" class="nav-item cta"><a href="#" onCLick="logout();" class="nav-link">Logout ' + user.firstName + '</a></li>');
        $('#login').remove();
    } else {
        $('#ftco-nav').append('<li class="nav-item cta" id="login"><a href="login.html" class="nav-link"><span>login</span></a></li>');
        $('#logout').remove();
    }
    
}

function login() {
    $.ajax({
        url: API_URL + '/user/login',
        type: "GET",
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        data: {
            "email": "rhirschc@youku.com"
        },
        success: function(data) {
            alert("return: " + JSON.stringify(data));
            console.log(JSON.stringify(data));
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