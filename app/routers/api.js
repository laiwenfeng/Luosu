module.exports = app => {
    const { router, controller } = app

    //dingding
    router.post('/dingding/senddata', controller.dingding.senddata)
    router.post('/dingding/sendseasondata', controller.dingding.sendseasondata)

    //monthdata
    router.get('/monthdata/find', controller.monthdata.find)
    router.get('/monthdata/update', controller.monthdata.update)
    router.get('/monthdata/remove', controller.monthdata.remove)
    router.get('/monthdata/monthdata', controller.monthdata.monthdata)
    router.post('/monthdata/save', controller.monthdata.save)

    //worktime
    router.get('/worktime/find', controller.worktime.find)
    router.get('/worktime/update', controller.worktime.update)
    router.get('/worktime/remove', controller.worktime.remove)
    router.post('/worktime/save', controller.worktime.save)
}