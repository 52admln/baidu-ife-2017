document.querySelector(".js-button-tel").addEventListener("click", () => {
    console.log(document.querySelector("#telephone").value);
    let curVal = document.querySelector("#telephone").value;
    let curNotice = document.querySelector(".js-notice-tel");

    // 第一位为 1
    // 第二位有 3 4 5 7 8 （17X 为最新的号码段）
    // [34578] 或 (3|4|5|7|8)
    // 第三位是 0-9 的数字
    // 后 8 位都是数字匹配

    if(/^1(3|4|5|7|8)[0-9]\d{8}$/.test(curVal)) {
        curNotice.innerHTML = "验证通过";
        curNotice.classList.remove("hidden");
    } else {
        curNotice.innerHTML = "验证失败";
        curNotice.classList.remove("hidden");
    }
});

document.querySelector(".js-button-letter").addEventListener("click", () => {
    console.log(document.querySelector("#letter").value);

    let curVal = document.querySelector("#letter").value;
    let curNotice = document.querySelector(".js-notice-letter");

    // \b 代表 单词的开头或结尾，也就是单词的分界处
    // \w 代表 一行的第一个单词(或整个字符串的第一个单词，具体匹配哪个意思得看选项设置)
    // \s+ 代表 1个或几个空白符 注意 大小写是不同的含义 大写代表 匹配不包含空白符的字符串
    // \s+\1 代表 分组1中捕获的内容（也就是前面匹配的那个单词）(\1)


    if(/(\b\w+\b)\s+\1/.test(curVal)) {
        curNotice.innerHTML = "验证通过";
        curNotice.classList.remove("hidden");
    } else {
        curNotice.innerHTML = "验证失败";
        curNotice.classList.remove("hidden");
    }
});