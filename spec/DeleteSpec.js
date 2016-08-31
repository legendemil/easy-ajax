describe('Testing EasyAjax - DELETE method.', function() {
	let baseUrl = 'http://rest.learncode.academy/';
	describe('Spy on DELETE method', function() {
		let ajax = null;
		beforeEach(function() {
			ajax = new EasyAjax(baseUrl);

			spyOn(ajax, 'delete');
			ajax.delete();
			ajax.delete('api/learncode/friends');
			ajax.delete('api/learncode1/friends');
		});

		it('DELETE method should be called', function() {
			expect(ajax.delete).toHaveBeenCalled();
		}); 

		it('DELETE method should be called 3 times', function() {
			expect(ajax.delete).toHaveBeenCalledTimes(3);
		}); 

		it('DELETE method should be called with none, "api/learncode/friends", and "api/learncode1/friends"', function() {
			expect(ajax.delete).toHaveBeenCalledWith();
			expect(ajax.delete).toHaveBeenCalledWith('api/learncode/friends');
			expect(ajax.delete).toHaveBeenCalledWith('api/learncode1/friends');
		}); 

	});

	describe("DELETE method", function(){

		beforeEach(function() {
			this.ajax = new EasyAjax(baseUrl);
		});

		it("Called with correct params should return strng 'OK'", function(done) {
			let result = this.ajax.delete('api/johnbob/friends/57c2984c439e780100887726');
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
			let result = this.ajax.delete('api/johnbob/friends/57c2984c439e780100887726');
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