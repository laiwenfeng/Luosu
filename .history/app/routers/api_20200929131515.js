module.exports = app => {
    const { router, controller } = app

    //dingding
    router.post('/dingding/senddata', controller.dingding.senddata)
    
    //monthdata
    router.get('/monthdata/find', controller.monthdata.find)
    router.get('/monthdata/update', controller.monthdata.update)
    router.get('/monthdata/remove', controller.monthdata.remove)
    router.post('/monthdata/save', controller.monthdata.save)
}