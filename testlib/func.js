$(function () {

    $('.collapse_wind_header .cls_icon').click(function () {
        $('.collapse_wind_folded').slideUp('normal',function(){
          $('.reset-navbar').removeClass('reset-dp')
        $('.mask').hide()
        })
      })
      $('button.reset-navbar-toggle').click(function(){
        $('.mask').show()
        $('.collapse_wind_folded').slideDown()
        $('.reset-navbar').addClass('reset-dp')
      })
      //手机端顶部导航
      $('.collapse_wind_folded>ul>li>p').on('click', function () {
        if ($(window)[0].innerWidth <= 768) {
          // console.log($(this))
          $(this).find('.iconfont').toggleClass('open_icon').toggleClass('open_icon_rot')
          $(this).siblings('.secnav').slideToggle()
          $(this).parent().siblings().find('p>.iconfont').removeClass('open_icon_rot').addClass('open_icon')
          $(this).parent().siblings().find('.secnav').slideUp()
        }
      })
})