"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)({
  mergeParams: true
}); // define availables routes

router.route('/').get(_task.getTaskFromProjectController).post(_task.createTaskController);
router.put('/:taskId', _task.updateTaskController);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=task.route.js.map