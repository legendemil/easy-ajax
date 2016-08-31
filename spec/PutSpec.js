describe('Testing EasyAjax - PUT method.', function() {
	let baseUrl = 'http://rest.learncode.academy/';
	describe('Spy on PUT method', function() {
		let ajax = null;
		beforeEach(function() {
			ajax = new EasyAjax(baseUrl);

			spyOn(ajax, 'put');
			ajax.put();
			ajax.put('api/learncode/friends');
			ajax.put('api/learncode1/friends');
		});

		it('PUT method should be called', function() {
			expect(ajax.put).toHaveBeenCalled();
		}); 

		it('PUT method should be called 3 times', function() {
			expect(ajax.put).toHaveBeenCalledTimes(3);
		}); 

		it('PUT method should be called with none, "api/learncode/friends", and "api/learncode1/friends"', function() {
			expect(ajax.put).toHaveBeenCalledWith();
			expect(ajax.put).toHaveBeenCalledWith('api/learncode/friends');
			expect(ajax.put).toHaveBeenCalledWith('api/learncode1/friends');
		}); 

	});

	describe("PUT method", function(){

		beforeEach(function() {
			this.ajax = new EasyAjax(baseUrl);
		});

		it("Called with correct params should return strng 'OK'", function(done) {
			let result = this.ajax.put('api/learncode/friends/57c2984c439e780100887726', {name: 'Billy Bob', age: 28});
			result.then(function(response) {
				expect(response).toBe('OK');
				done();
			})
			.catch(function(error) {
				done();
			});
		});

		it("Called with incorrect params should return Error Object", function(done) {
			this.ajax.setBaseUrl('http://rest.incorrect-learncode.academy/')
			let result = this.ajax.put('api/learncode/friends/57c2984c439e780100887726', {name: 'Billy Bob', age: 28});
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