import  { Head, Html, Main, NextScript } from "next/document";
import script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="/dashboard/vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="/dashboard/vendor/chartist/css/chartist.min.css"
        />
        <link
          href="/dashboard/vendor/owl-carousel/owl.carousel.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
