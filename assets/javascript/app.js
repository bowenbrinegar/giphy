$(document).ready(function()  {

var gifs = ["Matrix", "Notebook", "Nobody", "King", "Barbie", "Psych", "College", "Trump", "Halloween", "Europe", "United States", "Coding",];

function displayGifs() {

	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + $(this).attr('data-name') + "&api_key=z8RiFI1Cu7OaqAm0pWO8MEzbb5gbmNvC&limit=60";
    
    $.ajax({
      url: queryURL,    
      method: 'GET',
    }).done(function(response) {

            $('#grid').masonry( 'remove', $('#grid').find('.grid-item') ).masonry('layout');
            
            for (i = 0; i < 60; i++) {
              
                var gif = $("<img class='box3'>").attr("src", response.data[i].images.fixed_width.url).css("height", response.data[i].images.fixed_width.height * 1.5);
                var link = $("<a target='blank'>").attr("href", response.data[i].bitly_gif_url).append(gif);
                var still = $("<img class='box3'>").attr("src", response.data[i].images.fixed_width_still.url).css("height", response.data[i].images.fixed_width.height * 1.5);
                var rating = $("<h1 class='rating'>").append(response.data[i].rating);
                var div2 = $("<div class='gifhover box3'>").append(rating).append(link).css("height", response.data[i].images.fixed_width.height * 1.5);
                var div1 = $("<div class='wrap box3'>").append(still).append(div2).css("height", response.data[i].images.fixed_width.height * 1.5);
                  
                var listItem = $("<div>").append(div1).addClass("grid-item").css("height", response.data[i].images.fixed_width.height * 1.5).attr("data-aos", "slide-up");
                     
                    $('#grid').append( listItem )
                    $('#grid').masonry( 'appended', listItem);
            }
    
    });

            $('#grid').masonry({
              itemSelector: '.grid-item',
              columnWidth: 5,
            });
};


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


$(document).on("click", ".gif", displayGifs);
renderButtons();




})

