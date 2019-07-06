






// Arrays for the Categories and Days

var categoryArr = new Array();

var daysArr = new Array();







// Add Event Button

$(".listen").on("click", "#basicExampleModal .modal-dialog .modal-content .modal-footer .btn-success", function(){




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
        $(".categories-row-card").last().append(categoryArr[i]);
        $(".categories-row-edit").last().append(categoryArr[i]);
    }


    for (var i=0 ; i<daysArr.length ; i++) {
        $(".days-row-card").last().append(daysArr[i]);
    }

    categoryArr.length = 0;
    daysArr.length = 0;


    $("#categories-row").html("");
    $("#days-row").html("");



    $("#event-name-edit").last().val(eventName);
    $("#event-type-edit").last().val(eventType);
    $("#event-desc-edit").last().val(eventDesc);
    $("rulebook.edit").last().val(rulebook);




    toastr.success('Event created successfully');



});

// End of Add Event Button








// Edit Button on the card

$(".listen").on("click", ".card-edit", function(){
    console.log("Edit button clicked");

    console.log($(this).parent().parent().find("#event-name-edit").html());

})







// Plus button for Add Category

$(".listen").on("click", ".add-category", function(){

    var newCategory = $(".new-category").val();

    categoryArr.push("<h5>" + newCategory + "</h5><hr/>");

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

    daysArr.push("<h5>" + newDay + "</h5><hr/>");


    var text = "<div class='chip chip-lg aqua-gradient white-text'>"+newDay+"</div>"

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


    


    window.location.href = "index.html";
});
// End of Sign Up button on form page





