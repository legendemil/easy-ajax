class EasyAjax {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	get(query) {
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', this.baseUrl + query, true);
			xhr.addEventListener('load', function(ev) {
				resolve(ev.target);
			});
			xhr.addEventListener('error', function (ev) {
				let error = new Error();
				error.name = 'UrlError';
				error.message = 'Incorrect URL';
				error.data = ev.target;
				reject(error);
			});
			xhr.send();		
		});
	}

	setBaseUrl(baseUrl) {
		this.baseUrl = baseUrl;
	}
}