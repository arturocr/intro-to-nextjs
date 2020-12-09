import Head from 'next/head';
import '../styles/globals.css';
import '../styles/custom.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <title>Intro to Next.js</title>
    </Head>
    <div className='flex flex-1'>
      <main className='container flex flex-col items-center justify-center px-4 py-5 mx-auto space-y-6'>
        <Component {...pageProps} />
        <footer className='text-sm'>
          by{' '}
          <a
            className='text-purple-500 transition-colors hover:text-purple-600'
            href='https://arturocampos.dev'
          >
            @arturocr
          </a>
        </footer>
      </main>
    </div>
  </>
);

export default MyApp;
