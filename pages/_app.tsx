import "../styles/globals.css";
import type { AppProps } from "next/app";

import Nav from "../components/header/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Nav>
      <Component {...pageProps} />
    </Nav>
  );
}

export default MyApp;
