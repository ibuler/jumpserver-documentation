import '../styles.css'
import 'tailwindcss/tailwind.css'
import "@/globals.css" 

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}