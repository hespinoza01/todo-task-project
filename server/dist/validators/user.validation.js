"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.LoginUserValidation = LoginUserValidation;
exports["default"] = UserValidator;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _utils = require("../utils");

/**
 * Validation for login fields
 * @param {Object} body
 */
function LoginUserValidation(body) {
  return new _promise["default"](function (resolve, reject) {
    var schema = _joi["default"].object({
      email: _joi["default"].string().exist().messages({
        'any.required': 'El correo es requerido'
      }),
      password: _joi["default"].string().exist().messages({
        'any.required': 'La contraseña es requerida'
      })
    });

    var _schema$validate = schema.validate(body),
        error = _schema$validate.error,
        value = _schema$validate.value;

    if (error) {
      reject((0, _utils.ValidationErrorMessage)(error));
    }

    resolve(value);
  });
}
/**
 * User validator data for create/update actions
 * @param {Object} body
 */


function UserValidator(body) {
  return new _promise["default"](function (resolve, reject) {
    // validations for user schema
    var schema = _joi["default"].object({
      id: _joi["default"].number().positive().messages({
        'number.base': 'Ingrese un ID de usuario válido',
        'number.positive': 'El ID de usuario no puede ser un número negativo'
      }),
      email: _joi["default"].string().trim().max(100).email().exist().messages({
        'string.max': 'El correo ingresado supera el límite de 100 caracteres permitidos',
        'string.email': 'Ingrese un correo válido',
        'any.required': 'El correo es requerido'
      }),
      fullname: _joi["default"].string().trim().min(4).max(255).exist().messages({
        'string.min': 'Ingrese un nombre con al menos 4 caracteres',
        'string.max': 'El nombre ingresado supera el límite de 255 caracteres',
        'any.required': 'El nombre del usuario es requerido'
      }),
      password: _joi["default"].string().min(6).exist().messages({
        'string.min': 'La contraseña debe ser igual o mayor de 6 caracteres',
        'any.required': 'La contraseña es requerida'
      })
    }); // check schema validation


    var _schema$validate2 = schema.validate(body),
        error = _schema$validate2.error,
        value = _schema$validate2.value;

    if (error) {
      reject((0, _utils.ValidationErrorMessage)(error));
    }

    resolve(value);
  });
}
//# sourceMappingURL=user.validation.js.map