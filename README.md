# youthkitbag-ui-v2-react

I am running three consecutive projects to rebuild my youthkitbag front end from scratch again latest tech techstacks, React, NextJS and Nuxt (Vue based). I want to compare the patterns recommended for building with these tools, and compare how they perform, and how easy it is to build, test and deploy. I want to deploy to free services, and connect to the existing API. I also want the general look and feel to remain consistent with the original, but I want style to be simplified. I have opted to go with tailwindcss (as this seems to be the recommended approach that they all use), and daisyui (for free tailwindcss based components that can be used by all three projects). I don't want to get bogged down with style, but I want a nice clean fresh feel that doesn't get in the way of the structure. I will be building the three projects in parallel, feature by feature, step by step. I've also chosen npm as a consistent approach.

Url is https://youthkitbag-ui-v2-react.vercel.app/

This is a [React](https://react.dev/) project bootstrapped with [`npm create vite@latest`](https://react.dev/learn/build-a-react-app-from-scratch).

## Recommended Way to Start latest React

```bash
npm create vite@latest . -- --template react-ts
```

This will guide you through prompts such as:

- Existing files exists....GO, GO, GO! There's nothing else

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

## Vite + React (Plain React App)

Vite doesn't have built-in routing — use react-router-dom to manage it manually. Create a routes/ folder to keep route definitions organised.

```bash
/src/
├── App.tsx                # Main router with route config
├── main.tsx               # Entry point
│
├── routes/
│   ├── Landing.tsx        # "/" - marketing page
│   ├── Signin.tsx         # "/signin"
│   ├── Signup.tsx         # "/signup"
│   ├── Help.tsx           # "/help"
│   ├── Prices.tsx         # "/prices"
│
│   /dashboard/
│     ├── DashboardHome.tsx   # "/dashboard"
│     ├── Profile.tsx         # "/dashboard/profile"
│     └── Settings.tsx        # etc.
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── AuthForm.tsx
│
├── hooks/
│   └── useAuth.ts           # Authentication status
├── contexts/
│   └── AuthContext.tsx      # Auth provider
├── utils/
│   └── auth.ts              # Token handling, etc.
```

> Use PrivateRoute wrappers for protected routes inside App.tsx.

## Set up default port

Update vite.config.ts

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003,
  },
});
```

## Implement DaisyUI (with TailwindCSS)

I wanted to keep the actual html structure very consistent across the projects, so to facilitate component development I chose DaisyUI which seems to be the only free component library based on tailwindcss that can be used across the board.

## Hook up GitHub repository to Vercel

To keep costs to zero (or at least a minimum), I have deployed this website to Vercel. I have opted at this stage to make it easy and link the GitHub repository direct in Vercel, so that any changes pushed will automatically deploy.

https://youthkitbag-ui-v2-react.vercel.app/
