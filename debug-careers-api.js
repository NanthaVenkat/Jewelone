const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch'); // Ensure node-fetch is available or use built-in fetch if node version supports it

async function testCareersApi() {
    const form = new FormData();
    form.append('name', 'Test User');
    form.append('email', 'test@example.com');
    form.append('mobile', '1234567890');
    form.append('position', 'Developer');
    form.append('city', 'Test City');

    // Create a dummy resume file
    const resumePath = path.join(__dirname, 'test-resume.txt');
    fs.writeFileSync(resumePath, 'Dummy resume content');
    form.append('resume', fs.createReadStream(resumePath));

    try {
        const response = await fetch('http://localhost:3000/api/careers', {
            method: 'POST',
            body: form
        });

        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Response:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Fetch error:', error);
    } finally {
        // Cleanup
        if (fs.existsSync(resumePath)) {
            fs.unlinkSync(resumePath);
        }
    }
}

testCareersApi();
