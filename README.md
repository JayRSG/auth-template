This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Installation

First install the dependencies by running: 

```bash
npm i
```

### Setting up NextAuth

To setup NextAuth you have run the command

```bash
npx auth secret
```

This should create a `.env.local` file with a `AUTH_SECRET` env variable.

### Google OAuth integration
This project has already integrated Google Oauth with NextAuth. if you want to consider this you need to add the env variables
`AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET` in the newly created `.env.local` file

Otherwise customize the `auth.ts` file to setup your desired oauth provider.

#### List of OAuth Providers
[NextAuth OAuth providers](https://authjs.dev/getting-started/authentication/oauth)

### Run the dev server

First, run the development server:

```bash
npm run dev
```

### Open in browser
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


##### References
This project uses [shadcn-ui](https://ui.shadcn.com/) which is based on Radix-UI and [Tailwindcss](https://tailwindcss.com/)
