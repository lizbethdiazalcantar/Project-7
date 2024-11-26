// eslint-disable-next-line no-undef

//Tests for POST request
const config = require('../config');

const requestBody = {
    // put your body here
	"ids":[
		1,
		9,
		11
	]

}

test('Status code should be 200 when checking for quantity of goods in warehouses', async () =>{
	let actualStatus;
    try {
		 const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);

});


test('Quantity of goods in warehouses should match expected result', async () => {
	let actualResponse;
    try {
		 const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
			method: 'POST',
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
		
			"Everything You Need": {
				"Potato Chips - Chili": 4,
				"Multigrain Bread": 5
			},
			"Food City": {
				"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": 3
			},
			"Big World": {
				"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": 1,
				"Multigrain Bread": 10
			},
			"Fresh Food": {
				"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": 3
			}
		
	 });

	
});



//Test to check that 500 status code is returned for a warehouse that doesn't exist
//Variable for non existent warehouse
const nonExistentRequestBody = {
    // put your body here
	"ids":[
		99
	]

}
test('Status code should be 500 when checking quantity of goods in warehouses that do not exist', async () => {
	let statusCode;
    try {
		 const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(nonExistentRequestBody)
		});
		//actualResponse = await response.json();
		statusCode = response.status;
	} catch (error) {
		console.error(error);
	}

	//Check status code
	expect(statusCode).toBe(500);	
});
