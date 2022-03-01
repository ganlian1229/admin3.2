// 长按事件 请不要与点击事件一起使用
let longpress = {
    mounted(el, { value }) {
        let time, callBack;
        if (typeof value === 'function') {
            time = 2000;
            callBack = value;
        } else {
            time = value.time;
            callBack = value.callBack;
        }
        // 定义变量
        let pressTimer = null;
        // 创建计时器（ 2秒后执行函数 ）
        let start = (e) => {
            if (e.type === 'click' && e.button !== 0) {
                return;
            }
            if (pressTimer === null) {
                pressTimer = setTimeout(() => {
                    handler();
                }, time);
            }
        };
        // 取消计时器
        let cancel = (e) => {
            if (pressTimer !== null) {
                clearTimeout(pressTimer);
                pressTimer = null;
            }
        };
        // 运行函数
        const handler = (e) => {
            callBack(e);
        };
        // 添加事件监听器
        el.addEventListener('mousedown', start);
        el.addEventListener('touchstart', start);
        // 取消计时器
        el.addEventListener('click', cancel);
        el.addEventListener('mouseout', cancel);
        el.addEventListener('touchend', cancel);
        el.addEventListener('touchcancel', cancel);
    },
    // 指令与元素解绑的时候，移除事件绑定
    beforeUnmount(el) {
        el.removeEventListener('click', el.handler);
    }
};

export default longpress;
