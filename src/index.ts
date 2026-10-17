#!/usr/bin/env node
// Argümansız çalıştırılırsa MCP sunucusu (stdio) başlar; "stores", "help" vb. ile mağaza yönetim CLI'si çalışır.
const cmd = process.argv[2];

if (cmd && cmd !== "serve") {
  const { runCli } = await import("./cli.js");
  process.exitCode = await runCli(process.argv.slice(2));
} else {
  await import("./server.js");
}
