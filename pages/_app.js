import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
 
storyblokInit({
  accessToken: "f0C7LKthNNv7dDQUWJ89hQtt",
  use: [apiPlugin]
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
