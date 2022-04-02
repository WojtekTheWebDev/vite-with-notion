# Vite with Notion

App using Vite + vite-plugin-ssr with Notion API

## Introduction

This is a Vite app integrated with Notion.
It was build with [Vite](https://vitejs.dev/), [vite-plugin-ssr](https://vite-plugin-ssr.com/) and [Notion API](https://developers.notion.com/). 
It’s really basic for now, it allows to render `Heading 1` and `Paragraph` blocks with their links, colors, etc.

I’m doing it for fun in my spare time, so it will take me some time to build something nice here, but I will keep developing it!

Feel free to contribute!

## Getting started

1. Clone the repository.

2. Install dependencies.

```bash
yarn
```

3. Follow the steps from Notion's docs - [Getting started](https://developers.notion.com/docs/getting-started).

4. Create `.env` file and add `VITE_HOME_PAGE_ID` environment variable with id of your Notion's integration.

```
VITE_HOME_PAGE_ID=<YOUR_INTEGRATION_ID>
```

5. Run the app.

```bash
yarn dev
```