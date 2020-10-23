module.exports = app => {
    const { router, controller } = app;
    
    router.get('/senddata', controller.dingding.senddata);
};