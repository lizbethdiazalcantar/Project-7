// eslint-disable-next-line no-undef
const config = require('../config');
//Tests for DELETE requests


//Status code should be 200 when kit is deleted successfully

test('Should return status code 200 when deleting kit', async () =>{
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	
	expect(actualStatus).toEqual(200);

});



//Test that kit is deleted successfully, get expected response

test('Should delete the kit and return a success response', async () => {
	let actualResponse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/19`, {
			method: 'DELETE',
		});
		actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponse).toEqual({
		
			"ok": true
		
	});
});



