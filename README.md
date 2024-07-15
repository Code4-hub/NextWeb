# NextWeb - Web Agency Project

This project template provides a minimal setup to get a React application working with TypeScript in Vite, including Hot Module Replacement (HMR) and some ESLint rules tailored for a production environment.

## Features

- **React**: Library for building user interfaces
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript
- **Vite**: Next-generation front-end tooling

## Official Plugins

Currently, two official plugins are available to enhance your development experience:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the ESLint configuration to enable type-aware lint rules. Here’s how you can do it:

1. **Configure `parserOptions` Property:**

   Update the top-level `parserOptions` property in your ESLint configuration file:

   ```js
   export default {
     // other rules...
     parserOptions: {
       ecmaVersion: "latest",
       sourceType: "module",
       project: ["./tsconfig.json", "./tsconfig.node.json"],
       tsconfigRootDir: __dirname,
     },
   };
   ```

2. **Update ESLint Plugins and Extends:**

   Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`. Optionally, add `plugin:@typescript-eslint/stylistic-type-checked` for stylistic rules.

   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the `extends` list to include `plugin:react/recommended` and `plugin:react/jsx-runtime`.

   ```bash
   npm install eslint-plugin-react
   ```

   ```js
   export default {
     extends: [
       "plugin:@typescript-eslint/recommended-type-checked",
       "plugin:react/recommended",
       "plugin:react/jsx-runtime",
       // other extends...
     ],
     // other configurations...
   };
   ```

## Getting Started

To get started with this template:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/nextweb.git
   cd nextweb
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

## Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create an optimized build of your application in the `dist` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
