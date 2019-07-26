$('#btnCreateAcct').click(() => {
    let user = {
        firstName: $('#first_name').val(),
        lastName: $('#last_name').val(),
        email: $('#email').val(),
        personType: $('#person-type').val(),
        phoneNumber: $('#phone').val()
    };

    $.ajax({
        url: API_URL + '/user/signup',
        type: "POST",
        data: user,
        success: function(data) {
            console.log(JSON.stringify(data));
            user.personID = data.personID;
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = 'index.html';
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + ' - ' + thrownError);
        }
    });
});