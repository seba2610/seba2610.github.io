function hideMenuNav(n){$("#menu-nav").animate({opacity:0},300,function(){$("#menu-nav").css("visibility","collapse"),n()})}function showMenuNav(){$("#menu-nav").css("visibility","visible"),$("#menu-nav").animate({opacity:1},300)}function hideMenuContainer(){$("#close").css("visibility","collapse"),hideMenuNav(function(){$("#menu-container").animate({height:"0%"},300,function(){$("#menu-container").css("visibility","collapse"),$("#close").css("visibility","collapse")})})}function showMenuContainer(){$("#menu-container").css("visibility","visible"),$("#menu-container").animate({height:"100%"},300,function(){showMenuNav(),$("#close").css("visibility","visible")})}function setCloseVisible(n){$("#close").css("visibility","visible"),$("#close").css("opacity","0"),$("#close").animate({opacity:1},1e3,n)}function setLangMenuHidden(n){$("#lang-nav").animate({opacity:0},200,n)}function setLogoHidden(n){$("#logo-container").animate({opacity:0},200,n)}function setSiteLangPosScript(){dictionary.forEach(function(n){$(n[0]).html(n[1])}),setLangMenuHidden(function(){$("#lang-nav").remove()}),setLogoHidden(function(){$("#logo-container").remove(),hideMenuContainer()})}function setSiteLang(n){n===spanish&&jQuery.getScript("./js/es.js",setSiteLangPosScript)}function setSentSuccessMsg(){$("#msg-sent-success").css("visibility","visible"),$("#name-input").val(""),$("#email-input").val(""),$("#msg-textarea").val("")}function getURLParameter(n){return decodeURIComponent((new RegExp("[?|&]"+n+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[null,""])[1].replace(/\+/g,"%20"))||null}function init(){$(".lang-nav-item").on("click touchstart",function(n){n.preventDefault(),setSiteLang($(this).attr("data").toString())}),$(".menu-nav-item").on("click touchstart",function(n){hideMenuContainer()}),$("#close").on("click touchstart",function(n){n.preventDefault(),hideMenuContainer()}),$("#menu-button").on("click touchstart",function(n){n.preventDefault(),showMenuContainer()})}var spanish="es",english="en";$(document).ready(function(){init(),setSiteLang(spanish);var n=getURLParameter("success-msg");void 0!=n&&setSentSuccessMsg()});