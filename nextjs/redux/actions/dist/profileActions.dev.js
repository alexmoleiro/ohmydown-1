"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfileWebs = exports.addProfileWeb = exports.loadProfile = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadProfile = function loadProfile(token) {
  return function getServerSideProps(dispatch) {
    var isLoading, response;
    return regeneratorRuntime.async(function getServerSideProps$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isLoading = true;
            dispatch({
              type: _actionTypes["default"].LOAD_PROFILE,
              payload: {
                isLoading: isLoading
              }
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('http://localhost:8080/profile', {
              headers: {
                Token: token
              }
            })["catch"](function (error) {
              if (!error.response) {
                error.response = 'Network Error';
              }

              isLoading = false;
              dispatch({
                type: _actionTypes["default"].LOAD_PROFILE,
                payload: {
                  error: error,
                  isLoading: isLoading
                }
              });
            }));

          case 4:
            response = _context.sent;

            if (response !== undefined) {
              isLoading = false;
              console.log(response);
              dispatch({
                type: _actionTypes["default"].LOAD_PROFILE,
                payload: {
                  response: response,
                  isLoading: isLoading
                }
              });
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.loadProfile = loadProfile;

var addProfileWeb = function addProfileWeb(url, token) {
  return function _callee(dispatch) {
    var isLoading, response;
    return regeneratorRuntime.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            isLoading = true;
            console.log(url);
            dispatch({
              type: _actionTypes["default"].ADD_PROFILE_WEB,
              payload: {
                isLoading: isLoading
              }
            });
            _context2.next = 5;
            return regeneratorRuntime.awrap(_axios["default"].post('http://localhost:8080/profile/addurl', {
              url: url
            }, {
              headers: {
                Token: token
              }
            })["catch"](function (error) {
              if (!error.response) {
                error.response = 'Network Error';
              }

              isLoading = false;
              dispatch({
                type: _actionTypes["default"].ADD_PROFILE_WEB,
                payload: {
                  error: error,
                  isLoading: isLoading
                }
              });
            }));

          case 5:
            response = _context2.sent;

            if (response !== undefined) {
              isLoading = false;
              console.log(response);
              dispatch({
                type: _actionTypes["default"].ADD_PROFILE_WEB,
                payload: {
                  response: response,
                  isLoading: isLoading
                }
              });
            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.addProfileWeb = addProfileWeb;

var deleteProfileWebs = function deleteProfileWebs(ids, token) {
  return function _callee2(dispatch) {
    var isLoading, response;
    return regeneratorRuntime.async(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            isLoading = true;
            dispatch({
              type: _actionTypes["default"].DELETE_PROFILE_WEBS,
              payload: {
                isLoading: isLoading
              }
            });
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"]["delete"]('http://localhost:8080/profile/deleteurls', {
              headers: {
                Token: token
              },
              data: {
                ids: ids
              }
            })["catch"](function (error) {
              if (!error.response) {
                error.response = 'Network Error';
              }

              isLoading = false;
              dispatch({
                type: _actionTypes["default"].DELETE_PROFILE_WEBS,
                payload: {
                  error: error,
                  isLoading: isLoading
                }
              });
            }));

          case 4:
            response = _context3.sent;
            console.log(response);

            if (response !== undefined) {
              isLoading = false;
              dispatch({
                type: _actionTypes["default"].DELETE_PROFILE_WEBS,
                payload: {
                  response: response,
                  isLoading: isLoading
                }
              });
            }

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.deleteProfileWebs = deleteProfileWebs;