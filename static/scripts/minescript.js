console.log("here")

$('a.nav-link').click(function(event){
    event.preventDefault();
    $('#content').load($(this).attr('href'));
});

$( document ).ready(function() {
    $('#content').load($("#home").attr('href'));
});