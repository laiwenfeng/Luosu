module.exports = app => {
    const { router, controller } = app;

    router.get('/monthdata', controller.monthdata.index)
    router.get('/worktime', controller.worktime.index)
};
