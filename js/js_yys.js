/**
 * Created by Administrator on 2019/7/29.
 */
$(function(){

    $('.off img').click(function(){
        //将当前窗口的内容区滚动高度改为0，即顶部
        $("html,body").animate({scrollTop:0},"fast");
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $(".off").fadeIn(100)
        }else{
            $(".off").fadeOut(1000)
        }
    });

    $(".wrap .content .nav .sub_title ul li a").hover(
        function () {
            $(".wrap .content .nav .sub_title ul li:not('.current') a").css({color:"#333"})
            $(this).css({color:"#FF838B"})
        },
        function () {
            $(".wrap .content .nav .sub_title ul li:not('.current') a").css({color:"#333"})
        })
    $(".wrap .content .sub_sub_title ul li a").hover(
        function () {
            $(".wrap .content .sub_sub_title ul li:not(':first()') a").css({color:"#333"})
            $(this).css({color:"#FF838B"})
        },
        function () {
            $(".wrap .content .sub_sub_title ul li:not(':first()') a").css({color:"#333"})
        })
    $(".wrap .content .sub_sub_title ul li:last-child").hover(
        function(){
            $(".wrap .content .sub_sub_title ul .last .hidden").css({display:"block"})
            $(".wrap .content .lun_bo").css({display:"none"})
            $(".wrap .content .small_pic").css({display:"none"})
        },
        function () {
            $(".wrap .content .sub_sub_title ul .last .hidden").css({display:""})
            $(".wrap .content .lun_bo").css({display:"block"})
            $(".wrap .content .small_pic").css({display:"block"})
        })
    $(".wrap .content .lun_bo .left").click(function () {
        var i =$(".wrap .content .lun_bo .slide").position().left;
        if(i==0||i==-3||i==-6){
            $(".wrap .content .lun_bo .left").css({opacity:"0.2"})
        }
        else{
            $(".wrap .content .lun_bo .slide").offset({left:i+854})
        }
    })
    $(".wrap .content .lun_bo .right").click(function () {
        var j =$(".wrap .content .lun_bo .slide").position().left;
        if(j==-2721||j==-2724){
            $(".wrap .content .lun_bo .right").css({opacity:"0.2"})
        }
        else{
            $(".wrap .content .lun_bo .slide").offset({left:j-1186})
        }
    })
    $(".wrap .content .small_pic ul li a").hover(
        function () {
            $(".wrap .content .small_pic ul li a").css({color:"#333"})
            $(this).css({color:"#FF838B"})
        },
        function(){
            $(".wrap .content .small_pic ul li a").css({color:"#333"})
        })
    $(".wrap .content .kind>ul>li>a").click(function () {
        $(".wrap .content .kind >ul >li>a").next().css({display:"none"})
        $(this).next().css({display:"block"})
        var k=$(this).position().left;
        var width = $(this).outerWidth()
        $(".wrap .content .kind ul .box").animate({left:k,width:width+"px"},500);
    })
    $(".wrap .content .nav .sub_title ul li").click(function () {
        $(".wrap .content .nav .sub_title ul li i").css({display:"none"})
        $(".wrap .content .nav .sub_title ul li b").css({display:"none"})
        $(this).find("i").css({display:"block"})
        $(this).find("b").css({display:"block"})
    })
    $(".wrap .content .menu>ul>li").click(function () {
        var i=$(this).index();
        $(".wrap .content .menu .box").css({display:"none"})
        $(".wrap .content .menu>ul>li").css({backgroundColor:"#cccccc"})
        $(".wrap .content .menu .box").eq(i).css({display:"block"})
        $(this).css({"background-color": "#FF838B"})
    })
    $(".wrap .content .show .left>ul>li:not(.before,.after)").click(function () {
        var k=$(this).index()
        if(k==1){
            $(".wrap .content .show .left>ul .before").css({display:"none"})
        }
        if(k>1){$(".wrap .content .show .left>ul>li").css({display:"block"})}
        if(k==5){
            $(".wrap .content .show .left>ul .after").css({display:"none"})
        }
        if(k<5){
            $(".wrap .content .show .left>ul .after").css({display:"block"})
        }
        $(".wrap .content .show .left>ul>li").removeClass("now")
        if($(this).hasClass("now")==false){
            $(this).addClass("now")
        }

    })
    $(".wrap .content .show .left>ul .before").on("click", function () {
        var l=$(".wrap .content .show .left>ul").find(".now").index()
        //alert(l)
        $(".wrap .content .show .left .new_list").css({display:"none"})
        $(".wrap .content .show .left .new_list").eq(l-1).css({display:"block"})

        $(".wrap .content .show .left>ul>li").css({backgroundColor:"#cccccc"})
        $(".wrap .content .show .left>ul>li").eq(l-1).css({backgroundColor:"#FF838B"})
    })

    $(".wrap .content .show .left>ul .after").click(function () {
        var l=$(".wrap .content .show .left>ul").find(".now").index()
        $(".wrap .content .show .left .new_list").css({display:"none"})
        $(".wrap .content .show .left .new_list").eq(l+1).css({display:"block"})
        $(".wrap .content .show .left>ul>li").css({backgroundColor:"#cccccc"})
        $(".wrap .content .show .left>ul>li").eq(l+1).css({backgroundColor:"#FF838B"})
    })
    $(".wrap .content .show .left>ul>li:not(.before,.after)").click(function(){
        var m =$(this).index()
        $(".wrap .content .show .left .new_list").css({display:"none"})
        $(".wrap .content .show .left .new_list").eq(m-1).css({display:"block"})
    })
    $(".wrap .content .menu .box>ul>li").hover(
        function () {
            $(this).find(".gai").css({opacity:"0.5"})
        },
        function(){
            $(this).find(".gai").css({opacity:"0"})
        }
    )
})
//头部
$(function () {
    $(".header_all .more-on").hover(
        function () {
            $(".header_all .more").css({display:"block"})
        },
        function () {
            $(".header_all .more").css({display:""})
        }
    )
    $(".log .QQ").hover(
        function () {
            $(".log .QQ .wechit").css({display:"block"})
        },
        function () {
            $(".log .QQ .wechit").css({display:""})
        }
    )
    $(".log .sand_one").hover(
        function () {
            $(".log .sand .sand_to").css({display:"block"})
        },
        function () {
            $(".log .sand .sand_to").css({display:""})
        }
    )
    $(".log .sand_three").hover(
        function () {
            $(".ewm").css({display:"block"})
        },
        function () {
            $(".ewm").css({display:""})
        }
    )
})
