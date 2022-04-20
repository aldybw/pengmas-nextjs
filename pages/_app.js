import "../styles/css/bootstrap.min.css";
import "../styles/css/style.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sakubumil</title>
        {/* Fontawesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Image Title SakuBumil */}
        <link rel="icon" href="/image/Design 2 Saku Bumil.png" />
        {/* Jquery 3.6.0 */}
        <script
          src="https://code.jquery.com/jquery-3.6.0.js"
          integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
          crossOrigin="anonymous"
        />

        {/* Bootsrap 5 JS */}
        <script src="/js/bootstrap.min.js" />

        {/* Button Scroll To Bottom */}
        <script src="/js/scroll-button.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
