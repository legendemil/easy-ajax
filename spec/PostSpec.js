describe('Testing EasyAjax - Post method.', function() {
	let baseUrl = 'http://rest.learncode.academy/';
	describe('Spy on POST method', function() {
		let ajax = null;
		beforeEach(function() {
			ajax = new EasyAjax(baseUrl);

			spyOn(ajax, 'post');
			ajax.post();
			ajax.post('api/learncode/friends');
			ajax.post('api/learncode1/friends');
		});

		it('POST method should be called', function() {
			expect(ajax.post).toHaveBeenCalled();
		}); 

		it('POST method should be called 3 times', function() {
			expect(ajax.post).toHaveBeenCalledTimes(3);
		}); 

		it('POST method should be called with none, "api/learncode/friends", and "api/learncode1/friends"', function() {
			expect(ajax.post).toHaveBeenCalledWith();
			expect(ajax.post).toHaveBeenCalledWith('api/learncode/friends');
			expect(ajax.post).toHaveBeenCalledWith('api/learncode1/friends');
		}); 

	});

	describe("POST method", function(){

		beforeEach(function() {
			this.ajax = new EasyAjax(baseUrl);
		});

		it("Called with correct params should return Object", function(done) {
			let result = this.ajax.post('api/legendemil/friends', {name: 'Leo Messi', age: 27});
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
			let result = this.ajax.post('api/legendemil/friends');
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