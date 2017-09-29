// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


// https://howchoo.com/g/yjfjmty1zjb/how-to-animate-scroll-in-jquery

$("#myBtn").on('click', function() {
    $("HTML, BODY").animate({
        scrollTop: 0
    }, 1000);
});