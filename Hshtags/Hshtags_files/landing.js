!function(){var e=function(){function e(n){$.each(a,function(t){s.delay(1e3*n).fadeOut(300),s.queue(function(){s.html(a[t]),s.dequeue()}),s.fadeIn(300),s.queue(function(){t==a.length-1&&e(n),s.dequeue()})})}var a=["#YourCampaign","#TrendingTopics","#ProductLaunches","#AnEvent"],s=$("#anevent"),n=.6;e(n)},a=function(){$("#totm-slider").slick({dots:!1,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:1,arrows:!0,prevArrow:'<div id="totm-prev" class="slide-prev-white" onclick="ga("send", "event", "TOTM Arrow", "click", "Prev");"></div>',nextArrow:'<div id="totm-next" class="slide-next-white" onclick="ga("send", "event", "TOTM Arrow", "click", "Next");"></div>',responsive:[{breakpoint:1023,settings:{slidesToShow:3,slidesToScroll:1,arrows:!0}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!0}}]}),$("#explore-slider").slick({dots:!1,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:1,arrows:!0,prevArrow:'<div id="explore-prev" class="slide-prev" onclick="ga("send", "event", "Explore Arrow", "click", "Prev");"></div>',nextArrow:'<div id="explore-next" class="slide-next" onclick="ga("send", "event", "Explore Arrow", "click", "Next");"></div>',responsive:[{breakpoint:1023,settings:{slidesToShow:3,slidesToScroll:1,arrows:!0}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!0}}]})};$(".get-app").on("click",function(e){e.preventDefault(),$("html,body").animate({scrollTop:$(".app-announcement").offset().top})}),$(".get-access").on("click",function(e){e.preventDefault(),$("html,body").animate({scrollTop:$(".early-access").offset().top})});var s=$(".landing-search");s.on("submit",function(e){e.preventDefault();var a=s.find('input[name="search-term"]').val(),n=a.replace(/[\s#]/g,""),t=/[!@\$%\^&\*\(\)\+\-=\{\[\}\]\"\'\:\;\.,\?\|\/]/g,o=t.test(n);o||""===n||"#"===n?s.find('input[name="search-term"]').addClass("error").attr("placeholder","please enter a tag"):(ga("send","event","home_search","search","tag: "+n),s.find('input[name="search-term"]').removeClass("error"),window.location="/tags/v/"+n)});var n=function(){var e=$(".top-sec .statement").outerHeight();$("#searchpanel").height(e).toggleClass("open"),$(window).scrollTop()>2?$("#searchpanel").hasClass("open")?$("#searchpanel").slideDown(function(){/iPhone|iPad|iPod/i.test(navigator.userAgent)===!1&&s.find(".full-page-search").focus(),t()}):$("#searchpanel").slideUp():$("#searchpanel").hasClass("open")?($(".top-sec .statement .inner-wrapper").fadeTo(0,300,function(){$("#searchpanel").fadeIn()}),/iPhone|iPad|iPod/i.test(navigator.userAgent)===!1&&s.find(".full-page-search").focus(),t()):$("#searchpanel").fadeOut(300,function(){$(".top-sec .statement .inner-wrapper").fadeTo(1)})},t=function(){var e=s.find(".full-page-search").val().length;s.find(".full-page-search")[0].setSelectionRange(e,e)};$("#showsearch, #showsearch2").click(function(){n()}),$(document).on("keypress",function(){$("#searchpanel").hasClass("open")||n()}),$(document).on("keyup",function(e){(27==e.keyCode||27==e.which)&&$("#searchpanel").hasClass("open")&&n()}),$(window).scroll(function(){$("#searchpanel").hasClass("open")&&($(window).scrollTop()>2?$("#searchpanel").slideUp():($("#searchpanel").fadeOut(),$(".top-sec .statement .inner-wrapper").fadeTo(1)),$("#searchpanel").removeClass("open"))});var o=function(){$.ajax({url:"//api.hshtags.com/now/hashtags",data:{channels:"art-design,events,fashion,food,gaming,music,news,people,social,special-days,sports,technology,tv-movies,world",count:12,page:1},success:function(e){$.each(e.data.hashtags,function(e,a){var s=a.channel.toLowerCase();s=s.replace("/","-",s),s=s.replace(" ","-",s);var n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],t=new Date(a.event_start_date),o=new Date(a.event_end_date),i=n[t.getUTCMonth()]+" "+t.getUTCDate();a.event_end_date!==a.event_start_date&&(i=n[t.getUTCMonth()]+" "+t.getUTCDate()+" - "+n[o.getUTCMonth()]+" "+o.getUTCDate());var r='<div class="hashtag-mod '+s+'" data-hashtag="'+a.hashtag+'"> <a class="link-wrap" data-hashtag="'+a.hashtag+'" href="/tags/v/'+a.hashtag+'"> <div class="inner-wrapper"> <div class="top"> <div class="txt-wrapper"> <span class="channel-name lbldup ng-binding" data-link="/category/'+s+'">'+a.channel+'</span> <span class="hashtag ng-binding">#'+a.hashtag+'</span> <div class="all-info"> <p class="description ng-binding">'+a.description+'</p> <span class="date lbldup ng-binding ng-scope">'+i+'</span> </div> </div> </div> <div class="btm"> <div class="img-wrapper"> <div class="tag-img" style="background-image:url('+a.main_image_url+')"></div> <div class="bg-overlay"></div> </div> </div> <div class="key-info"> <span class="location lbldup ng-binding ng-scope">'+a.location_city+'</span> <span class="icon vertical-type '+a.vertical.toLowerCase()+'-icon sm"></span> </div> </div> </a> </div>';$(".hashtags-wrapper").append(r)})},error:function(){console.log("error")}})};$("body").on("click",".hashtag-mod a",function(){ga("send","event","Any Now Tag","click","hashtag"),ga("send","event","now_tag","click",$(this).attr("data-hashtag"))}),$(document).ready(function(){a(),e(),o()})}();