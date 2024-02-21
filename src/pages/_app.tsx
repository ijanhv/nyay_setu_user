import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
    <ThirdwebProvider clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID} 
    activeChain={"mumbai"}
   
  >
  <Component {...pageProps} />
  </ThirdwebProvider>
  </ThemeProvider>
  );
}
