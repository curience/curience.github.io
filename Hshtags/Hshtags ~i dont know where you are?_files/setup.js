define(["jquery-flexslider","./config","./search","./nav","./guides","./profile"],function(e,n,o,l,t,i){return{removeWeirdInserts:function(){$("body").find("img#usage_pic").length>0&&$("#usage_pic").remove()},toggleOverlay:function(){n.overlay.click(function(){n.moduleOpen?(n.module.fadeOut("1000",function(){n.overlay.fadeOut()}),$('.module input[name="new-list-title"]').val(""),$('.module textarea[name="new-list-desc"]').val(""),n.moduleOpen=!1):o.searchOpen&&($(".search-full-page").fadeOut("1000",function(){n.overlay.fadeOut()}),$('input[name="search"]').val(""),$("body").removeClass("locked"),o.searchOpen=!1)})},pauseScroll:function(){n.bodySTop=n.bodyCont.scrollTop(),n.scrollPaused?(n.bodyCont.removeClass("noscroll").scrollTop(n.bodySTop),n.scrollPaused=!1):(n.bodyCont.addClass("noscroll").css("top",-n.bodySTop),n.scrollPaused=!0)},cancelBtn:function(){n.htgCancel.click(function(e){e.preventDefault(),n.moduleOpen?n.moduleOpen=!1:o.searchOpen?($('input[name="search-term"]').val(""),$(".search-full-page").fadeOut(),$(".search-error").html("").hide(),$("body").removeClass("locked"),o.searchOpen=!1):i.editingList&&(i.editingList=!1)})},resized:function(){n.win.resize(function(){n.winW=$(window).width(),n.winH=$(window).height(),o.searchOpen&&$(".search-full-page").height(n.winH),t.toggleGuide(),"profile"===$('input[name="htg-page-name"]').val()})},init:function(){n.touchEnabled=$("html").hasClass("touch")?!0:!1,this.removeWeirdInserts(),this.toggleOverlay(),this.cancelBtn(),this.resized()}}});