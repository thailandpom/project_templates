function strip_html_tags(a){return null!==a&&""!==a&&(a=a.toString(),a.replace(/<[^>]*>/g,""))}function getboxhtml(a){var b="";for(i=0;i<a.length;i++){if(1==a[i].news_cat_id)var c="\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21";else if(2==a[i].news_cat_id)var c="\u0E02\u0E48\u0E32\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C";b+="<div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 line-content\">",b+="<a href=\""+"{{route('newsDetail')}}/"+a[i].news_id+"\" class=\"wrapper_news_card_link\">",b+="<div class=\"wrapper-news-card \">",b+="<div class=\"wrap_news_card_thumbnail\">",b+="<div class=\"wrapper-news-card-thumbnail\" style=\"background-image: url({{config('app.url')}}/SPR/media/news/"+a[i].news_img+")\">",b+="</div>",b+="</div>",b+="<div class=\"wrapper-news-card-detail\">",b+="<div class=\"wrapper-news-card-tag\">",1==a[i].news_cat_id?b+="<p class=\"text-red text-uppercase\"><b>\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21</b></p>":2==a[i].news_cat_id&&(b+="<p class=\"text-orange text-uppercase\"><b>\u0E02\u0E48\u0E32\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C</b></p>"),b+="</div>",b+="<div class=\"wrapper-news-card-title text-blue\">",b+="<h4 style=\"text-transform: capitalize;\">"+strip_html_tags(a[i].title)+"</h4>",b+="</div>",b+="<div class=\"wrapper-news-card-date text-gray\">",b+="<p>"+a[i].news_publish_date+"</p>",b+="</div>",b+="</div>",b+="</div>",b+="</a>",b+="</div>"}$("#div-data-fiilter").html(b)}function ListPage(){var a=6,b=0,c=0,d=$(".line-content").length/6,e=Math.floor(d/a);1>d?$("#wrap_pagination").hide():$("#wrap_pagination").show();for(var f=0;f<d;f++)$("#pagin").append("<li><a href=\"#\">"+(f+1)+"</a></li> "),6<f&&$("#pagin li").eq(f).hide();var g=$("<li/>").addClass("prev").html("").click(function(){b-=5,a-=5,c--,slide()});g.hide();var h=$("<li/>").addClass("next").html("").click(function(){b+=5,a+=5,c++,slide()});$("#pagin").prepend(g).append(h),$("#pagin li").first().find("a").addClass("current"),slide=function(){for($("#pagin li").hide(),t=b;t<a;t++)$("#pagin li").eq(t+1).show();0==b?(h.show(),g.hide()):c==e?(h.hide(),g.show()):(h.show(),g.show())},showPage=function(a){$(".line-content").hide(),$(".line-content").each(function(b){b>=6*(a-1)&&b<6*a&&$(this).show()})},showPage(1),$("#pagin li a").eq(0).addClass("current"),$("#pagin li a").click(function(){$("#pagin li a").removeClass("current"),$(this).addClass("current"),showPage(parseInt($(this).text()))})}$(document).ready(function(){var a={type_filter:$("#type_filter").val(),year_filter:$("#year_filter").val(),month_filter:$("#month_filter").val(),news_sticky_1:$("#news_sticky_1").val(),news_sticky_2:$("#news_sticky_2").val()};$.ajax({url:"{{route('FilterNews')}}",type:"post",data:a,headers:{"X-CSRF-TOKEN":$("meta[name=\"csrf-token\"]").attr("content")},success:function(a){getboxhtml(a.data),ListPage()}}),$("#type_filter").on("change",()=>{var a={type_filter:$("#type_filter").val(),year_filter:$("#year_filter").val(),month_filter:$("#month_filter").val(),news_sticky_1:$("#news_sticky_1").val(),news_sticky_2:$("#news_sticky_2").val()};$.ajax({url:"{{route('FilterNews')}}",type:"post",data:a,headers:{"X-CSRF-TOKEN":$("meta[name=\"csrf-token\"]").attr("content")},success:function(a){$("#div-data-fiilter").html(""),$("#pagin").html(""),getboxhtml(a.data),ListPage()}})}),$("#year_filter").on("change",()=>{var a={type_filter:$("#type_filter").val(),year_filter:$("#year_filter").val(),month_filter:$("#month_filter").val(),news_sticky_1:$("#news_sticky_1").val(),news_sticky_2:$("#news_sticky_2").val()};$.ajax({url:"{{route('FilterNews')}}",type:"post",data:a,headers:{"X-CSRF-TOKEN":$("meta[name=\"csrf-token\"]").attr("content")},success:function(a){$("#div-data-fiilter").html(""),$("#pagin").html(""),getboxhtml(a.data),ListPage()}})}),$("#month_filter").on("change",()=>{var a={type_filter:$("#type_filter").val(),year_filter:$("#year_filter").val(),month_filter:$("#month_filter").val(),news_sticky_1:$("#news_sticky_1").val(),news_sticky_2:$("#news_sticky_2").val()};$.ajax({url:"{{route('FilterNews')}}",type:"post",data:a,headers:{"X-CSRF-TOKEN":$("meta[name=\"csrf-token\"]").attr("content")},success:function(a){$("#div-data-fiilter").html(""),$("#pagin").html(""),getboxhtml(a.data),ListPage()}})})});