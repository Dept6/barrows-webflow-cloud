# Webflow Cloud Next.js App

Basic Next.js 15 + React 19 app scaffold prepared for Webflow Cloud integration.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Integrate with Webflow Cloud

Follow the official guide. Key steps:

1. Install the CLI globally:
   ```bash
   npm install -g @webflow/webflow-cli
   webflow --version
   ```
2. Initialize Webflow Cloud in this project and import design system via DevLink:
   ```bash
   webflow cloud init
   ```
   - Choose framework: Next.js
   - Choose a mount path (e.g. `/app`)
   - Authenticate and select your Webflow site
   - Import styles/components
3. Publish this repo to GitHub (required for Webflow Cloud projects).
4. In your Webflow site settings → Webflow Cloud:
   - Login to GitHub and install the GitHub App
   - Create a Project, point it to your GitHub repository
   - Create an Environment: choose branch and mount path
   - Publish your Webflow site
5. Deploy from CLI or via push to the tracked branch:
   ```bash
   webflow cloud deploy
   ```

Reference: [Getting started with Webflow Cloud](https://developers.webflow.com/webflow-cloud/getting-started)
