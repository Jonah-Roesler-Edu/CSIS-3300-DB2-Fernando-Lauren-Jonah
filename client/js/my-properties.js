$(document).ready(function() {
    let user = JSON.parse(localStorage.getItem('user'))[0];

    $.ajax({
        url: API_URL + '/property/list-property',
        type: 'POST',
        data: {
            "personID": user.personID
        },
        success: function(data) {
            data.forEach(prop => {
                createPropertyCard(prop);
            });
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + ' - ' + thrownError);
        }
    });
});

function createPropertyCard(prop) {
    var rnd = Math.floor(Math.random() * 7);
    rnd = rnd == 0 ? 1 : rnd;

    $('#my-properties').append(
        '<div class="col-md-4">' +
            '<div class="blog-entry">' +
            '<a href="create-property.html?propertyID=' + prop.propertyID + '" class="block-20" style="background-image: url(\'images/img_' + rnd + '.jpg\');">' +
            '</a>' +
            '<div class="text d-flex py-4">' +
                '<div class="desc pl-3">' +
                    '<button class="btn btn-success" type="button" onClick="window.location.href=\'create-property.html?propertyID=' + prop.propertyID + '\';">Edit</button>' +
                    '<button class="btn btn-danger" type="button" onClick="deleteProperty(\'' + prop.propertyID + '\');">Delete</button>' +
                '</div>' +
            '</div>' +
            '</div>' +
        '</div>'
    );
}

function deleteProperty(id) {
    if (confirm("This action has no rollback. Are you sure?")) {
        $.ajax({
            url: API_URL + '/property/delete',
            type: "DELETE",
            data: {
                "propertyID": id
            },
            success: function(data) {
                alert('Property deleted.');
                window.location.reload();
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status + ' - ' + thrownError);
            }
        });            
    }
}