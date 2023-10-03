import '@/styles/globals.css'
import '@/styles/registration.css'
import '@/styles/login.css'
import '@/styles/sidebar.css'
import '@/styles/chat.css'


export default function App({ Component, pageProps }) {
  return (
    <>

      <Component {...pageProps} />
    </>
  )
}
