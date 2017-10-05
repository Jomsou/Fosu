/**
 * 
 * @Jomsou
 * @date    2017-10-03 21:24:25
 * @version 1.0
 */

/* 知识点：        */
/*       this用法 */
/*       DOM事件 */
/*       定时器 */
    window.onload = function () {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var prev = document.getElementById('last');
    var next = document.getElementById('next');
    var index = 1;
    var timer;
    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        //无限滚动判断
        if (newLeft > -1020) {
            list.style.left = -5100 + 'px';
        }
        if (newLeft < -5100) {
            list.style.left = -1020 + 'px';
        }
    }
    function play() {
        //重复执行的定时器
        timer = setInterval(function () {
            next.onclick();
        }, 1500)
    }
    function stop() {
        clearInterval(timer);
    }
    last.onclick = function () {
        index -= 1;
        if (index < 1) {
            index = 5
        }
        animate(1020);
    };
    next.onclick = function () {
        //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        index += 1;
        if (index > 5) {
            index = 1
        }
        animate(-1020);
    };
    container.onmouseover = stop;
    container.onmouseout = play;
    play();
}
