$(document).ready(function() {
    loadAgentList();
    if (qs('propertyID'))
        viewProperty(qs('propertyID'));
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
            $('#description').text(data.description);
            $('#agent').text(data.firstName + ' ' + data.lastName);
            $('#province').text(data.province);
            $('#city').text(data.city);
            $('#year').text(data.yearBuilt);
            $('#square-feet').text(data.squareFeet);
            $('#bedrooms').text(data.numberOfBed);
            $('#bathrooms').text(data.numbOfBathrooms);
            $('#style').text(data.style);

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