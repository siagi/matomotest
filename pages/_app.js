import '../styles/globals.css'
import {useEffect} from 'react'
import {init} from '@socialgouv/matomo-next';
import { useRouter } from 'next/router'

const MATOMO_URL = 'MIMASTEST.COM'
const MATOMO_SITE_ID = '1';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  // useEffect(() => {

  //   init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });

    
  // })

  useEffect(() => {
      const handleRouteChange = (url) => {
          if (window && window._paq) {
              _paq.push(['setCustomUrl', url]);
              _paq.push(['setDocumentTitle', document.title]);
              _paq.push(['trackPageView']);
          }
      }

      router.events.on('routeChangeStart', handleRouteChange)
  }, [])


  return <Component {...pageProps} />
}



export default MyApp
