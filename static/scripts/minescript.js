console.log("here")

$('a.nav-link').click(function(event){
    event.preventDefault();
    $('#content').load($(this).attr('href'));
});

$( document ).ready(function() {
    event.preventDefault();
    $('#content').load($("#home").attr('href'));
});