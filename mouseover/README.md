## 学习记录

1. 背景模糊效果

使用 filter:blur() 能够实现,但是如果加在父元素上,会导致里面的文字也被模糊掉了
解决方法: 在父元素上使用伪元素,在伪元素上进行背景模糊效果

```
.container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition:filter 0.3s linear;
    transition:filter 0.3s linear;
    /* 不设置背景图片,模糊效果出不来 */
    background: url(./bg.png) no-repeat;
}
.container:hover::before {
    filter: blur(5px);
}
```

2. 文字上浮效果

使用 位移 `transform: translate()` 和 透明度 `opacity` 来控制,从底部向上移动并且透明度从0到1
这里将 h2 和 a 进行变化,为了防止外层 div 发生位置变化,导致线条随之移动
```
.text a, .text h2 {
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
    opacity: 0;
    /*top:15px*/
    transform: translate(0, 20px);
}

.container:hover .text h2,
.container:hover .text a {
    /*top: 0;*/
    transform: translate(0, 0);
    opacity: 1;
}
```

3. 边框扩展效果

使用伪元素,分别在内部两个 `div` 中,添加左右上下线条,且内部 `div` 需要将高度和宽度填满至父元素

```
    /* 横线显示 */
    -webkit-transform: scale3d(0,0.1,1); /* Safari */
    transform: scale3d(0,0.1,1); /* Standard syntax */
    /* 横线显示:hover */
	-webkit-transform: scale3d(1,0.1,1); /* Safari */
    transform: scale3d(1,0.1,1); /* Standard syntax */

    /* 竖线显示 */
    -webkit-transform: scale3d(0.02,0,1); /* Safari */
    transform: scale3d(0.02,0,1); /* Standard syntax */
    /* 竖线显示:hover */
    -webkit-transform: scale3d(0.02,1,1); /* Safari */
    transform: scale3d(0.02,1,1); /* Standard syntax */
```

4. 文字流光效果

大标题文字

以“-webkit-background-clip:text;-webkit-text-fill-color:transparent;”来进行文字镂空（前者裁剪掉文字内容之外的背景，后者将文字填充色设为透明），
以“background-image:-webkit-linear-gradient()”来实现背景颜色渐变，最后使用@keyframes来进行背景平移的无限循环以模仿流动。

一是必须设置平移速度为匀速（linear）；还有就是在结束和开始那一瞬间，背景颜色渐变的样式相同，
对此，可以通过设置颜色渐变为“0% x色”-“25% y色”-“50% x色”-“75% y色”-“100% x色”，在将背景拉长至200%来实现。

小标题链接

需要进行颜色的不断切换,使用 keyframe 和 animation 进行颜色更改

```
@keyframes textBreathe {
    0% {
        color: #3498db
    }

    25% {
        color: #d71345
    }

    50% {
        color: #f7acbc
    }

    75% {
        color: #d71345
    }

    0% {
        color: #3498db
    }
}
```

参考资料:
http://www.jianshu.com/p/c67f73ad2573
https://tympanus.net/codrops/2016/01/06/inspiration-for-line-menu-styles/
http://www.w3cplus.com/content/css3-background-clip