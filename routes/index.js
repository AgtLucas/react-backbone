'use strict';

var render = require('../lib/render');

export.index = function *() {
  this.body = yield render('index', {});
};