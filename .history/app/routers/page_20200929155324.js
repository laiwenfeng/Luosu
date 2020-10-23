module.exports = app => {
    const { router, controller } = app;

    router.get('/monthdata', controller.monthdata.index)
};
