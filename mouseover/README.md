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




参考资料: http://www.jianshu.com/p/c67f73ad2573