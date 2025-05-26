// src/app/page.tsx
import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

export default async function HomePage() {
  const headersList = await headers(); // ✅ await here
  const userAgent = headersList.get('user-agent') || '';

  console.log("User agent >>> ", userAgent);

  const parser = new UAParser(); // Create a new instance of UAParser
  parser.setUA(userAgent); // Set the user agent string to parse


  const result = parser.getResult(); 

  console.log(result);

  console.log('[VISITOR]');
  console.log(`OS: ${result.os.name} ${result.os.version}`);
  console.log(`Browser: ${result.browser.name} ${result.browser.version}`);
  console.log(`Device: ${result.device.vendor ?? 'Unknown'} ${result.device.model ?? 'Unknown'}`);

  return (
    <main>
      <h1>Welcome to the Device Detection Demo</h1>
      <p>Your device has been logged on the server 👀</p>
    </main>
  );
}