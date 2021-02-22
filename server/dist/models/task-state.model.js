"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

var _Reflect$construct = require("@babel/runtime-corejs2/core-js/reflect/construct");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

var _config = require("../config");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TaskStateModel = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(TaskStateModel, _Model);

  var _super = _createSuper(TaskStateModel);

  function TaskStateModel() {
    (0, _classCallCheck2["default"])(this, TaskStateModel);
    return _super.apply(this, arguments);
  }

  return TaskStateModel;
}(_sequelize.Model);

TaskStateModel.init({
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: _sequelize.DataTypes.STRING(100),
    allowNull: false
  }
}, {
  sequelize: _config.db,
  modelName: 'TaskState'
});
var _default = TaskStateModel;
exports["default"] = _default;
//# sourceMappingURL=task-state.model.js.map