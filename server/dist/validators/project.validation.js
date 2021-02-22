"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = ProjectValidation;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _utils = require("../utils");

function ProjectValidation(body) {
  return new _promise["default"](function (resolve, reject) {
    var schema = _joi["default"].object({
      id: _joi["default"].number().positive().messages({
        'number.base': 'Ingrese un ID de proyecto válido',
        'number.positive': 'El ID de proyecto no puede ser un número negativo'
      }),
      name: _joi["default"].string().trim().exist().messages({
        'any.required': 'El nombre del proyecto es requerido'
      }),
      description: _joi["default"].string().trim().allow('', null).empty(['', null])["default"]('Sin descripción').max(255).messages({
        'string.max': 'La descripción del proyecto supera el límite de 255 caracteres'
      }),
      archived: _joi["default"].number().positive().valid(0, 1)["default"](0)
    }); // check schema validation


    var _schema$validate = schema.validate(body),
        error = _schema$validate.error,
        value = _schema$validate.value;

    if (error) {
      reject((0, _utils.ValidationErrorMessage)(error));
    }

    resolve(value);
  });
}
//# sourceMappingURL=project.validation.js.map