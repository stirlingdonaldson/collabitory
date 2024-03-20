import { parseArgs } from "util";

const { values, positionals } = parseArgs({
  args: Bun.argv,
  options: {
    port: {
      type: 'string'
    },
  },
  stric: true,
  allowPositionals: true,
});

let port;
if (values.port != null){
  port = values.port;
} else {port = 3000}


const server = Bun.serve({
  port: port,
  fetch(req) {
    return new Response(Bun.file("src/index.html"));
  },
});

console.log(`Listening on http://localhost:${server.port}...`);
