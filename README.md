# Initial Installation

1. Visit [console.firebase.google.com](https://console.firebase.google.com)
2. Create a project (skip Google Analytics)
3. Register an app (create config)
4. Install Firebase: `npm install firebase`
5. Add config file to your project
6. DANGER: Do not publish or make Firebase config public by pushing to GitHub

## Integration

7. Visit: Go to Docs > Build > Authentication > Web > Get Started
8. Export app from the `firebase.config.js` file: `export default app`
9. In `Login.jsx`, import `getAuth` from `firebase/auth`
10. Create a constant `auth` with `getAuth(app)`

## Provider Setup

11. Import `googleAuthProvider` and create a new provider
12. Use `signInWithPopup` and pass `auth` and `provider`
13. Activate sign-in method (Google, Facebook, GitHub, etc.)
14. [Vite]: Change `127.0.0.1` to `localhost`

## More Auth Provider

1. Activate the auth provider (create app, provide redirect URL, client ID, client secret)




