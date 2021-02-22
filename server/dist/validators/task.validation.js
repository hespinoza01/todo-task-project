"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = TaskValidation;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _utils = require("../utils");

function TaskValidation(body) {
  return new _promise["default"](function (resolve, reject) {
    var schema = _joi["default"].object({
      id: _joi["default"].number().positive().messages({
        'number.base': 'Ingrese un ID de tarea válido',
        'number.positive': 'El ID de tarea no puede ser un número negativo'
      }),
      title: _joi["default"].string().trim().min(4).max(255).exist().messages({
        'string.min': 'El título de la tarea debe contener al menos 4 caracteres',
        'string.max': 'El título de la tarea supera el límite de 255 caracteres',
        'any.required': 'El título de la tarea es requerido'
      }),
      description: _joi["default"].string().trim().allow('', null).empty(['', null])["default"]('Sin descripción').max(255).messages({
        'string.max': 'La descripción de la tarea supera el límite de 255 caracteres'
      }),
      status: _joi["default"].number().allow('', null).empty(['', null])["default"](1).positive().messages({
        'number.base': 'Ingrese estado de tarea válido',
        'number.positive': 'Ingrese estado de tarea válido'
      })
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
//# sourceMappingURL=task.validation.js.map