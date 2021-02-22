"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "UserValidation", {
  enumerable: true,
  get: function get() {
    return _user["default"];
  }
});

_Object$defineProperty(exports, "LoginUserValidation", {
  enumerable: true,
  get: function get() {
    return _user.LoginUserValidation;
  }
});

_Object$defineProperty(exports, "ProjectValidation", {
  enumerable: true,
  get: function get() {
    return _project["default"];
  }
});

_Object$defineProperty(exports, "TaskValidation", {
  enumerable: true,
  get: function get() {
    return _task["default"];
  }
});

var _user = _interopRequireWildcard(require("./user.validation"));

var _project = _interopRequireDefault(require("./project.validation"));

var _task = _interopRequireDefault(require("./task.validation"));
//# sourceMappingURL=index.js.map