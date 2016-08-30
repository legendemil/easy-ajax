'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EasyAjax = function () {
	function EasyAjax(baseUrl) {
		_classCallCheck(this, EasyAjax);

		this.baseUrl = baseUrl;
	}

	_createClass(EasyAjax, [{
		key: 'get',
		value: function get(query) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				var xhr = new XMLHttpRequest();
				xhr.open('GET', _this.baseUrl + query, true);
				xhr.addEventListener('load', function (ev) {
					var response = JSON.parse(ev.target.response);
					resolve(response);
				});
				xhr.addEventListener('error', function (ev) {
					var error = new Error();
					error.name = 'UrlError';
					error.message = 'Incorrect URL';
					error.data = ev.target;
					reject(error);
				});
				xhr.send();
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
//# sourceMappingURL=main.js.map
