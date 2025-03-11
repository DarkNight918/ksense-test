# Webhook Challenge - Secret Code Extraction

This is a **Node.js & TypeScript** webhook service that receives encoded payloads from a challenge system, extracts a secret message from a coordinate-based encoding scheme, and logs the extracted message.

## Features
- Accepts **HTTP POST requests** at `/webhook`
- Parses **row-column encoded messages**
- Sorts the message correctly and **extracts the secret code**
- Logs the **decoded message** for submission
- **Deployable on Render.com**

## Setup & Installation

### 1. **Clone the Repository**
```bash
git clone https://github.com/DarkNight918/ksense-test.git
cd ksense-test
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Build the Project**
```bash
npm run build
```

### 4. **Run Locally**
```bash
npm start
```
By default, the server runs on `http://localhost:3000`

---

## Deployment (Render.com)
### **Steps to Deploy on Render**
1. Push your repository to GitHub.
2. Go to [Render.com](https://render.com/) and create a new **Web Service**.
3. Connect your GitHub repository.
4. Set up the build & start commands:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
5. Deploy the service and obtain the **Webhook URL** (`https://your-app.onrender.com/webhook`).

---

## Webhook Endpoint
### **POST `/webhook`**
- The challenge system will send **row-column encoded messages**.
- The server extracts and reconstructs the secret message.
- The extracted message is logged.

#### Example Request:
```
row=15 column=9: c
row=29 column=44: i
row=20 column=34: l
...
```

#### Example Response:
```json
{
  "message": "Webhook received successfully"
}
```

---

## How to Complete the Challenge

### **1. Submit Your Webhook URL**
- Go to the challenge form.
- Enter your **Full Name** and the **Webhook URL** (from Render).
- Click **Send Payload**.

### **2. Capture the Secret Code**
- Check your **Render logs** for the extracted **secret message**.

### **3. Submit the Secret Code**
- Return to the challenge form.
- Enter your **Full Name, Webhook URL, Secret Code, and GitHub Repo URL**.

### **4. Done! 🎉**
Your submission is now complete!

