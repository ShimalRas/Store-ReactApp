# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Web version

This project can run as a web application using Vite. The following npm scripts are available for the web version:

- `npm run web:dev` — Start the Vite development server (HMR enabled).
- `npm run web:build` — Build the production-ready web bundle into the `dist/` folder.
- `npm run web:preview` — Preview the production build locally using Vite.
- `npm run start:web` — Start a preview server on port 4173 (alias to `vite preview`).

Quick start:

```bash
# install dependencies
npm install

# run the dev server
npm run web:dev

# build for production
npm run web:build

# preview the production build
npm run web:preview
```
