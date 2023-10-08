import BtnArea from "@/ContextApi/AddToBuildBtnArea";
import PcBuilderArea from "@/ContextApi/PcBuilderArea";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar";
import "@/styles/globals.css";
import type { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return getLayout(
    <>
      <SessionProvider session={session}>
        <BtnArea>
          <PcBuilderArea>
            <Navbar />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Component {...pageProps} />
            <Footer />
          </PcBuilderArea>
        </BtnArea>
      </SessionProvider>
    </>
  );
}
