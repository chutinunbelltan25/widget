import '../styles/globals.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>
          Sinwattana
        </title>
      </Head>
      <body>
        <Component {...pageProps} />
      </body>
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.objectOf(Object).isRequired,
};
export default MyApp;
