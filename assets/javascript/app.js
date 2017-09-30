$(document).ready(function()  {



var gifs = ["Matrix", "Notebook", "Nobody", "King", "Barbie", "Psych", "College", "Trump", "Halloween", "Europe", "United States", "Coding"];

var xxGif;
var xxLink;
var xxStill;
var xxRating;
var xxHeight;



function displayGifs() {

    
    var offset = 0;
    
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr('data-name') + "&offset=" + offset + "&api_key=z8RiFI1Cu7OaqAm0pWO8MEzbb5gbmNvC&limit=1";


    $('#grid').masonry( 'remove', $('#grid').find('.grid-item') ).masonry('layout');
    $('#grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 5,
    });


    function fetchAjaxContent() {
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr('data-name') + "&offset=" + offset + "&api_key=z8RiFI1Cu7OaqAm0pWO8MEzbb5gbmNvC&limit=1",    
            method: 'GET',
            success: function(response) {
                
                xxGif = response.data[0].images.fixed_width.url;
                xxLink = response.data[0].bitly_gif_url;
                xxStill = response.data[0].images.fixed_width_still.url;
                xxRating = response.data[0].rating;
                xxHeight = response.data[0].images.fixed_width.height * 1.5;
                offset++;
            }
        });
    };
    

        for (var i = 0; i < 20; i++) {
                fetchAjaxContent();

                let gif = $("<img class='box3'>").attr("src", xxGif).css("height", xxHeight);
                let link = $("<a target='blank'>").attr("href", xxLink).append(gif);
                let still = $("<img class='box3'>").attr("src", xxStill).css("height", xxHeight);
                let rating = $("<h1 class='rating'>").append(xxRating);
                let div2 = $("<div class='gifhover box3'>").append(rating).append(link).css("height", xxHeight);
                let div1 = $("<div class='wrap box3'>").append(still).append(div2).css("height", xxHeight);
                  
                let listItem = $("<div>").append(div1).addClass("grid-item").css("height", xxHeight).attr("data-aos", "slide-up");
                     
                    $('#grid').append( listItem )
                    $('#grid').masonry( 'appended', listItem);
        };



        $(window).scroll(function(){

            if ($(window).scrollTop() >= ($(document).height() - $(window).height())* 0.9) {

                for (var x = 0; x < 20; x++) {
                    fetchAjaxContent();
                    
                    let gif = $("<img class='box3'>").attr("src", xxGif).css("height", xxHeight);
                    let link = $("<a target='blank'>").attr("href", xxLink).append(gif);
                    let still = $("<img class='box3'>").attr("src", xxStill).css("height", xxHeight);
                    let rating = $("<h1 class='rating'>").append(xxRating);
                    let div2 = $("<div class='gifhover box3'>").append(rating).append(link).css("height", xxHeight);
                    let div1 = $("<div class='wrap box3'>").append(still).append(div2).css("height", xxHeight);
                      
                    let listItem = $("<div>").append(div1).addClass("grid-item").css("height", xxHeight).attr("data-aos", "slide-up");
                         
                        $('#grid').append( listItem )
                        $('#grid').masonry( 'appended', listItem); 
                }
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

