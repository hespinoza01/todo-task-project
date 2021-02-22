"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _express = require("express");

var _user = require("../controllers/user.controller");

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); // define user availables routes

router.route('/').post(_user.createUserController).get([_middlewares.AuthMiddleware, _user.getUserController]).put([_middlewares.AuthMiddleware, _user.updateUserController]);
router.post('/acceso', _user.loginUserController);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=user.route.js.map