var oLdA = $('.nav .same_a').eq(0);
$('.nav .same_a').on('click', function () {
    oLdA.css({
        "border-bottom": "",
    });
    oLdA = $(this);
    $(this).css({
        "border-bottom": "2px solid #1A2D27",
    });
});

$(document).on("click", '.same_a,.user_list a,.second_list a', function () {
    $("body").getNiceScroll().resize();
});
//通过class绑定click事件，可以只点击一次就触发事件，否则需要点击两次

var Select_One_Div = $('.Select_One_Div');
for (var i = 0; i < 15; i++) {
    var select_one = $('<div class="same_module"><a href="javascript:;"><img src="../img/2.jpg"></a><span>梨视频</span></div>');
    Select_One_Div.append(select_one);
};

var oLd_div = $('.all_content .Select').eq(0);

$('.nav .same_a').on('click', function () {
    var index = $('.nav .same_a').index(this); //判断元素在当前的位置是第几个元素
    oLd_div.css({
        display: 'none',
    });
    oLd_div = $('.all_content .Select').eq(index);
    $('.all_content .Select')
        .eq(index)
        .css({
            display: 'flex',
        });
    $('.lastLong').css({
        'display': 'none',
    });
});

var length = $('.user_list a').length;
var Select_Two_Div = $('.Select_Two_Div');

for (var i = 0; i < length; i++) {
    var select_two = $('<div class="Select_Much"></div>');
    Select_Two_Div.append(select_two);
}

$('.Select_Much').eq(0).css({
    "display": "block",
});

var oLd = $('.user_list a').eq(0);
var oLdDiv = $('.Select_Much').eq(0);
$('.user_list a').on('click', function () {
    var index = $('.user_list a').index(this); //判断元素在当前的位置是第几个元素
    oLdDiv.css({
        display: 'none',
    });
    oLdDiv = $('.Select_Much').eq(index);
    $('.Select_Much')
        .eq(index)
        .css({
            display: 'block',
        });
    oLd.css({
        background: '',
    });
    oLd = $(this);
    $(this).css({
        background: '#dbdada',
    });
    //清空上一个的属性，给当前的元素添加属性
});
//左边书籍的列表

var SelectDiv = $('.Select_Much');
for (var i = 0; i < 3; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(0).append(AddDiv);
};

for (var i = 0; i < 4; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(1).append(AddDiv);
};

for (var i = 0; i < 5; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(2).append(AddDiv);
};

for (var i = 0; i < 6; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(3).append(AddDiv);
};

for (var i = 0; i < 7; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(4).append(AddDiv);
};

for (var i = 0; i < 8; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(5).append(AddDiv);
};

for (var i = 0; i < 9; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(6).append(AddDiv);
};

var ImgArray = new Array(7);
ImgArray[0] = "https://upload-images.jianshu.io/upload_images/10560804-8aa981c5b24fc5ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
ImgArray[1] = "https://upload-images.jianshu.io/upload_images/1786985-8fcfc8b80aa0b849.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
ImgArray[2] = "https://upload-images.jianshu.io/upload_images/10924287-982b99f46b8b2351.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
ImgArray[3] = "https://upload-images.jianshu.io/upload_images/3054428-209aa6c6ffa598b9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
ImgArray[4] = "https://upload-images.jianshu.io/upload_images/4969338-17d4b5c6ac3d9bca.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
ImgArray[5] = "https://upload-images.jianshu.io/upload_images/6753085-b4dbea0286a4cbe7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
ImgArray[6] = "https://upload-images.jianshu.io/upload_images/2001577-b04bbf786966ea09.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";

SelectDiv.eq(0).find("img").attr("src", ImgArray[0]);
SelectDiv.eq(0).find(".under_line").html("五一，差点只剩半条命！");
SelectDiv.eq(0).find(".bottom_first_a").html("5312Ana");
SelectDiv.eq(0).find(".bottom_two_a").append("<b>20</b>");
SelectDiv.eq(0).find(".bottom_first_span").append("<b>19</b>");
SelectDiv.eq(0).find(".bottom_two_span").append("<b>1</b>");
SelectDiv.eq(0).find("p").html("原本打算五一跟朋友跑完半程马拉松后就去北海拍海景，然而不幸的是，她准备跑到终点时突然晕倒了，虽然我没体验过这种晕倒的感觉，但可以想象出这种从鬼门关出来人的有多不易。");

SelectDiv.eq(1).find("img").attr("src", ImgArray[1]);
SelectDiv.eq(1).find(".under_line").html("减重6.6斤，我只用了28天");
SelectDiv.eq(1).find(".bottom_first_a").html("芊芊妈成长札记");
SelectDiv.eq(1).find(".bottom_two_a").append("<b>13</b>");
SelectDiv.eq(1).find(".bottom_first_span").append("<b>19</b>");
SelectDiv.eq(1).find(".bottom_two_span").append("<b>1</b>");
SelectDiv.eq(1).find("p").html("缘起 生下二宝芊芊之后，我的体重一直在51kg~53kg徘徊，按照《中国居民膳食指南2016》判断健康体重的体质指数（BMI）=体重/身高的平方计算，我的BMI在21.5~22.34之间，属于健康体重的范围。但是由于产后基本没做运动，整个人看起来肉肉的，特别是背部、手臂，让本来海拔就不高的我显得特别粗壮，穿衣服也不好看，有时候自己都嫌弃自己，整个人也没自信，我老公一句开玩笑的话：“不认识你的人从后面看还以为你是男士”更是戳中了我的心。");

SelectDiv.eq(2).find("img").attr("src", ImgArray[2]);
SelectDiv.eq(2).find(".under_line").html("村上春树谈写作和跑步");
SelectDiv.eq(2).find(".bottom_first_a").html("阅悦生");
SelectDiv.eq(2).find(".bottom_two_a").append("<b>15</b>");
SelectDiv.eq(2).find(".bottom_first_span").append("<b>56</b>");
SelectDiv.eq(2).find(".bottom_two_span").append("<b>0</b>");
SelectDiv.eq(2).find("p").html("01 前两天在网上买了村上春树的《当我谈跑步时我谈些什么》，今天就送到家里了。等忙完其他一切，空闲下来就拿到手上看。大概看了有两个小时吧，还没看完。到楼下跑完步之后，把前面的读书笔记整理了一下，总结出来。");

SelectDiv.eq(3).find("img").attr("src", ImgArray[3]);
SelectDiv.eq(3).find(".under_line").html("健身 | 为什么你瘦不下来？");
SelectDiv.eq(3).find(".bottom_first_a").html("黄小妞儿");
SelectDiv.eq(3).find(".bottom_two_a").append("<b>2</b>");
SelectDiv.eq(3).find(".bottom_first_span").append("<b>17</b>");
SelectDiv.eq(3).find(".bottom_two_span").append("<b>0</b>");
SelectDiv.eq(3).find("p").html("文/黄小妞 距离上次我写的《从138斤减到110斤，我经历了什么？》已经有一个多月了，这期间我收到了太多的留言和评论。今天我整理了下，总结出了大家瘦不下来的6大原因，同时给出了答案，这些肯定会对你帮助很大。");

SelectDiv.eq(4).find("img").attr("src", ImgArray[4]);
SelectDiv.eq(4).find(".under_line").html("减肥的具体方法");
SelectDiv.eq(4).find(".bottom_first_a").html("李翔_数字游牧读书会");
SelectDiv.eq(4).find(".bottom_two_a").append("<b>2</b>");
SelectDiv.eq(4).find(".bottom_first_span").append("<b>18</b>");
SelectDiv.eq(4).find(".bottom_two_span").append("<b>0</b>");
SelectDiv.eq(4).find("p").html("过去我认为减肥就是少吃多动，这两天仔细研究后发现，我错了。少吃在减肥初期确实会让自己的体重快速下降，但身体会在几天后从高能耗状态切换到低能耗状态，然后减肥的速度就会立刻减慢，更糟糕的是减肥结束后，体重会疯狂反弹。");

SelectDiv.eq(5).find("img").attr("src", ImgArray[5]);
SelectDiv.eq(5).find(".under_line").html("梦想");
SelectDiv.eq(5).find(".bottom_first_a").html("三亚不仔客应伟");
SelectDiv.eq(5).find(".bottom_two_a").append("<b>16</b>");
SelectDiv.eq(5).find(".bottom_first_span").append("<b>11</b>");
SelectDiv.eq(5).find(".bottom_two_span").append("<b>1</b>");
SelectDiv.eq(5).find("p").html("记得大学放假一次高中同学聚会，大家聊的正欢的时候，我突然问了大家一句：大家现在的梦想是什么？当时一位同学嘲笑到，都马上大学毕业了，还要什么梦想，找份好工作努力赚钱。当时内心真的很想反驳一下，为了避免尴尬，我还是压抑住自己的情绪。");

SelectDiv.eq(6).find("img").attr("src", ImgArray[6]);
SelectDiv.eq(6).find(".under_line").html("跑步这件神奇的事");
SelectDiv.eq(6).find(".bottom_first_a").html("浵浵的妈妈");
SelectDiv.eq(6).find(".bottom_two_a").append("<b>13</b>");
SelectDiv.eq(6).find(".bottom_first_span").append("<b>47</b>");
SelectDiv.eq(6).find(".bottom_two_span").append("<b>0</b>");
SelectDiv.eq(6).find("p").html("从2015年我第一次踏上跑步机至今，我已经跑步满三年了，最初的动机是产后减肥，时至今日跑步已成为我的一种生活习惯。很多人认识我源于我2016年那篇关于自律的文字，不可否认跑步是我一切自律行动的开始，是跑步让我拥有了自律和坚韧的品质。总是有人不断问我如何跑步怎么坚持，所以今天我就来说说跑步这件神奇的事。");

// SelectDiv.eq().find("img").attr("src", ImgArray[]);
// SelectDiv.eq().find(".under_line").html("");
// SelectDiv.eq().find(".bottom_first_a").html("");
// SelectDiv.eq().find(".bottom_two_a").append("<b></b>");
// SelectDiv.eq().find(".bottom_first_span").append("<b></b>");
// SelectDiv.eq().find(".bottom_two_span").append("<b></b>");
// SelectDiv.eq().find("p").html("");
//模板


$(function () {
    $(".draw_text").each(function () {
        var maxwidth = 72;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + "...");
        };
    });
    //限制字数，超过显示...
});

var Select_Three_Div = $('.Select_Three_Div');

var carousel_contain = $('<section></section>');
for (var i = 0; i < 5; i++) {
    var five_block = $('<div><a href="javascript:;"><img src=""><span></span></a><span class="issue"></span></div>');
    carousel_contain.append(five_block);
}
$('.recommed_topic li').append(carousel_contain);

var Issue = new Array(6);
Issue[0] = "../img/4.jpg";
Issue[1] = "../img/5.jpg";
Issue[2] = "../img/6.jpg";
Issue[3] = "../img/7.jpg";
Issue[4] = "../img/8.jpg";
Issue[5] = "../img/9.jpg";

$('.recommed_topic li').eq(0).find("img").attr("src", Issue[0]);
$('.recommed_topic li').eq(0).find("span").html("知识产权保卫战");
$('.recommed_topic li').eq(0).find(".issue").html("该议题被浏览 2223661 次");
$('.recommed_topic li').eq(1).find("img").attr("src", Issue[1]);
$('.recommed_topic li').eq(1).find("span").html("知识产权保卫战");
$('.recommed_topic li').eq(1).find(".issue").html("该议题被浏览 2223661 次");
$('.recommed_topic li').eq(2).find("img").attr("src", Issue[2]);
$('.recommed_topic li').eq(2).find("span").html("知识产权保卫战");
$('.recommed_topic li').eq(2).find(".issue").html("该议题被浏览 2223661 次");
$('.recommed_topic li').eq(3).find("img").attr("src", Issue[3]);
$('.recommed_topic li').eq(3).find("span").html("知识产权保卫战");
$('.recommed_topic li').eq(3).find(".issue").html("该议题被浏览 2223661 次");
$('.recommed_topic li').eq(4).find("img").attr("src", Issue[4]);
$('.recommed_topic li').eq(4).find("span").html("知识产权保卫战");
$('.recommed_topic li').eq(4).find(".issue").html("该议题被浏览 2223661 次");
$('.recommed_topic li').eq(5).find("img").attr("src", Issue[5]);
$('.recommed_topic li').eq(5).find("span").html("知识产权保卫战");
$('.recommed_topic li').eq(5).find(".issue").html("该议题被浏览 2223661 次");

var Video_list = $('.Video_list');
var article_list = $('.article_list');
var select_Btn = $('<div class="Select_Much" style="display:flex;"></div>');
var get_more_one = $('<div class="contain_a"><a class="contain_span" href="javascript:;"><span class="change_circle">Get More<i class="iconfont">&#xe6c3;</i></span></a></div>');
var get_more_two = $('<div class="contain_a"><a class="contain_span" href="javascript:;"><span class="change_circle">Get More<i class="iconfont">&#xe6c3;</i></span></a></div>');
var get_more_three = $('<div class="contain_a"><a class="contain_span" href="javascript:;"><span class="change_circle">Get More<i class="iconfont">&#xe6c3;</i></span></a></div>');

for (var i = 0; i < 5; i++) {
    var v_list = $('<div class="same_module"><a href="javascript:;"><img src="../img/2.jpg"></a><span>梨视频</span></div>');
    Video_list.append(v_list);
}

Video_list.append(get_more_one);

for (var i = 0; i < 6; i++) {
    var a_list = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>');
    select_Btn.append(a_list);
}

article_list.append(select_Btn);
article_list.append(get_more_two);

select_Btn.eq(0).find("img").attr("src", ImgArray[0]);
select_Btn.eq(0).find(".under_line").html("五一，差点只剩半条命！");
select_Btn.eq(0).find(".bottom_first_a").html("5312Ana");
select_Btn.eq(0).find(".bottom_two_a").append("<b>20</b>");
select_Btn.eq(0).find(".bottom_first_span").append("<b>19</b>");
select_Btn.eq(0).find(".bottom_two_span").append("<b>1</b>");
select_Btn.eq(0).find("p").html("原本打算五一跟朋友跑完半程马拉松后就去北海拍海景，然而不幸的是，她准备跑到终点时突然晕倒了，虽然我没体验过这种晕倒的感觉，但可以想象出这种从鬼门关出来人的有多不易。");

var answer_list = $('.answer_list');
var w_list_container = $('<section></section>');
for (var i = 0; i < 6; i++) {
    var w_list = $('<div><a href="javascript:;"><img src=""><span class="top_img_span"></span></a><span class="issue"></span></div>');
    w_list_container.append(w_list);
}
answer_list.append(w_list_container);
answer_list.append(get_more_three);

$('.answer_list section').eq(0).find("img").attr("src", Issue[0]);
$('.answer_list section').eq(0).find(".top_img_span").html("知识产权保卫战");
$('.answer_list section').eq(0).find(".issue").html("该议题被浏览 2223661 次");

var collect_video = $('.collect_video');
var collect_article = $('.collect_article');
var collect_answer = $('.collect_answer');

var collect_answer_contain = $('<section></section>');
for (var i = 0; i < 6; i++) {
    var collect_answer_list = $('<div><a href="javascript:;"><img src=""><span class="top_img_span"></span></a><span class="issue"></span></div>');
    collect_answer_contain.append(collect_answer_list);
}
collect_answer.append(collect_answer_contain);

$('.collect_answer section').eq(0).find("img").attr("src", Issue[0]);
$('.collect_answer section').eq(0).find(".top_img_span").html("知识产权保卫战");
$('.collect_answer section').eq(0).find(".issue").html("该议题被浏览 2223661 次");

for (var i = 0; i < 20; i++) {
    var c_video = $('<div class="same_module"><a href="javascript:;"><img src="../img/2.jpg"></a><span>梨视频</span></div>');
    collect_video.append(c_video);
}

$('.same_module a').hover(function () {
    $(this).addClass("a_hover a_hover_a");
}, function () {
    $(this).removeClass("a_hover a_hover_a");
});

var select_Article = $('<div class="Select_Much" style="display:flex;"></div>');

for (var i = 0; i < 6; i++) {
    var wen_list = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>');
    select_Article.append(wen_list);
}

collect_article.append(select_Article);

select_Article.eq(0).find("img").attr("src", ImgArray[0]);
select_Article.eq(0).find(".under_line").html("五一，差点只剩半条命！");
select_Article.eq(0).find(".bottom_first_a").html("5312Ana");
select_Article.eq(0).find(".bottom_two_a").append("<b>20</b>");
select_Article.eq(0).find(".bottom_first_span").append("<b>19</b>");
select_Article.eq(0).find(".bottom_two_span").append("<b>1</b>");
select_Article.eq(0).find("p").html("原本打算五一跟朋友跑完半程马拉松后就去北海拍海景，然而不幸的是，她准备跑到终点时突然晕倒了，虽然我没体验过这种晕倒的感觉，但可以想象出这种从鬼门关出来人的有多不易。");

$('.nav .same_a').eq(4).on('click', function () {
    $('.lastLong').css({
        'display': 'block',
    });
});

var OldElement = $('.collect').eq(0);

$('.second_list a').on('click', function () {
    var index = $('.second_list a').index(this);
    OldElement.css({
        'display': 'none',
    });
    OldElement = $('.collect').eq(index);
    $('.collect').eq(index).css({
        'display': 'flex',
    });
});