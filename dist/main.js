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
				return makeRequest.call(this, 'GET', query);
			}
		}, {
			key: 'post',
			value: function post(query, data) {
				return makeRequest.call(this, 'POST', query, data);
			}
		}, {
			key: 'put',
			value: function put(query, data) {
				return makeRequest.call(this, 'PUT', query, data);
			}
		}, {
			key: 'delete',
			value: function _delete(query) {
				return makeRequest.call(this, 'DELETE', query);
			}
		}, {
			key: 'setBaseUrl',
			value: function setBaseUrl(baseUrl) {
				this.baseUrl = baseUrl;
			}
		}]);

		return EasyAjax;
	}();

	function makeRequest(type) {
		var _this = this;

		var query = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
		var data = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

		return new Promise(function (resolve, reject) {
			var xhr = _this.xhr;
			xhr.open(type, _this.baseUrl + query, true);
			xhr.addEventListener('load', function (ev) {
				var response = parseResponse(ev.target.response);
				resolve(response);
			});
			xhr.addEventListener('error', function (ev) {
				var error = makeError(ev.target);
				reject(error);
			});

			if (type === 'POST' || type === 'PUT') xhr.send(data);else if (type === 'GET' || type === 'DELETE') xhr.send(null);
		});
	}

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
