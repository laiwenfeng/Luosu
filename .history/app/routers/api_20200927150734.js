module.exports = app => {
    const { router, controller } = app

    router.post('/dingding/senddata', controller.dingding.senddata)
}