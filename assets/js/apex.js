$(".article-alone:first-child").removeClass("article-alone-flex");


var artFirstFooter = $(".article-alone:first-child .article-alone-footer").prop("outerHTML");
$(artFirstFooter).appendTo('.article-alone:first-child .article-alone-content');
$(".article-alone:first-child .article-alone-footer:last").remove();

// $(".article-alone:first-child").height();
$(".article-alone:first-child .article-alone-thumb").css("height",$(".article-alone:first-child").height());

// 图像查看器插件
$(".post-main-content img:not('.no-lightbox')").each(function(){
    var imgSrc = $(this).attr('src');
    $(this).wrap("<a class='img-a img-group' data-fancybox='group' href='javascript:;'></a>");
    $(this).parent().attr('href',imgSrc);
});

//给文章页a标签添加target='_blank'属性
$(".post-main-content a:not('.img-a')").attr('target','_blank');

// 标签云随机色
var tag_cloud = $('.post-tags>a');
tag_cloud.each(function () {
var Cnum = 8;
var Crand = parseInt(Math.random() * Cnum);
$(this).addClass("tags-style" + Crand);
});

// 返回顶部
function ReTop() {
    var DomscrollTop = $(document).scrollTop();
    if (DomscrollTop > 450) {
        $(".retop").css("display", "block");
    } else {
        $(".retop").css("display", "none");
    }
    setTimeout(ReTop);
}
ReTop();
$(".retop").click(function() {
    $('html,body').animate({
            scrollTop: 0
        },
        400);
});
// 文章页表单类名
$(".post-main-content input").addClass("form-control");

$(".post-main-content h1,.post-main-content h2,.post-main-content h3,.post-main-content h4,.post-main-content h5,.post-main-content h6").wrap("<div class='post-h-box'</div>");
