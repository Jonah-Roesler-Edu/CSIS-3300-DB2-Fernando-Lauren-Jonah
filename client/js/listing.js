function searchProperty() {
    $.ajax({
        url: API_URL + '/property/view',
        type: "POST",
        data: {
            "city": "",
            "propertyPurpose": $('#email').val(),
            "numberOfBed": "",
            "propertyType": ""
        },
        success: function(data) {
            console.log(JSON.stringify(data));
            // TODO: create post style items in the listing page
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + ' - ' + thrownError);
        }
    });
}

function viewProperty() {
    $.ajax({
        url: API_URL + '/property/view',
        type: "POST",
        data: {
            "propertyID": ""
        },
        success: function(data) {
            console.log(JSON.stringify(data));
            // TODO: redirect to the blog-single.html page to show the property
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + ' - ' + thrownError);
        }
    });
}