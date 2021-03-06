function CommonController(controller, params) {
    if (appRouter.currentController && appRouter.currentController !== controller) {
        appRouter.currentController.onRouteChange && appRouter.currentController.onRouteChange();
    }
    appRouter.currentController = controller;
    controller(params);

}

export const router_object = {
    '/': 'index',
    'index': 'index',
    'home': 'home',
    '*actions': 'index'
}

export const routes = {
    index(params) {
        /*require.ensure([], function(require) {
            CommonController(require('../pages/index/controller'), params)
        }, 'index');*/
        import('@/pages/index/controller').then(controller => {
            CommonController(controller, params)
        })
    },
    home(params) {
        import('@/pages/home/controller').then(controller => {
            CommonController(controller, params)
        })
    },
}
