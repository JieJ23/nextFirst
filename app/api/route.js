// import { getRequestContext } from '@cloudflare/next-on-pages'
export const runtime = 'edge'

export async function GET(request) {
  try {
    // Fetch data from the external Google Apps Script
    const response = await fetch('https://script.google.com/macros/s/AKfycbzzlL52v_BgUWkxo_paVwl0HDBDdOgwVZGxiC31Qdpb7q1tXvOZaI8X8PVmbjESj_Xh/exec');

    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON data
    const data = await response.json();

    // Return the data as a JSON response
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // Handle errors
    console.error('Fetch error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}