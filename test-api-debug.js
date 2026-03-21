
async function testApi() {
    try {
        console.log("Fetching API...");
        const response = await fetch('http://localhost:3000/api/metal');
        console.log('Status:', response.status);

        const text = await response.text();
        console.log('Raw Response:', text);

        try {
            const data = JSON.parse(text);
            console.log('Data:', JSON.stringify(data, null, 2));
        } catch (e) {
            console.log("Response is not JSON.");
        }
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

testApi();
