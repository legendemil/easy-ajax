let EasyAjax = (function() {
	class EasyAjax {
		constructor(baseUrl) {
			this.baseUrl = baseUrl;
		}

		get(query) {
			return makeRequest.call(this, 'GET', query);
		}

		post(query, data) {
			return makeRequest.call(this, 'POST', query, data);
		}

		put(query, data) {
			return makeRequest.call(this, 'PUT', query, data);
		}

		delete(query) {
			return makeRequest.call(this, 'DELETE', query);
		}

		setBaseUrl(baseUrl) {
			this.baseUrl = baseUrl;
		}
	}

	function makeRequest(type, query = '', data = null) {
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest();
			xhr.open(type, this.baseUrl + query, true);
			xhr.addEventListener('load', function(ev) {
				let response = parseResponse(ev.target.response);
				resolve(response);
			});
			xhr.addEventListener('error', function (ev) {
				let error = makeError(ev.target);
				reject(error);
			});
		
			if(type === 'POST' || type === 'PUT') {
				xhr.setRequestHeader("Content-type", "application/json");
				xhr.send(data);	
			}
			else if(type === 'GET' || type === 'DELETE')	
				xhr.send(null);
		});
	}

	function parseResponse(response) {
		let result = undefined;
		try {
			result = JSON.parse(response);
		} catch(e) {
			result = response;
			console.log('Error: ', e, result);
		}
		return result;
	}

	function makeError(data) {
		let error = new Error();
		error.name = 'UrlError';
		error.message = 'Incorrect URL';
		error.data = data;
		return error;
	}

	return EasyAjax;
})();
