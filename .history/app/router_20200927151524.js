'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  require('./routers/api')(app);
  require('./routers/page')(app);

  router.get('/', controller.dingding.index);
  // router.get('/senddata', controller.dingding.senddata);
};
 