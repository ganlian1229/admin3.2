let test = {
    // 指令绑定元素挂载前
    beforeMount(el, binding) {
        console.log('beforeMount：el', el);
        console.log('beforeMount：binding', binding);
        console.log('parentNode', el.parentNode);
    },
    // 指令绑定元素挂载后
    mounted(el, binding) {
        console.log('mounted：el', el);
        console.log('mounted：binding', binding);
        console.log('parentNode', el.parentNode);
    },
    // 指令绑定元素因为数据修改触发修改前
    beforeUpdate(el, binding) {
        console.log('beforeUpdate：el', el);
        console.log('beforeUpdate：binding', binding);
        console.log('parentNode', el.parentNode);
    },
    // 指令绑定元素因为数据修改触发修改后
    updated(el, binding) {
        console.log('updated：el', el);
        console.log('updated：binding', binding);
        console.log('parentNode', el.parentNode);
    },
    // 指令绑定元素销毁前
    beforeUnmount(el, binding) {
        console.log('beforeUnmount：el', el);
        console.log('beforeUnmount：binding', binding);
        console.log('parentNode', el.parentNode);
    },
    // 指令绑定元素销毁后
    unmounted(el, binding) {
        console.log('unmounted：el', el);
        console.log('unmounted：binding', binding);
        console.log('parentNode', el.parentNode);
    }
};
export default test;
