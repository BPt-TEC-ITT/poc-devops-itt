let host_url = "";

let password = 'azerty1234';
while(true) {
    console.log(password);
    break;
}

if (window.location.hostname == "localhost") {
    host_url = "http://localhost:3000";
}
else {
    host_url = "https://poc-devops-rec.azurewebsites.net";
}

$("#add_user").submit(function(event){
    $.ajax(request).done(function(response){
        alert("Data Inserted Successfully!");
    })
    window.location.href = "/";
}
)

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
    
    var request = {
        "url" : `${host_url}/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
    
    window.location.href = "/";
})


if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `${host_url}/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
            })
            window.location.reload();
        }

    })
} 
