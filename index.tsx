// A simple way to connect FileSystemRouter to Bun#serve
// run with `bun run index.tsx`

import { renderToReadableStream } from "react-dom/server";
import { FileSystemRouter } from "bun";
var { isNull } = require('lodash');
import { Api } from "./src/routes/api";

export default {
  port: 3000,
  async fetch(request: Request) {

    let response: null | Response;
    if(!isNull(response = await Api(request)))
      return response;
    
    const router = new FileSystemRouter({
      dir: process.cwd() + "/pages",
      style: "nextjs",
    });

    const route = router.match(request);

    const { default: Root } = await import(route.filePath!);
    return new Response(await renderToReadableStream(<Root {...route.params} />));
  },
};
