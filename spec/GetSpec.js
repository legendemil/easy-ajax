describe('Testing EasyAjax - GET method.', function() {
	let baseUrl = 'http://rest.learncode.academy/';
	describe('Spy on GET method', function() {
		let ajax = null;
		beforeEach(function() {
			ajax = new EasyAjax(baseUrl);

			spyOn(ajax, 'get');
			ajax.get();
			ajax.get('api/learncode/friends');
			ajax.get('api/learncode1/friends');
		});

		it('GET method should be called', function() {
			expect(ajax.get).toHaveBeenCalled();
		}); 

		it('GET method should be called 3 times', function() {
			expect(ajax.get).toHaveBeenCalledTimes(3);
		}); 

		it('GET method should be called with none, "api/learncode/friends", and "api/learncode1/friends"', function() {
			expect(ajax.get).toHaveBeenCalledWith();
			expect(ajax.get).toHaveBeenCalledWith('api/learncode/friends');
			expect(ajax.get).toHaveBeenCalledWith('api/learncode1/friends');
		}); 

	});

	describe("GET method", function(){

		beforeEach(function() {
			this.ajax = new EasyAjax(baseUrl);
		});

		it("Called with correct params should return Object", function(done) {
			let result = this.ajax.get('api/learncode/friends');
			result.then(function(response) {
				let isCorrect = typeof response === 'object' ? true : false;
				expect(isCorrect).toBe(true);
				done();
			})
			.catch(function(error) {
				done();
			});
		});

		it("Called with incorrect params should return Error Object", function(done) {
			this.ajax.setBaseUrl('http://rest.incorrect-learncode.academy/')
			let result = this.ajax.get('api/learncode/friends');
			result.then(function(data) {
				done();
			})
			.catch(function(error) {
				let isCorrect = error instanceof Error;
				expect(isCorrect).toBe(true);
				done();
			});
		});

	});

});