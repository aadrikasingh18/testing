import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';
import DeviceDetector from 'device-detector-js';

export default async function HomePage() 
{
  const headersList = await headers(); 
  const userAgent = headersList.get('user-agent') || '';
  const parser = new UAParser(); // Create a new instance of UAParser
  parser.setUA(userAgent); // Set the user agent string to parse

const deviceDetector = new DeviceDetector();

  const devicesys = deviceDetector.parse(userAgent);
  const result = parser.getResult(); 
  
  console.log("Device >>> ", devicesys);
  console.log("Result >>> ", result);

  console.log(`OS Name: ${result.os.name}`)
  console.log(`OS Version: ${result.os.version}`);
  console.log(`Browser Name: ${result.browser.name}`);
  console.log(`Browser Version: ${result.browser.version}`);
  console.log(`Device Type: ${devicesys.device?.type}`);
  console.log(`Device Brand: ${devicesys.device?.brand}`);
  console.log(`Device Model: ${devicesys.device?.model}`);

  return (
    <main>
      <h1>Welcome to the Device Detection Demo</h1>
    </main>
  );
}