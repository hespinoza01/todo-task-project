"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

var _Reflect$construct = require("@babel/runtime-corejs2/core-js/reflect/construct");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

var _config = require("../config");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var UserModel = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(UserModel, _Model);

  var _super = _createSuper(UserModel);

  function UserModel() {
    (0, _classCallCheck2["default"])(this, UserModel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(UserModel, null, [{
    key: "findByEmail",
    value:
    /**
     * Search user register by email
     * @param {String} email - email user to search
     * @return {Object|null}
     */
    function () {
      var _findByEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email) {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return UserModel.findOne({
                  where: {
                    email: email
                  }
                });

              case 2:
                result = _context.sent;

                if (!result) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", result.dataValues);

              case 5:
                return _context.abrupt("return", result);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findByEmail(_x) {
        return _findByEmail.apply(this, arguments);
      }

      return findByEmail;
    }()
  }]);
  return UserModel;
}(_sequelize.Model);

UserModel.init({
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullname: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: _sequelize.DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  password: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: _sequelize.DataTypes.DATE,
    defaultValue: _sequelize.DataTypes.NOW
  },
  updatedAt: {
    type: _sequelize.DataTypes.DATE,
    defaultValue: _sequelize.DataTypes.NOW
  }
}, {
  sequelize: _config.db,
  modelName: 'User'
});
var _default = UserModel;
exports["default"] = _default;
//# sourceMappingURL=user.model.js.map