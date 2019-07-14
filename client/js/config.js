const API_URL = "http://localhost:3000";

function checkLoggedIn() {
    if (localStorage.getItem('user') != '') {
        user = JSON.parse(localStorage.getItem('user'));        
        $('#topMenu').append('<li id="logout"><a href="#" onCLick="logout();">Logout ' + user.firstName + '</a></li>');
    } else {
        $('#logout').remove();
    }
    
}

$('#login').click(() => {
    // axios.get( API_URL + '/user/login', {
    //     params: {
    //         email: "nvaudre0@sourceforge.net"
    //     }
    // })
    // .then(function (response) {
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // })
    // .then(function () {
    // // always executed
    // });
        
    // var url = API_URL + '/user/login?email=nvaudre0@sourceforge.net' + '&callback=?';

    // $.getJSON(url, function(result) {
    //     if (result && result.id > 0) {
    //         console.log(JSON.stringify(data));
    //     }
    // });    

    $.ajax({
        url: API_URL + "/user/login",
        type: "POST",
        //dataType: "json",
        //jsonp: "callback",
        //contentType: "application/json", // charset=utf-8",
        data: {
            "email": "nvaudre0@sourceforge.net",
        },
        //crossDomain: true,
        success: function(data) {
            console.log(data);
            // TODO: Loop through the returned data
            // TODO: Create function to create card
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
});

function logout() {
    localStorage.setItem('user', '');
    window.location.reload();
}