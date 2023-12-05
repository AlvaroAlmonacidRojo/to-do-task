import React, { ReactNode } from "react";
import Head from "next/head";
import {
  Container,
} from "@mui/material";
import { useAuth } from "../../hooks/auth";
import NavBar from "../NavBar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "To do task" }: Props) => {
  const { token, clearToken } = useAuth();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header></header>
      <Container maxWidth="md">
        {token && <NavBar clearToken={clearToken} />}
        {children}
      </Container>
    </div>
  );
};

export default Layout;
