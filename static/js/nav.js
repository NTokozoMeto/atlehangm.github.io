
$(document).ready(function ()
{
    var nav_center_pos = window.getComputedStyle(document.querySelector('.nav')).height || document.querySelector('.nav').height;
    var nav_height  = window.getComputedStyle(document.getElementById("nav-btn-container")).height|| document.getElementById('nav-btn-container').style.height;
    $("#nav-btn-container").css({'top':0.5*parseInt(nav_center_pos,10)-0.25*parseInt(nav_height,10)});
});

