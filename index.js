console.log("windows width is " + document.width);

if (window.innerWidth < 1000) {
    $(".add-new-event").addClass("d-none");
}

else {
    $(".plus-btn-top").addClass("d-none");
}




var imageUrl;



// Arrays for the Categories and Days

var categoryArr = new Array();

var daysArr = new Array();







// Add Event Button


$(".listen").on("click", "#basicExampleModal .modal-dialog .modal-content .modal-footer .add-btn", function(){




    var eventName = $(".event-name").val();

    $(".event-name").val("");

    var eventType = $(".event-type").val();

    $(".event-type").val("");

    var eventDesc = $(".event-description").val();

    $(".event-description").val("");

    var rulebook = $(".rulebook-url").val();

    $(".rulebook-url").val("");


    

    console.log($(".event-title").html());

    console.log("Rulebook url is " + rulebook);




    var card = $("<div class='card col-lg-4 text-center'><img class='card-img-top' src='https://mdbootstrap.com/img/Photos/Others/images/43.jpg' alt='Card image cap'><div class='card-body'><h4 class='card-title'><a>"+eventName+"</a></h4><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href='#' class='btn btn-primary'>Button</a></div></div>");


    var card1 = $("#card-row").find(".card").first().html();

    card1 = $("<div class='card'>" + card1 + "</div>");



    console.log("Button pressed");
    $("#card-row").append(card1);


    $(".event-title-card").last().html(eventName);

    $(".event-type-card").last().html(eventType);

    $(".event-description-card").last().html(eventDesc);

    $(".event-rulebook-url-card").last().html(rulebook);


    for (var i=0 ; i<categoryArr.length ; i++) {
        $(".categories-row-card").last().append("<h5>"+categoryArr[i]+"</h5><hr/>");
        $("#categories-row-edit").last().append("<div class='chip chip-lg aqua-gradient white-text'>"+categoryArr[i]+"</div>");
    }


    for (var i=0 ; i<daysArr.length ; i++) {
        $(".days-row-card").last().append("<h5>"+daysArr[i]+"</h5><hr/>");
        $("#days-row-edit").last().append("<div class='chip chip-lg aqua-gradient white-text'>"+daysArr[i]+"</div>");
    }

    


    $("#categories-row").html("");
    $("#days-row").html("");





    
    categoryArr.length = 0;
    daysArr.length = 0;


    $(".card-img-top").last().attr("src", imageUrl);

    imageUrl = "https://mdbootstrap.com/img/Photos/Others/images/43.jpg";



    toastr.success('Event created successfully');



    



});

// End of Add Event Button








// Edit Button on the card

$(".listen").on("click", ".card-edit", function(){
    console.log("Edit button clicked");

    var eventName = $(this).parent().parent().find("#event-name-edit").val();

    console.log(eventName);


})








// Save button on edit modal

$(".listen").on("click", ".save-btn-edit", function(){

    console.log("save on edit modal pressed");

    $(this).parent().parent().parent().parent().parent().parent().parent().find(".card-img-top").last().attr("src", imageUrl);  


})

// End of save on edit modal






// Plus button for Add Category

$(".listen").on("click", ".add-category", function(){

    var newCategory = $(".new-category").val();

    categoryArr.push(newCategory);

    console.log("Category is " + newCategory);


   


    var text = "<div class='chip chip-lg aqua-gradient white-text'>"+newCategory+"</div>"


    $("#categories-row").append(text);


    $(".new-category").val("");


    

})

// End of Plus button for Add Category







// Plus button for Add day

$(".listen").on("click", ".add-day", function(){
    console.log("Day button pressed");

    var newDay = "Day ";
    newDay += $(".new-day").val();
    newDay += "    ";
    newDay += $(".new-session").val();
    newDay += "    ";
    newDay += $(".new-time").val();
    newDay += "    ";
    newDay += $(".new-venue").val();

    daysArr.push(newDay);


    var text = "<div class='chip chip-lg aqua-gradient white-text'>"+newDay+"</div>";

    $("#days-row").append(text);

    $(".new-day").val("");
    $(".new-session").val("");
    $(".new-time").val("");
    $(".new-venue").val("");


})

// End of Plus button for Add day







// Delete Button on the card

$(".listen").on("click", ".card-delete", function(){
    console.log("Delete button pressed");


    $(this).parent().parent().parent().remove();

    toastr.error('Card Deleted');

})

// End of Delete Button on the card













// Sign Up button on form page
$("form").on("submit", event => {
   

    event.preventDefault(); 


    


    window.location.href = "home.html";
});

// End of Sign Up button on form page





// Image upload Button


$(".img-upload").on("click", function(){

    imageUrl = $(this).parent().find(".image-url").val();

    $(this).parent().find(".image-url").val("");

    console.log(imageUrl);

    
});




