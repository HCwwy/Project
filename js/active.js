
$(function() {
    var cncw = $('.cate_nav_content_wraaper li');
    var cndw = $('.cate_nav_detail_wraaper .cate_nav_detail');
    cncw.mouseover(function() {
        cndw.parent().addClass('active');
        // 获取li元素的当前的下标 
        var index = cncw.index(this);

        // 给cndw里的相对应li的元素添加active
        cndw.eq(index).addClass('active')
        .siblings().removeClass('active');
    }).mouseout(function() {
        cndw.parent().removeClass('active');
    })
});