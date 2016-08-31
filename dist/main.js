'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EasyAjax = function () {
	var EasyAjax = function () {
		function EasyAjax(baseUrl) {
			_classCallCheck(this, EasyAjax);

			this.baseUrl = baseUrl;
			this.xhr = new XMLHttpRequest();
		}

		_createClass(EasyAjax, [{
			key: 'get',
			value: function get(query) {
				var _this = this;

				return new Promise(function (resolve, reject) {
					var xhr = _this.xhr;
					xhr.open('GET', _this.baseUrl + query, true);
					xhr.addEventListener('load', function (ev) {
						var response = parseResponse(ev.target.response);
						resolve(response);
					});
					xhr.addEventListener('error', function (ev) {
						var error = makeError(ev.target);
						reject(error);
					});
					xhr.send();
				});
			}
		}, {
			key: 'post',
			value: function post(query, data) {
				var _this2 = this;

				return new Promise(function (resolve, reject) {
					var xhr = _this2.xhr;
					xhr.open('POST', _this2.baseUrl + query, true);
					xhr.addEventListener('load', function (ev) {
						var response = parseResponse(ev.target.response);
						resolve(response);
					});
					xhr.addEventListener('error', function (ev) {
						var error = makeError(ev.target);
						reject(error);
					});
					xhr.send(data);
				});
			}
		}, {
			key: 'put',
			value: function put(query, data) {
				var _this3 = this;

				return new Promise(function (resolve, reject) {
					var xhr = _this3.xhr;
					xhr.open('PUT', _this3.baseUrl + query, true);
					xhr.addEventListener('load', function (ev) {
						var response = parseResponse(ev.target.response);
						resolve(response);
					});
					xhr.addEventListener('error', function (ev) {
						var error = makeError(ev.target);
						reject(error);
					});
					xhr.send(data);
				});
			}
		}, {
			key: 'setBaseUrl',
			value: function setBaseUrl(baseUrl) {
				this.baseUrl = baseUrl;
			}
		}]);

		return EasyAjax;
	}();

	function parseResponse(response) {
		var result = undefined;
		try {
			result = JSON.parse(response);
		} catch (e) {
			result = response;
			console.log('Error: ', e, result);
		}
		return result;
	}

	function makeError(data) {
		var error = new Error();
		error.name = 'UrlError';
		error.message = 'Incorrect URL';
		error.data = data;
		return error;
	}

	return EasyAjax;
}();
//# sourceMappingURL=main.js.map
