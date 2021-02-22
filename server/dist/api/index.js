"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _express = require("express");

var _routes = require("./routes");

var api = (0, _express.Router)();
api.use('/user', _routes.UserRoutes);
api.use('/project', _routes.ProjectRoutes);
var _default = api;
exports["default"] = _default;
//# sourceMappingURL=index.js.map