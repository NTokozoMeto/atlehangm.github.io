var MENU_MARGIN =window.getComputedStyle(document.querySelector('.menu')).margin;
var MENU_PADDING =window.getComputedStyle(document.querySelector('.menu')).margin;


function menu(){
    var checkbox = document.getElementById("nav-btn-checkbox");

    if(checkbox.checked){

        $(".menu").css({'height':'0','right':'5%','margin': MENU_MARGIN});
        unfreeze_scroll();
    }
    else{
        $(".menu").css({'height':'100%','right':'auto','margin': '0',
        'padding':'0'
    });
        freeze_scroll();

    }
}

function freeze_scroll(){
    $('body').css({'display':'hidden'});
   document.documentElement.scrollIntoView();

}
function unfreeze_scroll(){
    $('body').css({'overflow':'auto'});
}
function animate_btn(){

}