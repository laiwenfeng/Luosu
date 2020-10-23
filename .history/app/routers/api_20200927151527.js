module.exports = app => {
    const { router, controller } = app

    router.post('/dingding/senddata', controller.dingding.senddata)

    router.get('/monthdata/get', controller.monthdata.find)
}