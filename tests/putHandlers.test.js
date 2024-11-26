// eslint-disable-next-line no-undef
const config = require('../config');
//Tests for PUT requests
const requestBody = 
	{
		
			"price": 175
		
	
}

//Status code should be 200 when price of grocery item is changed successfully
test('Status code should be 200', async () => {

	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatus).toEqual(200);

});


//Check we get expected response when changing price of grocery item
test('Test that price of grocery item is successfully changed', async () => {
	let actualResponse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponse).toEqual({
			"ok": true
	});
});

//Changing non-existent item, should return 404 response
test('Changing price of an item that does not exist, should return 404 message', async () => {
	let actualResponse;
	try{
		const response = await fetch(`${config.API_URL}/api/v1/products/99`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponse).toEqual({
		
			"code": 404,
			"message": "Not Found"
			});
});