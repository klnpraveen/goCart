(function(e){var t={initX:0,initY:0,currentQuad:null,init:function(r){e("body").append(t.menu=n.createMenu());t.options=r;t.options.buttons&&t.setButtons(r.buttons);e(document).on("mousemove",function(e){t.currentMouseX=e.clientX;t.currentMouseY=e.clientY});e(document).on("keydown",function(e){e.keyCode==16&&!t.isOpened&&n.openMenu(e)}).on("keyup",function(e){n.closeMenu(e)})},setButtons:function(e){for(var r in e)t.menu.children(n.strFormat(".{{pos}}",{pos:r})).children(".hm-text").html(n.strFormat('<i class="{{icon}}"></i><span>{{text}}</span>',{icon:e[r].icon,text:e[r].text}))}},n={createMenu:function(){var t=e('<div id="hovermenu" class="initial">'),n="",r='<div class="hm-pie"></div><div class="hm-text"></div>',i="tb",s="rl";for(var o in i)for(var u in s)n+='<div class="hm-btn '+i[o]+s[u]+'">'+r+"</div>";t.append(n);return t},openMenu:function(r){t.initX=t.currentMouseX;t.initY=t.currentMouseY;t.isOpened=!0;t.closeTimer&&clearTimeout(t.closeTimer);var i=e(document).scrollTop();t.menu.css({left:t.currentMouseX-115+"px",top:t.currentMouseY-115+i+"px"});t.menu.show();e(document).on("mousemove",n.onDrag);setTimeout(function(){t.menu.removeClass("initial")},1)},closeMenu:function(){t.isOpened=!1;var r=t.currentQuad;t.options.buttons&&t.options.buttons[r]&&t.options.buttons[r].callback&&t.options.buttons[r].callback();t.menu.addClass("initial");t.currentQuad=null;e(document).off("mousemove",n.onDrag);t.closeTimer=setTimeout(function(){t.menu.hide();t.menu.children(".hm-btn").removeClass("active")},200)},onDrag:function(e){if(Math.abs(e.clientY-t.initY)>15&&Math.abs(e.clientX-t.initX)>15){var n="",r=t.initY>e.clientY?"t":"b",i=t.initX>e.clientX?"l":"r";if(!t.currentQuad||t.currentQuad!=r+i){t.menu.children(".hm-btn").removeClass("active");t.menu.children("."+r+i).addClass("active");t.currentQuad=r+i}}else{t.menu.children(".hm-btn").removeClass("active");t.currentQuad=null}},strFormat:function(e,t){for(var n in t){var r=new RegExp("{{\\s*"+n+"\\s*}}","g");e=e.replace(r,t[n])}return e}};e.hovermenu=function(n){if(t[n])return t[n].apply(this,Array.prototype.slice.call(arguments,1));if(typeof n=="object"||!n)return t.init.apply(this,arguments);e.error("Method "+n+" does not exist on HoverMenu ")}})(jQuery);$(function(){function e(e){$(".action").stop().css("opacity","1").text(e).show().fadeOut(3e3,function(){$(this).text("CLICK ANY WHERE ON THE PAGE!").css("opacity","1").show()})}$.hovermenu("init",{buttons:{tl:{icon:"fa fa-power-off",text:"Logout",callback:function(){window.open("lock.html","_self")}},tr:{icon:"fa fa-file-text",text:"Docs",callback:function(){window.location.href="documentation/#overview"}},bl:{icon:"fa fa-male",text:"Support",callback:function(){window.open("http://bootstrapguru.com/forums/forum/delighted/","_self")}},br:{icon:"fa fa-envelope",text:"Contact",callback:function(){window.open("http://bootstrapguru.com/contact/","_blank")}}}})});