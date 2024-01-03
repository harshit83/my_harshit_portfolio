import "../styles/globals.css";
import { Layout } from "../components";
import {Toaster} from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster {...pageProps}/>
      <Component {...pageProps} />
    </Layout>
  )
}
