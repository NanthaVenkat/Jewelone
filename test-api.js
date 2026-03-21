
async function testApi() {
    try {
        const response = await fetch('http://localhost:3000/api/metal');
        console.log('Status:', response.status);
        const data = await response.json();
        console.log('Data:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
}

testApi();
