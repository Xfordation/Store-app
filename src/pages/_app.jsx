import Globals from "@/styles/Globals";
import { theme } from "@/styles/Theme";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/global.css";
import { ThemeProvider } from "styled-components";
import Layout from "@/components/layout/Layout";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Globals />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
