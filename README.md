# Edgar Mokua — Portfolio

Personal portfolio for Edgar Mokua, Software Engineer II at Microsoft.
The site highlights distributed systems, cloud infrastructure, reliability
engineering, measurable production impact, professional experience, and
selected personal projects.

Built with React, Vite, Material UI, and Bootstrap.

## Set up

1. Install the dependencies

   ```sh
   npm install
   ```

2. Start the development server

   ```sh
   npm run dev
   ```

## Build for production

1. Generate a full static production build

   ```sh
   npm run build
   ```

3. Preview the production build

   ```sh
   npm run preview
   ```

## Deploy with Cloudflare Pages

Connect this repository to Cloudflare Pages and use:

- Production branch: `main`
- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

Every push to `main` triggers a production deployment. Other branches receive
preview deployments.

After purchasing `edgarmokua.com`, add it from the Cloudflare Pages project's
**Custom domains** settings. If the domain is registered with Namecheap, update
its nameservers to the two Cloudflare nameservers assigned when the domain is
added to Cloudflare.
