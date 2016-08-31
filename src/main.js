let EasyAjax = (function() {
	class EasyAjax {
		constructor(baseUrl) {
			this.baseUrl = baseUrl;
			this.xhr = new XMLHttpRequest();
		}

		get(query) {
			return new Promise((resolve, reject) => {
				let xhr = new XMLHttpRequest();
				xhr.open('GET', this.baseUrl + query, true);
				xhr.addEventListener('load', function(ev) {
					let response = parseResponse(ev.target.response);
					resolve(response);
				});
					xhr.addEventListener('error', function (ev) {
						let error = makeError(ev.target);
						reject(error);
					});
					xhr.send();		
				});
			}

		post(query, data) {
			return new Promise((resolve, reject) => {
				let xhr = this.xhr;
				xhr.open('POST', this.baseUrl + query, true);
				xhr.addEventListener('load', function(ev) {
					let response = parseResponse(ev.target.response);
					resolve(response);
				});
				xhr.addEventListener('error', function (ev) {
					let error = makeError(ev.target);
					reject(error);
				});
				xhr.send(data);		
			});
		}

		setBaseUrl(baseUrl) {
			this.baseUrl = baseUrl;
		}
	}

	parseResponse(response) {
		return JSON.parse(response);
	}

	makeError(data) {
		let error = new Error();
		error.name = 'UrlError';
		error.message = 'Incorrect URL';
		error.data = data;
		return error;
	}

	return EasyAjax;
})();
