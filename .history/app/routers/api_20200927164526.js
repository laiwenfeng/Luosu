module.exports = app => {
    const { router, controller } = app

    router.post('/dingding/senddata', controller.dingding.senddata)

    router.get('/monthdata/find', controller.monthdata.find)
    router.get('/monthdata/update', controller.monthdata.update)
    router.get('/monthdata/save', controller.monthdata.save)
}