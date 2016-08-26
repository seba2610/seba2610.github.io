var spanish = 'es', english = 'en';

function hideMenuNav(callback){
    $('#menu-nav').animate({opacity:0}, 300, function(){
        $('#menu-nav').css('visibility', 'collapse');
        callback();
    })
}

function showMenuNav(){
    $('#menu-nav').css('visibility', 'visible');
    $('#menu-nav').animate({opacity:1}, 300);
}

function hideMenuContainer(){
    $('#close').css('visibility', 'collapse');
    hideMenuNav(function(){
        $('#menu-container').animate({height:'0%'}, 300,function(){
            $('#menu-container').css('visibility', 'collapse');
            $('#close').css('visibility', 'collapse');
        });
    });
}
                
function showMenuContainer(){
    $('#menu-container').css('visibility', 'visible');
    $('#menu-container').animate({height:'100%'}, 300,function(){
        showMenuNav();
        $('#close').css('visibility', 'visible');
    });
}

function setCloseVisible(callback){
    $('#close').css('visibility', 'visible');
    $('#close').css('opacity', '0');
    $('#close').animate({
        opacity: 1
    }, 1000, callback);
}

function setLangMenuHidden(callback){
    $('#lang-nav').animate({
        opacity:0
    }, 200, callback);
}

function setLogoHidden(callback){
    $('#logo-container').animate({
        opacity:0
    }, 200, callback);
}

function setSiteLangPosScript(){
    dictionary.forEach(function(elem){
        $(elem[0]).html(elem[1]);
    });

    setLangMenuHidden(function(){ $('#lang-nav').remove(); });
    setLogoHidden(function(){
        $('#logo-container').remove();      
            hideMenuContainer();
        });
}

function setSiteLang(lang){
    if (lang === spanish){
        jQuery.getScript('./js/es.js', setSiteLangPosScript);
    }
}

function setSentSuccessMsg(){
    $("#msg-sent-success").css("visibility", "visible");
    $("#name-input").val("");
    $("#email-input").val("");
    $("#msg-textarea").val("");
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function init(){
    $('.lang-nav-item').on('click touchstart', function(e){
        e.preventDefault();
        setSiteLang($(this).attr('data').toString());
    });
    
    $('.menu-nav-item').on('click touchstart', function(e){
        hideMenuContainer();
    });
    
    $('#close').on('click touchstart', function(e){
        e.preventDefault();
        hideMenuContainer();
    });
    
    $('#menu-button').on('click touchstart', function(e){
        e.preventDefault();
        showMenuContainer();
    });
}

$(document).ready(function(){
    init();
    setSiteLang(spanish);
    
    var param = getURLParameter('success-msg');
    if (param != undefined)
    {
        setSentSuccessMsg();
    }
});