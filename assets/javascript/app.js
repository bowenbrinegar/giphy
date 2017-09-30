$(document).ready(function()  {



var gifs = ["Matrix", "Notebook", "Nobody", "King", "Barbie", "Psych", "College", "Trump", "Halloween", "Europe", "United States", "Coding"];

var xxGif = [];
var xxLink = [];
var xxStill = [];
var xxRating = [];
var xxHeight = [];
var offset = 0;

function displayGifs() {

    
    offset = 0;

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr('data-name') + "&offset=" + offset + "&api_key=z8RiFI1Cu7OaqAm0pWO8MEzbb5gbmNvC&limit=30";


    $('#grid').masonry( 'remove', $('#grid').find('.grid-item') ).masonry('layout');
    $('#grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 5,
    });

// $(this).attr('data-name')
    function fetchAjaxContent() {
        $.ajax({
            url: queryURL,    
            method: 'GET',
        }).done(function(response) {
              for (var i = 0; i < 30 ;i++) { 
                xxGif.push(response.data[i].images.fixed_width.url);
                xxLink.push(response.data[i].bitly_gif_url)
                xxStill.push(response.data[i].images.fixed_width_still.url)
                xxRating.push(response.data[i].rating)
                xxHeight.push(response.data[i].images.fixed_width.height)
              }
        });
    };

        function contentCreator() {
            for (var i = 0; i < 10; i++) {
                        

                        var gif = $("<img class='box3'>").attr("src", xxGif[i]).css("height", xxHeight[i] * 1.5);
                        var link = $("<a target='blank'>").attr("href", xxLink[i]).append(gif);
                        var still = $("<img class='box3'>").attr("src", xxStill[i]).css("height", xxHeight * 1.5);
                        var rating = $("<h1 class='rating'>").append(xxRating[i]);
                        var div2 = $("<div class='gifhover box3'>").append(rating).append(link).css("height", xxHeight * 1.5);
                        var div1 = $("<div class='wrap box3'>").append(still).append(div2).css("height", xxHeight * 1.5);
                          
                        let listItem = $("<div>").append(div1).addClass("grid-item").css("height", xxHeight * 1.5).attr("data-aos", "slide-up");
                             
                            $('#grid').append( listItem )
                            $('#grid').masonry( 'appended', listItem);
                };

                

                xxGif = [];
                xxLink = [];
                xxStill = [];
                xxRating = [];
                xxHeight = [];
        }
        
        function run() {
   
            fetchAjaxContent();
            contentCreator();
            offset = offset + 30;
        }

        run();

        $(window).scroll(function(){

            if ($(window).scrollTop() >= ($(document).height() - $(window).height())* 0.9) {
  
                fetchAjaxContent();
                contentCreator();
                offset = offset + 30;
            }
        });

        


        

};


$('#grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 5,
});


function renderButtons() {
	$("#buttons-view").empty();
	for (var i = 0; i < gifs.length; i++) {
		var button = $('<button>' + gifs[i] + '</button>')
		button.addClass('gif btn btn-danger')
		button.attr("data-name", gifs[i]);
        $('#buttons-view').append(button)
	};
};


$("#add-gif").on("click", function(event) {
	event.preventDefault();
    var gif = $("#gif-input").val().trim();
	gifs.push(gif);
	renderButtons();
});


$(document).on("click", ".gif", displayGifs)
renderButtons();


});


// $.ajax({
 //      url: queryURL,    
 //      method: 'GET'
 //    }).done(function(response) {
 //            console.log(response)

 //            for (i = 0; i < 1; i++) {
              
 //                var gif = $("<img class='box3'>").attr("src", response.data[i].images.fixed_width.url).css("height", response.data[i].images.fixed_width.height * 1.5);
 //                var link = $("<a target='blank'>").attr("href", response.data[i].bitly_gif_url).append(gif);
 //                var still = $("<img class='box3'>").attr("src", response.data[i].images.fixed_width_still.url).css("height", response.data[i].images.fixed_width.height * 1.5);
 //                var rating = $("<h1 class='rating'>").append(response.data[i].rating);
 //                var div2 = $("<div class='gifhover box3'>").append(rating).append(link).css("height", response.data[i].images.fixed_width.height * 1.5);
 //                var div1 = $("<div class='wrap box3'>").append(still).append(div2).css("height", response.data[i].images.fixed_width.height * 1.5);
                  
 //                var listItem = $("<div>").append(div1).addClass("grid-item").css("height", response.data[i].images.fixed_width.height * 1.5).attr("data-aos", "slide-up");
                     
 //                    $('#grid').append( listItem )
 //                    $('#grid').masonry( 'appended', listItem);
 //            }

            
 //    });



    

    // $(window).scroll(function(){

    //             if ($(window).scrollTop() >= ($(document).height() - $(window).height())* 0.9) {

    //                 for (var x = 0; x < 20; x++) {
              
    //                     var gif = $("<img class='box3'>").attr("src", response.data[x].images.fixed_width.url).css("height", response.data[x].images.fixed_width.height * 1.5);
    //                     var link = $("<a target='blank'>").attr("href", response.data[x].bitly_gif_url).append(gif);
    //                     var still = $("<img class='box3'>").attr("src", response.data[x].images.fixed_width_still.url).css("height", response.data[x].images.fixed_width.height * 1.5);
    //                     var rating = $("<h1 class='rating'>").append(response.data[x].rating);
    //                     var div2 = $("<div class='gifhover box3'>").append(rating).append(link).css("height", response.data[x].images.fixed_width.height * 1.5);
    //                     var div1 = $("<div class='wrap box3'>").append(still).append(div2).css("height", response.data[x].images.fixed_width.height * 1.5);
                          
    //                     var listItem = $("<div>").append(div1).addClass("grid-item").css("height", response.data[x].images.fixed_width.height * 1.5).attr("data-aos", "slide-up");
                             
    //                         $('#grid').append( listItem )
    //                         $('#grid').masonry( 'appended', listItem);
    //                 }
                
    //             };
    //         });

