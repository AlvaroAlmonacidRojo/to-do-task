import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { AuthProvider } from "../components/Auth";
import Layout from "../components/Layout";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
