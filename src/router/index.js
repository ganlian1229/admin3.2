import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// let isRefresh = sessionStorage.isLogin ? true : false; //是否是刷新
// // 判断路由是否需要登录
// router.beforeEach((to, from, next) => {
//   // console.log(to);
//   if (to.name == "login") {
//    //当前页面跳转到登录页
//     next();
//     sessionStorage.clear()
//   } else {
//     if (to.matched.length == 0 && !isRefresh) {
//       next("/login");
//     } else {
//       if (isRefresh) {
//         //页面刷新走这里重新添加动态路由
//         let dRouter = commonFun.dynamicAddRouter(
//           dynamicRoutes,
//           JSON.parse(sessionStorage.getItem("authority"))
//         );
//         router.addRoutes(dRouter);
//         //测试时  直接添加路由
//         // router.addRoutes(dynamicRoutes);
//         isRefresh = false;
//         next({ ...to, replace: true });
//       } else {
//         next();
//       }
//     }
//   }
// });

//重置路由
export function resetRouter() {
    const newRouter = {
        history: createWebHashHistory(),
        routes
    };
    router.matcher = newRouter.matcher;
}

export default router;
