"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

// loading vars from .env
_dotenv["default"].config();

var _default = {
  PORT: process.env.PORT || 8080,
  PASSWORD_SECRET: process.env.PASSWORD_SECRET || 'secret',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  DB: {
    NAME: process.env.DB_NAME,
    HOST: process.env.DB_HOST || 'localhost',
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DIALECT: process.env.DB_DIALECT || 'mysql',
    INSTANCE_CONNECTION_NAME: process.env.INSTANCE_CONNECTION_NAME || null
  }
};
exports["default"] = _default;
//# sourceMappingURL=vars.config.js.map