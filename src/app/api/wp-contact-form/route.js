import { NextRequest, NextResponse } from 'next/server';


export async function GET (request){
  const message = "WP Contact Form API"
  const json = {
    message
  };
  
  return NextResponse.json(json);
}

export async function POST(request) {
  try {
    const { email, name, mobile, message } = await request.json();

    const formData = new FormData();
    formData.append('your-name', name);
    formData.append('your-email', email);
    formData.append('your-mobile', mobile);
    formData.append('your-message', message);
    formData.append('_wpcf7_unit_tag', 'wpcf7-f11-p12-o1');

    // POST request
    const response = await fetch('https://emerald-jewel-career.brightbridge.co/wp-json/contact-form-7/v1/contact-forms/11/feedback', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Form submitted successfully');
      return NextResponse.json({ message: 'Email sent' });
    } else {
      console.error('Form submission failed');
      throw new Error('Form submission failed'); // Throw an error for failed response
    }
  } catch (error) {
    console.error('Error occurred while submitting form:', error);
    return NextResponse.json({ error: error.message }, { status: 500 }); // Return error message with status code 500
  }
}
