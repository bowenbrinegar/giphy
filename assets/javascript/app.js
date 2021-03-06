$(document).ready(function()  {

var gifs = ["Colbert", "Art", "Photography", "Game of Thrones", "Barbie", "Psych", "College", "Trump", "Halloween", "Spain", "US", "Coding"];

var xxGif = [];
var xxLink = [];
var xxStill = [];
var xxRating = [];
var xxHeight = [];
var term;
var offset;
var queryURL;
var click = 0;

function displayGifs() {
    offset = 0;
    click++;

    term = $(this).attr('data-name');
    
    if (click > 1) {
        $('#grid').masonry( 'remove', $('#grid').find('.grid-item') ).masonry('layout');
        $('#grid').masonry({
          itemSelector: '.grid-item',
          columnWidth: 5,
        });
    }

    firstRun();

    function URL() {
        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + term + "&offset=" + offset + "&api_key=z8RiFI1Cu7OaqAm0pWO8MEzbb5gbmNvC&limit=30";
    }

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

    function firstRun() {
        console.log(offset)
        URL();
        fetchAjaxContent();
        setTimeout(loop, 500);
        refresh();
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() >= ($(document).height() - $(window).height()) * 0.9) {
            offset = offset + 30
            console.log(offset)
            URL();
            fetchAjaxContent();
            loop();
            refresh();  
        }
    });

    function refresh() {
        xxGif = [];
        xxLink = [];
        xxStill = [];
        xxRating = [];
        xxHeight = [];
    }    

    function loop() {
        for (var x = 0; x < 30; x++) {
            var gif = $("<img class='box3'>").attr("src", xxGif[x]).css("height", xxHeight[x] * 1.5);
            var link = $("<a target='blank'>").attr("href", xxLink[x]).append(gif);
            var still = $("<img class='box3'>").attr("src", xxStill[x]).css("height", xxHeight[x] * 1.5);
            var rating = $("<h1 class='rating'>").append(xxRating[x]);
            var div2 = $("<div class='gifhover box3'>").append(rating).append(link).css("height", xxHeight[x] * 1.5);
            var div1 = $("<div class='wrap box3'>").append(still).append(div2).css("height", xxHeight[x] * 1.5);
              
            var listItem = $("<div>").append(div1).addClass("grid-item").css("height", xxHeight[x] * 1.5).attr("data-aos", "slide-up");
            
            $('#grid').append( listItem  )

            $('#grid').masonry( 'appended', listItem );  
        }    
    }
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


$('#buttons-view').on("click", ".gif", displayGifs)

renderButtons();


});


