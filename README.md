# OpenAI Realtime Agent – Setup Instructions

**Requirements:**
- Node.js v22.14.0
- ngrok installed
- Twilio account with an active phone number
- OpenAI API key

---

## 1. Clone the repository
```bash
git clone https://github.com/Nagarajanactivepieces/OpenAI_realtime_Agent
cd OpenAI_realtime_Agent
```

## 2. Install dependencies
```bash
npm install
```

## 3. Install and configure ngrok
```bash
ngrok config add-authtoken YOUR_AUTHTOKEN_HERE
ngrok http 5000
```
Copy the generated ngrok URL.

## 4. Setup environment variables
```bash
cp .env.example .env
```
Edit `.env` and add:
- OpenAI API key
- Twilio Account SID and Auth Token
- Twilio Phone Number
- Patient API URL
- NGROK_URL (from ngrok output)

## 5. Configure Twilio
1. Log in to Twilio.
2. Open your active phone number.
3. In **Voice Configuration**, set the **Callback URL** to:
```
https://your-ngrok-subdomain.ngrok-free.app/incoming-call
```
4. Save the settings.

## 6. Run the project
```bash
npm run dev
```
