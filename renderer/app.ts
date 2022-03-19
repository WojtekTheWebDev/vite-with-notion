import { createSSRApp, defineComponent, h } from "vue";
import PageShell from "./PageShell.vue";
import { setPageContext } from "./usePageContext";
import type { PageContext } from "./types";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

export { createApp };

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          },
        }
      );
    },
  });

  const app = createSSRApp(PageWithLayout);

  // Use PrimeVue UI lib
  app.use(PrimeVue);

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext);

  return app;
}
