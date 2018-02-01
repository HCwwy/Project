
$(function() {
    // 获得轮播的图片div
    var slider_i = $('.slider .slider_item');

    // 获得一起切换的列表
    var pag = $('.slider_pagination .pagination');

    var slider = $('.slider');

    // 设定下标
    var index = 0;

    // 设定定时器
    var Timer = null;

    // 获取图片的数量
    var len = slider_i.length;



    var btn_n = $('.btn-next');
    var btn_p = $('.btn-pre');

    btn_n.click(function() {
        if(index <= 0) {
            index = len;
            index--;
            pagshow(index);
        } else {
            index--;
            pagshow(index);
        }
        console.log(index);
    });

    btn_p.click(function() {
        index++;
        pagshow(index);
        if(index == len) {
            index = 0;
            pagshow(index);
        }
        console.log(index);
    })

    pag.mouseover(function() {
        index = pag.index(this);
        pagshow(index);
    }).eq(0).mouseover();

    slider.hover(function() {
        if(Timer) {
            clearInterval(Timer);
        }
    },function() {
        clearInterval(Timer);
        Timer = setInterval(function() {
            pagshow(index);
            index++;
            if (index == len) {
                index = 0;
            }
        },3000)
    }).trigger("mouseleave");


    function pagshow(index) {
        slider_i.eq(index).stop(true,true)
        .css("opacity","1").siblings().css("opacity","0");

        pag.eq(index).css("opacity","0.9")
        .siblings().css("opacity","0.2");
    }
});

