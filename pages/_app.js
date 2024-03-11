import '../styles/globals.css'
import Layout from '../components/layout/layout.js'
import Head from 'next/head.js'
import { NotificationContextProvider } from '../store/notification-context.js'

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name='description' content='Find events' />
          <meta name="viewport" content='initial-scale=1.0, width=device-width' />
        </Head>
        <Component {...pageProps} />
      </Layout>


    </NotificationContextProvider>
  )

}

export default MyApp
