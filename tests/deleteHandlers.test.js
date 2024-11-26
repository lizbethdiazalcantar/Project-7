// eslint-disable-next-line no-undef
const config = require('../config');
//Tests for DELETE requests


//Status code should be 200 when kit is deleted successfully

test('Status code should be 200', async () =>{
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	
	expect(actualStatus).toEqual(200);

});



//Test that kit is deleted successfully, get expected response

test('Test that kit is deleted', async () => {
	let actualResponse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
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



