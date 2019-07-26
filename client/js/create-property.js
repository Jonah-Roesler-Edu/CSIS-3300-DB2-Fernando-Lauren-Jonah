$(document).ready(function() {
    loadAgentList();
    if (qs('propertyID'))
        viewProperty(qs('propertyID'));

    $('#btnCancel').click(() => {
        window.location.href = 'my-properties.html';
    });

    $('#btnSave').click(() => {
        var rt;

        if ($('#property-id').val() != '') {
            rt = 'update';
        } else {
            rt = 'insert';
        }

        manageProperty(rt);
    });
});

function viewProperty(id) {
    $.ajax({
        url: API_URL + '/property/view',
        type: "POST",
        data: {
            "propertyID": id
        },
        success: function(data) {
            data = data[0];
            console.log(JSON.stringify(data));

            $('#property-id').val(data.propertyID);
            $('#purpose').val(data.propertyPurpose);
            $('#address').val(data.address);
            $('#postal-code').val(data.postalCode);
            $('#province').val(data.province);
            $('#city').val(data.city);
            $('#bedrooms').val(data.numberOfBed);
            $('#bathrooms').val(data.numbOfBathrooms);
            $('#type').val(data.propertyType);
            $('#square-feet').val(data.squareFeet);
            $('#style').val(data.style);
            $('#year').val(data.yearBuilt);
            $('#description').val(data.description);
            $('#price').val(data.price);
            $('#agent').val(data.agentID);

            var rnd = Math.floor(Math.random() * 7);
            rnd = rnd == 0 ? 1 : rnd;
            $('#img-house').attr('src','images/img_' + rnd + '.jpg');
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + ' - ' + thrownError);
        }
    });
}

function loadAgentList() {
    if ($('#agent')) {
        $.ajax({
            url: API_URL + '/user/list-agent',
            type: "POST",
            success: function(data) {
                console.log(JSON.stringify(data));
                
                data.forEach(agent => {
                    $('<option>').val(agent.personID).text(agent.firstName + ' ' + agent.lastName).appendTo('#agent');
                });
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status + ' - ' + thrownError);
            }
        });            
    }
}

function manageProperty(route) {
    let user = JSON.parse(localStorage.getItem('user'))[0];

    $.ajax({
        url: API_URL + '/property/' + route,
        type: "POST",
        data: {
            "propertyID": $('#property-id').val(),
            "personID": user.personID,
            "propertyPurpose": $('#purpose').val(),
            "address": $('#address').val(),
            "postalCode": $('#postal-code').val(),
            "province": $('#province').val(),
            "city": $('#city').val(),
            "numberOfBed": $('#bedrooms').val(),
            "numbOfBathrooms": $('#bathrooms').val(),
            "propertyType": $('#type').val(),
            "squareFeet": $('#square-feet').val(),
            "style": $('#style').val(),
            "yearBuilt": $('#year').val(),
            "description": $('#description').val(),
            "price": $('#price').val(),
            "agentID": $('#agent').val(),
        },
        success: function(data) {
            console.log(JSON.stringify(data));
            window.location.href = 'my-properties.html';
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + ' - ' + thrownError);
        }
    });
}