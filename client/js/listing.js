$('#searchProperty').click(() => {
    if ($('#city').val() == '') {
        alert('Please, select the city.');
        return;
    }

    $.ajax({
        url: API_URL + '/property/search',
        type: "POST",
        data: {
            "city": $('#city').val(),
            "propertyPurpose": $('#purpose').val(),
            "numberOfBed": $('#number-beds').val(),
            "propertyType": $('#type').val()
        },
        success: function(data) {
            console.log(JSON.stringify(data));
            if (data) {
                $('#propertiesRow').empty();

                data.forEach(prop => {
                    createPropertyCard(prop);
                });
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + ' - ' + thrownError);
        }
    });
});

function createPropertyCard(prop) {
    var rnd = Math.floor(Math.random() * 7);
    rnd = rnd == 0 ? 1 : rnd;

    $('#propertiesRow').append(
        '<div class="col-md-4">' +
            '<div class="blog-entry">' +
            '<a href="property.html?propertyID=' + prop.propertyID + '" class="block-20" style="background-image: url(\'images/img_' + rnd + '.jpg\');">' +
            '</a>' +
            '<div class="text d-flex py-4">' +
                '<div class="meta mb-3">' +
                '<div><a href="#">' + new Date(prop.dateListed).toDateString() + '</a></div>' +
                //'<div><a href="#">Admin</a></div>' +
                '</div>' +
                '<div class="desc pl-3">' +
                    '<h3 class="heading"><a href="#">' + prop.description + '</a></h3>' +
                '</div>' +
            '</div>' +
            '</div>' +
        '</div>'
    );
}