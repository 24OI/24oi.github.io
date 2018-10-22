function Head(){
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"/blog/blog.css\" />");
	//document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async\"></script>");
	document.write("<script type=\"text/javascript\" async src=\"/Mathjax/MathJax.js?config=default\"></script>");
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"/highlight/styles/default.css\" />");
	document.write("<script src=\"/highlight/highlight.pack.js\"> </script>");
	document.write("<script>hljs.initHighlightingOnLoad();</script>");
	document.write("<script src=\"/ball.js\"> </script>");
}
function Bottom(){
document.write(" \
	<section class=\"card\" onclick=\"Top();\"> \
		<p class=\"describe\" style=\"font-size:15px\"> 没东西啦！再看一遍吧qwq！点击这里来回到顶部！=w= <br /> \
		顺便说一句，点击每页最上方的大标题返回上一页,鼠标移到公式上放大qwq！</p> \
	</section> \
	<a href=\"/about.html\"> \
		<section class=\"card\"> \
			<p class=\"proud\"> 自豪地使用24人自己亲手写的blog </p> \
		</section> \
	</a> \
")
}

function Up(){
	if( document.documentElement.scrollTop == 0 ) return;
	document.documentElement.scrollTop -= document.documentElement.scrollTop/40.0;
	t = setTimeout(function(){Up()},5);
}
function Top(){
	Up()
}
function Sidebar(){
document.write(" \
<div class=\"sidebar\"> \
	<section class=\"sidecard\"> \
		<img src=/img/index/head.jpeg class=\"head\" style=\"margin-bottom:0px\"> </img> \
		<h1 class=\"sidetitle\"> 24OI </h1> \
		<h2 class=\"sentence\"> AKIOI! </h2> \
	</section> \
	<section class=\"sidecard\" style=\"opacity:1; background:#dddddd\"> \
		<h2 class=\"sidetitle\" style=\"margin-bottom:0px\"> 随机出来的妹子图qwq </h2> \
		<img src=\"https://api.3ewl.cc/acg/img.php\" class=\"girlimg\"/> \
		<div class=\"sidecont\" style=\"margin-top:0px;margin-bottom:1px; text-align:center; font-size:11px; padding-left:23px; letter-spacing:23px\"> 鼠标移上以舔屏 </div> \
	</section> \
	<section class=\"sidecard\"> \
		<h2 class=\"sidetitle\"> dalao们 </h2> \
		<a href=\"https://captain1.cnblogs.com/\"> \
			<div class=\"friendlink\"> \
				<div style=\"color:#000;display:inline;\"> L</div><div style=\"color:#f00;display:inline;\">iboao </div>大佬的博客 \
			</div> \
		</a> \
		<a href=\"https://mrclr.cnblogs.com/\"> \
			<div class=\"friendlink\"> \
				mrclr大佬的博客 \
			</div> \
		</a> \
		<a href=\"https://yuyanjiaB.cnblogs.com/\"> \
			<div class=\"friendlink\"> \
				BZY (bin哥) \
			</div> \
		</a> \
		<a href=\"http://www.cnblogs.com/ivorysi\"> \
			<div class=\"friendlink\"> \
				在下司公子，又名4 + 7 \
			</div> \
		</a> \
		<a href=\"http://interestingLSY.coding.me/MyBlog\"> \
			<div class=\"friendlink\" style=\"font-size:14px\"> \
				小蒟蒻intLSY(也是博客编写者...)的博客 \
			</div> \
		</a> \
		<a href=\"https://shulker.cnblogs.com/\"> \
			<div class=\"friendlink\"> \
				.....(nxy的博客) \
			</div> \
		</a>  \
		<a href=\"https://Ch-someone.cnblogs.com/\"> \
			<div class=\"friendlink\"> \
				GGF主席杜子德 \
			</div> \
		</a> \
	</section> \
	<section class=\"sidecard\"> \
		<h2 class=\"sidetitle\"> 试着联系我们？ </h2> \
		<div class=\"sidecont\"> \
			官皮qq: 2408517385 <br /> \
			0x18编程社官方qq群：645530140 <br />\
			github: <a href=\"https://github.com/24OI/24oi.github.io\">24oi</a> <br /> \
			博客出锅了记得跟我们说qwq \
		</div> \
	</section> \
	<section class=\"sidecard\"> \
		<h2 class=\"sidetitle\" style=\"margin-bottom:0px\"> 来访的dalao们 </h2> \
		<a href=\"https://info.flagcounter.com/63P8\"><img class=\"sideimg\" style=\"margin:10px\" src=\"https://s01.flagcounter.com/count/63P8/bg_FFFFFF/txt_000000/border_CCCCCC/columns_3/maxflags_6/viewers_3/labels_1/pageviews_0/flags_0/percent_0/\" border=\"0px\"></a> \
	</section> \
</div> \
")
}
/*
old_img:https://acg.toubiec.cn/random.php?fa8e648d8f8fcb8469b51515
new_img:https://api.3ewl.cc/acg/img.php
*/
