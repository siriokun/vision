# Google Cloud Vision Camera Sample

A sample project to capture an image from the camera and perform label detection using Google Cloud Vision API.

## Prerequisites

- Node.js installed
- Google Cloud account with Vision API enabled
- Obtaining `keyfile.json` for Google Cloud Vision API

## Obtaining `keyfile.json` for Google Cloud Vision API

The `keyfile.json` file contains credentials that authorize your application to access the Google Cloud Vision API.  **Never** expose this file publicly or commit it to version control.  Follow these steps to obtain it:

1. **Google Cloud Project:**
- If you don't have one already, create a Google Cloud Project: [Go to Google Cloud Console](https://console.cloud.google.com/)

2. **Enable the Vision API:**
- In your Google Cloud Console, navigate to the "APIs & Services" dashboard.
- Search for "Cloud Vision API" and click on it.
- Click the "Enable" button.

3. **Create a Service Account:**
- In the Cloud Console, go to "IAM & Admin" -> "Service Accounts".
- Click "Create Service Account".
- Give your service account a name (e.g., "image-metadata-viewer").
- Click "Create and Continue".
- Grant the service account the "Cloud Vision API User" role.  You can search for this role by name.
- Click "Continue" and then "Done".

4. **Generate a Key:**
- In the Service Accounts list, find the service account you just created.
- Click the three dots in the "Actions" column and select "Manage keys".
- Click "Add Key" -> "Create new key".
- Choose the "JSON" key type.
- Click "Create".  This will download the `keyfile.json` file to your computer.

**Important Security Considerations:**

* **Secure Storage:** Store the `keyfile.json` file securely.  Do not commit it to version control (e.g., Git).
* **Server-Side Proxy (Recommended):** For production applications, it's strongly recommended to use a server-side proxy to interact with the Google Cloud Vision API.  This protects your API key from being exposed in client-side code.  Your server-side code can then read the `keyfile.json` file and make the API calls securely.
* **Principle of Least Privilege:** Grant your service account only the necessary permissions (in this case, "Cloud Vision API User").  Avoid granting excessive permissions.

By following these steps, you can obtain the `keyfile.json` file and securely configure your application to use the Google Cloud Vision API.  Remember to prioritize security and protect your API credentials.

## Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/siriokun/vision.git
   cd vision
   ```

2. **Install dependencies**:

```sh
npm install
```


3. **Set up authentication**:

- Set the environment variable GOOGLE_APPLICATION_CREDENTIALS to the path of your JSON key file:
```sh
export GOOGLE_APPLICATION_CREDENTIALS="path/to/your/keyfile.json"
```

4. **Enable Billing**:

This API method requires billing to be enabled.
Please enable billing on the project by visiting [https://console.developers.google.com/billing/enable](https://console.developers.google.com/billing/enable) then retry.
If you enabled billing for this project recently, wait a few minutes for the action to propagate to our systems and retry.

## Running the Project

1. Start the server:

```sh
npm start
```

2. Open the UI:

- Open your web browser and go to http://localhost:3000.
- You should see the camera feed and a button to capture an image.
- Click the "Capture Image" button to capture an image and perform label detection. The detected labels will be displayed on the page.

## License
MIT