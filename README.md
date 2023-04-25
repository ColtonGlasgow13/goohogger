goohogger


Apologies for the oversight. Since Cloud Functions are not available on the free plan and using the gsutil command is not working, we will attempt another approach to set up CORS using a simple Node.js script and the Google Cloud Storage Node.js client library.

First, make sure you have the Google Cloud SDK installed on your machine. Follow the instructions here if you haven't done this already.

In your project folder, create a new folder named cors-setup.

Inside the cors-setup folder, create a new file named package.json with the following content:

{
  "name": "cors-setup",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@google-cloud/storage": "^5.14.8"
  }
}

Run npm install inside the cors-setup folder to install the Google Cloud Storage Node.js client library.

Inside the cors-setup folder, create a new file named set-cors.js with the following content:


const { Storage } = require('@google-cloud/storage');

const storage = new Storage();

async function setCORSConfiguration() {
  try {
    const bucketName = 'REDACTED';
    const bucket = storage.bucket(bucketName);

    const corsConfiguration = [
      {
        origin: ['*'],
        responseHeader: ['Content-Type', 'x-goog-resumable', 'Access-Control-Allow-Origin'],
        method: ['GET', 'HEAD', 'DELETE', 'POST', 'PUT'],
        maxAgeSeconds: 3600,
      },
    ];

    await bucket.setCorsConfiguration(corsConfiguration);

    console.log('CORS configuration set successfully for bucket:', bucketName);
  } catch (error) {
    console.error('Error setting CORS configuration:', error);
  }
}

setCORSConfiguration();


Run the script using the command node set-cors.js. If the CORS configuration is set successfully, you should see the message "CORS configuration set successfully for bucket: REDACTED".

Retry fetching the users from your React app to see if the CORS issue is resolved.

Remember to change the CORS configuration to be more restrictive in a production environment. The current configuration allows all origins.