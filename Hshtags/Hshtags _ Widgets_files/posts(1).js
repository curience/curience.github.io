"use strict";var posts_services=angular.module("post.services",[]);posts_services.filter("timeAgo",["timeago",function(a){return function(t){return a(t)}}]),posts_services.filter("postfilter",function(){return function(a,t){var e=[],n=!1,o=!1;return angular.forEach(t.social_network,function(a){a===!0&&(o=!0)}),angular.forEach(t.post_type,function(a){a===!0&&(n=!0)}),angular.forEach(a,function(a,s){var i=a.post_type,d=a.social_network;n&&o?t.post_type[i]===!0&&t.social_network[d]===!0?e.push(a):e.splice(s,1):n&&!o?t.post_type[i]===!0&&e.push(a):o&&!n?t.social_network[d]===!0&&e.push(a):n||o||e.push(a)}),e}}),posts_services.factory("filterHelper",["sortHelper",function(a){return function(t,e,n){var o=[],n=void 0!==n?n:t.length,s=!1,i=!1;angular.forEach(e.social_network,function(a){a===!0&&(i=!0)}),angular.forEach(e.post_type,function(a){a===!0&&(s=!0)});var d=a(t,!0);return angular.forEach(d,function(a,t){var d=a.post_type,r=a.social_network;o.length<n&&(s&&i?e.post_type[d]===!0&&e.social_network[r]===!0?o.push(a):o.splice(t,1):s&&!i?e.post_type[d]===!0&&o.push(a):i&&!s?e.social_network[r]===!0&&o.push(a):s||i||o.push(a))}),o}}]),posts_services.factory("filterByTagHelper",function(){return function(a,t){var e=[];return angular.forEach(a,function(a){"All Tags"!==t?a.main_tag.toLowerCase()===t.toLowerCase()&&e.push(a):e.push(a)}),e}}),posts_services.factory("sortHelper",function(){return function(a,t){var e=[],n=[];if(angular.forEach(a,function(a,t){var n=[];n.push("id_"+a.post_id.toString()),n.push(a.post_time),e[t]=n}),t)var o=e.sort(function(a,t){return t[1]-a[1]});else var o=e.sort(function(a,t){return a[1]-t[1]});return angular.forEach(o,function(t){angular.forEach(a,function(a){t[0].replace("id_","")===a.post_id.toString()&&n.push(a)})}),n}}),posts_services.factory("findPostHelper",function(){return function(a,t){var e=!0,n=!1;return angular.forEach(t,function(t){return e?void(t.post_id.toString()===a.toString()&&(n=!0,e=!1)):n}),n}}),posts_services.factory("conversationHelper",["loggedInUser","socialNetworks","htgTwitter","htgInstagram","htgFacebook","htgFlickr","htgVimeo","htgTumblr",function(a,t,e,n,o,s,i,d){return{get:function(a,t,r,c,l){function u(a){var t;return 0===a||void 0===a||null===a?t="":a>1e3?(a/=1e3,t=a.toFixed(1)+"k"):t=a,t}"twitter"===t.social_network&&c.socials_authorized.indexOf("twitter")>-1?e.get(l,function(e){if(e.data.success){a.find(".post-conversation .inner-holder .no-auth").remove();var n=e.data.retweeted||1===e.data.retweeted?" engaged":"",o=e.data.favorited||1===e.data.favorited?" engaged":"";a.find(".post-conversation .inner-holder").append('<span class="retweet conv-icon'+n+'" data-action="retweet" data-social="twitter" data-id="'+t.post_id+'" data-luid="'+c.user_id+'" data-uname="'+t.username+'"><span class="retweet-grey"></span><span class="count">'+u(e.data.retweet_count)+"</span></span>"),a.find(".post-conversation .inner-holder").append('<span class="favorite conv-icon'+o+'" data-action="favorite" data-social="twitter" data-id="'+t.post_id+'" data-luid="'+c.user_id+'" data-uname="'+t.username+'"><span class="favorite-grey"></span><span class="count">'+u(e.data.favorite_count)+"</span></span>"),a.find(".post-conversation .inner-holder").append('<span class="reply conv-icon" data-action="reply" data-social="twitter" data-id="'+t.post_id+'" data-luid="'+c.user_id+'" data-uname="'+t.username+'"><span class="reply-grey"></span></span>'),a.find(".post-share").after('<div class="post-comment-box"><div class="inner-holder"><form action="reply" class="onlyForm" data-action="reply" data-social="twitter" data-id="'+t.post_id+'" data-luid="'+c.user_id+'" data-uname="'+t.username+'"><textarea name="message-txt" placeholder="Reply message."></textarea> <input type="submit" name="submit-message" value="reply"> </form></div></div>')}}):"instagram"===t.social_network&&c.socials_authorized.indexOf("instagram")>-1?n.get(l,function(e){if(e.data.success){a.find(".post-conversation .inner-holder .no-auth").remove();var n=e.data.liked||1===e.data.liked?" engaged":"";a.find(".post-conversation .inner-holder").append('<span class="like conv-icon'+n+'" data-social="instagram" data-action="like" data-id="'+t.post_id+'" data-luid="'+c.user_id+'"><span class="like-grey"></span><span class="count">'+u(e.data.like_count)+"</span></span>")}}):"facebook"===t.social_network&&c.socials_authorized.indexOf("facebook")>-1&&"53a77b52396f36.95508889"===c.user_id.toString()?o.get(l,function(e){if(e.data.success){a.find(".post-conversation .inner-holder .no-auth").remove();var n=e.data.liked||1===e.data.liked?" engaged":"";a.find(".post-conversation .inner-holder").append('<span class="fblike conv-icon'+n+'" data-social="facebook" data-action="like" data-id="'+t.post_id+'" data-luid="'+c.user_id+'"><span class="fblike-grey"></span><span class="count">'+u(e.data.like_count)+"</span></span>"),a.find(".post-conversation .inner-holder").append('<span class="comment conv-icon" data-social="facebook" data-action="comment" data-id="'+t.post_id+'" data-luid="'+c.user_id+'"><span class="comment-grey"></span><span class="count">'+u(e.data.comment_count)+"</span></span>"),a.find(".post-share").after('<div class="post-comment-box"><div class="inner-holder"><form action="comment" class="onlyForm" data-action="comment" data-social="facebook" data-id="'+t.post_id+'" data-luid="'+c.user_id+'" data-uname="'+t.username+'"><textarea name="message-txt" placeholder="Add comment."></textarea> <input type="submit" name="submit-message" value="comment"> </form></div></div>')}}):"flickr"===t.social_network&&c.socials_authorized.indexOf("flickr")>-1?s.get(l,function(e){if(e.data.success){a.find(".post-conversation .inner-holder .no-auth").remove();var n=e.data.favorited||1===e.data.favorited?" engaged":"";a.find(".post-conversation .inner-holder").append('<span class="favorite conv-icon'+n+'" data-social="flickr" data-action="favorite" data-id="'+t.post_id+'" data-luid="'+c.user_id+'"><span class="favorite-grey"></span><span class="count">'+u(e.data.favorite_count)+"</span></span>"),a.find(".post-conversation .inner-holder").append('<span class="comment conv-icon" data-social="flickr" data-action="comment" data-id="'+t.post_id+'" data-luid="'+c.user_id+'"><span class="comment-grey"></span><span class="count">'+u(e.data.comment_count)+"</span></span>"),a.find(".post-share").after('<div class="post-comment-box"><div class="inner-holder"><form action="comment" class="onlyForm" data-action="comment" data-social="flickr" data-id="'+t.post_id+'" data-luid="'+c.user_id+'" data-uname="'+t.username+'"><textarea name="message-txt" placeholder="Add comment."></textarea> <input type="submit" name="submit-message" value="comment"> </form></div></div>')}}):"vimeo"===t.social_network&&c.socials_authorized.indexOf("vimeo")>-1?i.get(l,function(e){if(e.data.success){a.find(".post-conversation .inner-holder .no-auth").remove();var n=e.data.liked||1===e.data.liked?" engaged":"";a.find(".post-conversation .inner-holder").append('<span class="like conv-icon'+n+'" data-social="vimeo" data-action="like" data-id="'+t.post_id+'" data-luid="'+c.user_id+'"><span class="like-grey"></span><span class="count">'+u(e.data.like_count)+"</span></span>"),a.find(".post-conversation .inner-holder").append('<span class="comment conv-icon" data-social="vimeo" data-action="comment" data-id="'+t.post_id+'" data-luid="'+c.user_id+'"><span class="comment-grey"></span><span class="count">'+u(e.data.comment_count)+"</span></span>"),a.find(".post-share").after('<div class="post-comment-box"><div class="inner-holder"><form action="comment" class="onlyForm" data-action="comment" data-social="vimeo" data-id="'+t.post_id+'" data-luid="'+c.user_id+'" data-uname="'+t.username+'"><textarea name="message-txt" placeholder="Add comment."></textarea> <input type="submit" name="submit-message" value="comment"> </form></div></div>')}}):"tumblr"===t.social_network&&c.socials_authorized.indexOf("tumblr")>-1&&(l.blogname=t.username,d.get(l,function(e){if(e.data.success){a.find(".post-conversation .inner-holder .no-auth").remove();{var n=e.data.liked||1===e.data.liked?" engaged":"";e.data.reblogged||1===e.data.reblogged?" engaged":""}a.find(".post-conversation .inner-holder").append('<span class="like conv-icon'+n+'" data-social="tumblr" data-action="like" data-id="'+t.post_id+'" data-luid="'+c.user_id+'" data-blogname="'+t.username+'" data-reblogkey="'+t.post_key+'"><span class="like-grey"></span></span>'),a.find(".post-conversation .inner-holder").append('<span class="reblog conv-icon" data-social="tumblr" data-action="reblog" data-id="'+t.post_id+'" data-luid="'+c.user_id+'" data-blogname="'+t.username+'" data-reblogkey="'+t.post_key+'"><span class="reblog-grey"></span></span>'),a.find(".post-conversation .inner-holder").append('<span class="notes conv-icon" data-social="tumblr" data-action="notes" data-id="'+t.post_id+'" data-luid="'+c.user_id+'" data-blogname="'+t.username+'" data-reblogkey="'+t.post_key+'"><span class="notes">Notes</span><span class="count">'+u(e.data.note_count)+"</span></span>")}}))},engage:function(a,t,r,c,l,u){function m(a){var t;return t=""===a||void 0===a||null===a?1:a.search("k")>-1||a.search("m")>-1?a:parseInt(a)+1}"twitter"===c?"retweet"===l?(u.post_owner=r.attr("data-uname"),u.retweet=1,u.action="add",e.retweet(u,function(a){a.data.success&&(r.addClass("engaged"),r.find(".count").html(m(t.find(".count").text())))})):"favorite"===l?(u.post_owner=r.attr("data-uname"),u.favorite=1,u.action="add",e.favorite(u,function(a){a.data.success&&(r.addClass("engaged"),r.find(".count").html(m(t.find(".count").text())))})):"reply"===l&&(u.post_owner=r.attr("data-uname"),u.action="add",a.find(".post-comment-box").hasClass("open")?(a.find(".post-comment-box").removeClass("open"),a.find(".post-comment-box form textarea").val(""),setTimeout(function(){a.find(".post-link-share").css("overflow","hidden")},400)):(a.find(".post-link-share").css("overflow","visible"),a.find(".post-comment-box").addClass("open")),a.find(".post-comment-box form").on("submit",function(){var t=angular.element(this).find("textarea").val();return""===t?angular.element(this).find("textarea").addClass("error"):(u.reply=t,angular.element(this).find("textarea").removeClass("error"),e.reply(u,function(t){t.data.success&&(a.find('.post-comment-box form input[type="submit"]').val("Success!"),setTimeout(function(){r.addClass("engaged"),a.find(".post-comment-box").removeClass("open"),a.find(".post-comment-box form textarea").val(""),setTimeout(function(){a.find(".post-link-share").css("overflow","hidden")},400)},1e3))})),!1})):"instagram"===c?"like"===l&&(u.like=1,u.action="add",n.like(u,function(a){a.data.success&&(r.addClass("engaged"),r.find(".count").html(m(t.find(".count").text())))})):"facebook"===c?"like"===l?(u.like=1,u.action="add",o.like(u,function(a){a.data.success&&(r.addClass("engaged"),r.find(".count").html(m(r.find(".count").text())))})):"comment"===l&&(u.comment="",u.action="add",a.find(".post-comment-box").hasClass("open")?(a.find(".post-comment-box").removeClass("open"),setTimeout(function(){a.find(".post-link-share").css("overflow","hidden")},400)):(a.find(".post-link-share").css("overflow","visible"),a.find(".post-comment-box").addClass("open")),a.find(".post-comment-box form").on("submit",function(){var t=angular.element(this).find("textarea").val();return""===t?angular.element(this).find("textarea").addClass("error"):(u.comment=t,angular.element(this).find("textarea").removeClass("error"),o.comment(u,function(t){t.data.success&&(a.find('.post-comment-box form input[type="submit"]').val("Success!"),setTimeout(function(){r.addClass("engaged"),r.find(".count").html(m(r.find(".count").text())),a.find(".post-comment-box").removeClass("open"),a.find(".post-comment-box form textarea").val(""),setTimeout(function(){a.find(".post-link-share").css("overflow","hidden")},400)},1e3))})),!1})):"flickr"===c?"favorite"===l?(u.favorite=1,u.action="add",s.favorite(u,function(a){a.data.success&&(r.addClass("engaged"),r.find(".count").html(m(r.find(".count").text())))})):"comment"===l&&(u.comment="",u.action="add",a.find(".post-comment-box").hasClass("open")?(a.find(".post-comment-box").removeClass("open"),setTimeout(function(){a.find(".post-link-share").css("overflow","hidden")},400)):(a.find(".post-link-share").css("overflow","visible"),a.find(".post-comment-box").addClass("open")),a.find(".post-comment-box form").on("submit",function(){var t=angular.element(this).find("textarea").val();return""===t?angular.element(this).find("textarea").addClass("error"):(u.comment=t,angular.element(this).find("textarea").removeClass("error"),s.comment(u,function(t){t.data.success&&(a.find('.post-comment-box form input[type="submit"]').val("Success!"),setTimeout(function(){r.addClass("engaged"),r.find(".count").html(m(r.find(".count").text())),a.find(".post-comment-box").removeClass("open"),a.find(".post-comment-box form textarea").val(""),setTimeout(function(){a.find(".post-link-share").css("overflow","hidden")},400)},1e3))})),!1})):"vimeo"===c?"like"===l?(u.like=1,u.action="add",i.like(u,function(a){a.data.success&&(r.addClass("engaged"),r.find(".count").html(m(r.find(".count").text())))})):"comment"===l&&(u.comment="",u.action="add",a.find(".post-comment-box").hasClass("open")?(a.find(".post-comment-box").removeClass("open"),setTimeout(function(){a.find(".post-link-share").css("overflow","hidden")},400)):(a.find(".post-link-share").css("overflow","visible"),a.find(".post-comment-box").addClass("open")),a.find(".post-comment-box form").on("submit",function(){var t=angular.element(this).find("textarea").val();return""===t?angular.element(this).find("textarea").addClass("error"):(u.comment=t,angular.element(this).find("textarea").removeClass("error"),i.comment(u,function(t){t.data.success&&(a.find('.post-comment-box form input[type="submit"]').val("Success!"),setTimeout(function(){r.addClass("engaged"),r.find(".count").html(m(r.find(".count").text())),a.find(".post-comment-box").removeClass("open"),a.find(".post-comment-box form textarea").val(""),setTimeout(function(){a.find(".post-link-share").css("overflow","hidden")},400)},1e3))})),!1})):"tumblr"===c&&("like"===l?(u.blogname=r.attr("data-blogname"),u.reblog_key=r.attr("data-reblogkey"),u.like=1,u.action="add",d.like(u,function(a){a.data.success&&(r.addClass("engaged"),r.siblings(".notes").find(".count").html(m(r.siblings(".notes").find(".count").text())))})):"reblog"===l&&(u.blogname=r.attr("data-blogname"),u.reblog_key=r.attr("data-reblogkey"),u.reblog="",u.action="add",d.reblog(u,function(a){a.data.success&&(r.addClass("engaged"),r.siblings(".notes").find(".count").html(m(r.siblings(".notes").find(".count").text())))})))}}}]);