import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from '../metadata/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head active={true} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
