import "@/styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID} 
    activeChain={"mumbai"}
    authConfig={{
      domain: process.env.DOMAIN || "",
      authUrl: "/api/auth"
    }}
  >
  <Component {...pageProps} />
  </ThirdwebProvider>
  );
}
