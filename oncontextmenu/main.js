function $(ele) {
    return document.querySelector(ele);
}
// 获取元素宽度高度
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}
var menu = $(".contextmenu");

$(".menu").addEventListener("click", function (event) {
    // console.log('click');

    alert(event.target.innerHTML); // 弹出菜单内容
    event.stopPropagation();
});
// 绑定在 document 上
document.addEventListener("contextmenu", function (event) {

    // console.log(event.clientX, event.clientY);
    // console.log('right click');
    // console.log(window.innerWidth, window.innerHeight);

    event.preventDefault();
    menu.classList.remove("hidden");
    // 判断如何显示

    var mouseX = event.clientX, // 鼠标X坐标
        mouseY = event.clientY, // 鼠标Y坐标
        // winWidth = window.innerWidth, // 窗口宽度
        // winHeight = window.innerHeight, // 窗口高度
        eleWidth = parseInt(getStyle(menu, "width")), // 菜单宽度
        eleHeight = parseInt(getStyle(menu, "height")); // 菜单高度

    //    右下角
    if ((mouseX > window.innerWidth - eleWidth) &&
        (mouseY > window.innerHeight - eleHeight)) {
        menu.style.left = mouseX - eleWidth + 'px';
        menu.style.top = mouseY - eleHeight + 'px';
    //    右边
    } else if (mouseX > window.innerWidth - eleWidth) {
        menu.style.left = mouseX - eleWidth + 'px';
        menu.style.top = mouseY + 'px';
    //    下边
    } else if (mouseY > window.innerHeight - eleHeight) {
        menu.style.left = mouseX + 'px';
        menu.style.top = mouseY - eleHeight + 'px';
    //    其余情况
    } else {
        menu.style.left = mouseX + 'px';
        menu.style.top = mouseY + 'px';
    }

    // console.log($(".contextmenu").getBoundingClientRect().width, $(".contextmenu").getBoundingClientRect().height);

    event.stopPropagation();
});
// 点击空白区域 隐藏菜单
document.addEventListener("click", function () {
    // console.log('remove');
    menu.classList.add("hidden");
});

// console.log(window.innerWidth, window.innerHeight);
