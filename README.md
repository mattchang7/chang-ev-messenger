## About

This is a simple chat app built using a Convex backend, Next.js frontend, and deployed on Vercel. It allows two users to send messages and shows the last ten messages sent. The application is deployed on Vercel at [this link](https://chang-ev-messenger.vercel.app/alice)

## Run Locally

First, add the following ENV variables to `.env.local`

```
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
```

Then, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
