---
layout: null
sitemap:
  exclude: 'yes'
---
function toggleMobileMenu() {
  $('.navigation-wrapper').toggleClass('visible');
  $('.btn-mobile-menu__icon').toggleClass('hidden');
  $('.btn-mobile-close__icon').toggleClass('hidden');
}
// 鼠标点击事件
document.addEventListener('click', (event) => {
  // 创建文字元素
  const text = document.createElement('span');
  text.textContent = '智乃'; // 显示的文字内容
  text.classList.add('chino-text'); // 添加类名以应用样式

  // 设置文字出现的位置
  text.style.left = `${event.pageX}px`;
  text.style.top = `${event.pageY}px`;

  // 将文字元素添加到页面
  document.body.appendChild(text);

  // 设置动画效果：向上移动并淡出
  setTimeout(() => {
    text.style.opacity = '0'; // 渐隐
    text.style.transform = 'translateY(-20px)'; // 向上移动20像素
  }, 0);

  // 在1秒后删除文字元素
  setTimeout(() => text.remove(), 1000);
});

$(document).ready(function () {
  $('a.panel-button').click(function (e) {
    if ($('.content-wrapper').hasClass('showing')){
      $('.content-wrapper').removeClass('animated slideInRight')
      $('.panel-cover').removeClass('panel-cover--collapsed')
      $('.panel-cover').css('max-width', '100%')
      $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
      $('.content-wrapper').removeClass('showing')
      history.pushState("", document.title, window.location.pathname + window.location.search);
      //window.location.hash = '' // leaves #
      e.preventDefault();
      return;
    }
    $('.panel-cover').addClass('panel-cover--collapsed');
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
    $('.content-wrapper').addClass('showing');
  })

  if (window.location.hash && window.location.hash == '#projects') {
    $('a.panel-button').click();
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    if (!$('.navigation-wrapper').hasClass('animated bounceInDown')){
        $('.navigation-wrapper').addClass('animated bounceInDown');
    }
    toggleMobileMenu();
  })

  $('.navigation-wrapper .projects-button').click(function () {
    toggleMobileMenu();
  })
})
