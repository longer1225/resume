// 确保页面加载完成后再绑定事件
document.addEventListener("DOMContentLoaded", function() {
    // 获取按钮元素
    const button = document.getElementById("changeColorBtn");

    // 初始化状态为false（黑色背景）
    let isPink = false;

    // 添加事件监听器，点击按钮改变背景颜色和按钮文本
    button.addEventListener("click", function() {
        // 获取header元素
        const header = document.querySelector("header");

        if (isPink) {
            // 如果当前是粉色背景，改变为黑色背景
            header.style.backgroundColor = "black";
            // 设置按钮背景颜色为白色，字体颜色为黑色
            button.style.backgroundColor = "";
            button.style.color = "black";
        } else {
            // 如果当前是黑色背景，改变为粉色背景
            header.style.backgroundColor = "rgb(237, 144, 159)"; // 粉色
            // 设置按钮文本为“变为黑色”

            // 设置按钮背景颜色为粉色，字体颜色为白色
            button.style.backgroundColor = "black";
            button.style.color = "white";
        }

        // 切换状态
        isPink = !isPink;
    });
});