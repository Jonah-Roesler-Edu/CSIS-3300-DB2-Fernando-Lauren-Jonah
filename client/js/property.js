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

function createProperty() {
    $.ajax({
        url: API_URL + '/property/insert',
        type: "POST",
        data: {
            "email": $('#email').val()
            // TODO: implement all fields
        },
        success: function(data) {
            console.log(JSON.stringify(data));
            // TODO: implement success procedure
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + ' - ' + thrownError);
        }
    });
}

function updateProperty() {
    $.ajax({
        url: API_URL + '/property/update',
        type: "POST",
        data: {
            "propertyID": ""
            // TODO: implement all fields
        },
        success: function(data) {
            console.log(JSON.stringify(data));
            // TODO: implement success procedure
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + ' - ' + thrownError);
        }
    });
}

function deleteProperty() {
    $.ajax({
        url: API_URL + '/property/delete',
        type: "POST",
        data: {
            "propertyID": ""
        },
        success: function(data) {
            console.log(JSON.stringify(data));
            // TODO: implement success procedure
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + ' - ' + thrownError);
        }
    });
}