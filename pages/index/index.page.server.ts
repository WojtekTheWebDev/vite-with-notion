import { PageContext } from "../../renderer/types";
import { useNotion } from '../../composables'

export async function onBeforeRender(pageContext: PageContext) {
  const { getPage } = useNotion();

  const page = await getPage(import.meta.env.VITE_HOME_PAGE_ID as string)

  // Our render and hydrate functions we defined earlier pass `pageContext.pageProps` to
  // the root Vue component `Page`; this is where we define `pageProps`.
  const pageProps = { page };

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
