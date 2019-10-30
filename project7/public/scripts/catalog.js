
// Global Variables
var items = [];
var serverURL = "http://localhost:8080";
// fucntions
function getCatalogFromServer(){
    $.ajax({
        url: serverURL + "/api/products",
        type: "GET",
        success: function(res){
            console.log("Server responded OK", res)
            for(var i = 0; i < res.length; i++){
                var myItem = res[i];
                if(myItem.user == "Rhenard"){
                items.push(myItem)}
            }
        displayCatalog();
        },
        error: function(error){
            console.log("Error on request", error)
        }
        
    })
}


function displayCatalog(){
    // travel the array
    // get each element from the array
    // display the element into the DOM (html)
    for(var i = 0; i < items.length; i++){
        var product = items[i];
        // var pLayout = "<div><h4>" + product + "</h4></div>";
        // var pLayout = `<div>
        // <h4>${product.title}</h4>
        // <h5>${product.price}</h5>
        // <p>${product.description}</p>
        // <button class='btn btn-danger'>Buy</button>
        // </div>`;
      displayItem(product);
    }
}

function displayItem(product){
    var pLayout = 
    `<div class="item">
        <div>
            <img src="${"/img/"+product.image}" alt="Exhaust">
            <div class="product-body">
                <h4 class="card-title">${product.title}</h4>
                <h6 class="card-price">${product.price}</h6>
                <p class="card-text">${product.description}</p>
                <button class="btn btn-primary">Add To Cart</button>
            </div>
        </div>
    </div>`
    $('#catalog').append(pLayout);
}

function search(){
    var filterItem = $("#txtSearch").val();
    console.log(filterItem);

    //clear the catalog
    $("#catalog").html("");
    /**
     * Travel the array
     * get each element from the array
     * compare the text with the item.title
     * if match,display the item
     */
    for(var i=0; i < items.length; i++){
        var product = items[i];
        // note: parse string to lower case to remove case sensitivity
        if(
            product.title.toLowerCase().includes(filterItem.toLowerCase())
        ||  product.price.toLowerCase().includes(filterItem.toLowerCase())
        ||  product.description.toLowerCase().includes(filterItem.toLowerCase())
        ) {
            displayItem(product);
        }
    }
}

function init(){
    console.log('Catalog Page');
    //event 
    $("#btnSearch").click(search);
    $("#txtSearch").keypress(function(e){
        if(e.key == "Enter"){
            search();
            e.preventDefault(); // prevent default action (form submit)
        }
    });
    getCatalogFromServer();
}

// initialization
window.onload = init;