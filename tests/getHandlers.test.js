// eslint-disable-next-line no-undef

//Tests for GET requests
//Test to check response code
//Then parse response code & check that it contains expected data
const config = require('../config');


//Check status code when checking for couriers
test('Should return status code 200 when checking for couriers', async () => {

	let actualStatus;
	try {
		//Make request
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatus=response.status;
	} catch (error) {
		console.error(error);
	}
	//Check status code
	expect(actualStatus).toBe(200);
});


//Test that we get expected data when checking for couriers
test('Should return expected response data when checking for couriers', async () => {
	let actualResponse;
	try {
		//Make request
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualResponse= await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponse).toEqual(

		[
			{
				"name": "Order and Go",
				"workingHours": {
					"start": 8,
					"end": 22
				}
			},
			{
				"name": "Speedy",
				"workingHours": {
					"start": 8,
					"end": 22
				}
			},
			{
				"name": "Fast Delivery",
				"workingHours": {
					"start": 7,
					"end": 21
				}
			},
			{
				"name": "Food Service",
				"workingHours": {
					"start": 6,
					"end": 20
				}
			}
		]

	);

});




//Number of deliveries should be greater than 0
test('Should return number of deliveries greater than 0', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);	
	} catch(error){
		console.error(error);
	}

	//Convert response to JavaScript
	const data = await response.json();
	const countDeliveries = data.length;
	expect(countDeliveries).toBeGreaterThan(0);

});
