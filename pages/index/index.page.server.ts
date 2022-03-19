// /pages/star-wars/movie.page.server.js
// Environment: Node.js

import fetch from "node-fetch";
import { PageContext } from "../../renderer/types";

export async function onBeforeRender(pageContext: PageContext) {
  // The route parameter of `/star-wars/:movieId` is available at `pageContext.routeParams`
  console.log('pageContext', pageContext);
  
  // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
  const response = await fetch(`https://swapi.dev/api/films/1`);
  let movie = await response.json();

  // Our render and hydrate functions we defined earlier pass `pageContext.pageProps` to
  // the root Vue component `Page`; this is where we define `pageProps`.
  const pageProps = { movie };

  // We make `pageProps` available as `pageContext.pageProps`
  return {
    pageContext: {
      pageProps,
    },
  };
}

// By default `pageContext.*` are available only on the server. But our hydrate function
// we defined earlier runs in the browser and needs `pageContext.pageProps`; we use
// `passToClient` to tell `vite-plugin-ssr` to serialize and make `pageContext.pageProps`
// available to the browser.
export const passToClient = ["pageProps", "urlPathname"];
