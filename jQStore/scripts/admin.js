var serverURL = "http://localhost:8080";


function Item(code, title, price, description, category, rating, image){
    this.code = code;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.rating = rating;
    this.image = image;
    this.user = "Rhenard";
}

function clearForm(){
    $("#txtCode").val("");
    $("#txtTitle").val("");
    $("#txtPrice").val("");
    $("#txtDescription").val("");
    $("#txtCategory").val("");
    $("#txtRating").val("");
    $("#txtImage").val("");
}

function saveItem(){
    //get values
    var code = $("#txtCode").val();
    var title = $("#txtTitle").val();
    var price = $("#txtPrice").val();
    var description = $("#txtDescription").val();
    var category = $("#txtCategory").val();
    var rating = $("#txtRating").val();
    var image = $("#txtImage").val();
    // create an object
    var test = new Item(code, title, price, description, category, rating, image);
    console.log(test);
    // send the object to a server
    $.ajax({
        url: serverURL + "/api/products",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(test),
        success : function(response){
            //alert user
            console.log("Data Saved, Server responded with", response);
            clearForm();
            $("#alert").removeClass("hide");

            //set timer
            setTimeout(
                function(){
                    $("#alert").addClass("hide");
                },
                5000 // 10000 = 10 sec
            )
        },
        error: function(details){
            console.log("Error, something went wrong", details);
        }
    });
}

function solveHomework(){
    var data = [
        {
            age: 33,
            name: "Sergio",
            color: "Gray"
        },
        {
            age: 23,
            name: "John",
            color: "Blue"
        },
        {
            age: 27,
            name: "Alice",
            color: "Pink"
        },
        {
            age: 87,
            name: "Robert",
            color: "Gray"
        },
        {
            age: 23,
            name: "Sheldon",
            color: "Black"
        },
        {
            age: 45,
            name: "Will",
            color: "Green"
        },
        {
            age: 16,
            name: "Kevin",
            color: "Yellow"
        },
        {
            age: 37,
            name: "Liz",
            color: "Pink"
        },
        {
            age: 98,
            name: "Noah",
            color: "White"
        },
        {
            age: 31,
            name: "Alfredo",
            color: "White"
        },
        {
            age: 74,
            name: "Rhenard",
            color: "Green"
        },
        {
            age: 39,
            name: "Myk",
            color: "Blue"
        },
    ]
// 1 - who ( name - age ) is the oldest ?
var oldestAge = data[0].age;
var oldestPerson = "";
    for(var i = 0; i < data.length; i++){
            var person = data[i];
            if(person.age > oldestAge){
                oldestAge = person.age;
                oldestPerson = person.name;
            }    
        }
    console.log("Oldest is " + oldestPerson + " at " + oldestAge + " years old.");
    // // 2 - who ( name - age ) is the youngest ?
    var youngestAge = data[0].age;
    var youngestPerson = '';
        for(var i = 0; i < data.length; i++){
                var person = data[i];
                if(person.age < youngestAge){
                    youngestAge = person.age;
                    youngestPerson = person.name;
                }    
            }
     console.log("Oldest is " + youngestPerson + " at " + youngestAge + " years old.");


    // sum of all ages

    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        var person = data[i];

        sum += person.age;
        console.log(sum)
    }

    // http method (Get, Post, Put, Patch, Delete)
    // http Status Codes
}

function init() {
    console.log('Admin');

    $("#btnSave").click(saveItem);

    solveHomework();
}

window.onload = init;