# ims-frontend

## Project Overview
ims-frontend is the front-end application for the IMS (Information Management System) project. It is built using React, TypeScript, and Vite, and is structured for scalability and maintainability.

## Project Structure
- `public/` - Static assets (e.g., images, icons).
- `src/` - Main source code directory.
  - `assets/` - Images and static resources used in the app.
  - `components/` - Reusable React components.
  - `pages/` - Page-level React components (views/routes).
  - `redux/` - Redux store and slices for state management.
    - `store.ts` - Redux store configuration.
    - `slices/` - Redux slices (e.g., `counterSlice.ts`).
  - `App.tsx` - Main application component.
  - `main.tsx` - Entry point for the React app.
  - `App.css`, `index.css` - Global and app-specific styles.
- `index.html` - Main HTML file.
- `vite.config.ts` - Vite configuration.
- `tsconfig*.json` - TypeScript configuration files.
- `eslint.config.js` - ESLint configuration.

## Function and Variable Naming Rules
- **File Naming:**
  - Use `camelCase` for files containing components (e.g., `myComponent.tsx`).
  - Use `PascalCase` for React component files (e.g., `UserProfile.tsx`).
  - Use `kebab-case` for assets and static files (e.g., `logo-icon.svg`).
- **Function Naming:**
  - Use `camelCase` for all function names (e.g., `handleSubmit`, `fetchData`).
  - React components should use `PascalCase` (e.g., `UserCard`).
- **Variable Naming:**
  - Use `camelCase` for variables and constants (e.g., `userList`, `isLoading`).
  - Use `UPPER_CASE` for constants that never change (e.g., `API_URL`).
- **Redux Slices:**
  - Slice files should be named with `camelCase` (e.g., `counterSlice.ts`).
  - Action creators and reducers should use `camelCase`.
  
   **Note:** All new features must be developed on a separate branch named `feature/[feature-you-worked-on]`. After completing your work, submit a pull request (PR) to the `development` branch for review and merging.

## Contribution Guidelines
- Follow the naming conventions above for all new files, functions, and variables.
- Write clear and concise comments where necessary.
- Keep components small and focused.
- Use TypeScript for type safety.
- Use ESLint and Prettier for code formatting and linting.

## Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Build for production:
   ```sh
   npm run build
   ```

For more details, see the documentation in each folder or file as needed.

