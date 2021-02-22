"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = ValidationErrorMessage;

/**
 * Extract error message from JoiError and return cleaned message error
 * @param {Joi.Error} JoiError - Error object provide for Joi schema validation
 * @return {String}
 */
function ValidationErrorMessage(JoiError) {
  if (Object.prototype.toString.call(JoiError) !== '[object Error]' || !JoiError._original) {
    throw String('ValidationErrorMessage: Param value is not a valid JoiError');
  } // get base Joi error message


  var errorMessage = String(JoiError); // regex to remove start Joi error message

  var toReplaceRegex = /^(validationerror: )/gi;
  var finalMessage = errorMessage.replace(toReplaceRegex, '');
  return finalMessage;
}
//# sourceMappingURL=validation-error-message.util.js.map