import { FuseBox, WebIndexPlugin } from "fuse-box";

const fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/$name.js",
  plugins: [
    WebIndexPlugin({
      title: "My awesome website",
      bundles: ["client/app"],
      template: "static/index.html",
    }),
  ],
  hash: true,
  useTypescriptCompiler: true,
  log: {
    showBundledFiles: false,
    clearTerminalOnBundle: true,
  },
  // shim: {
  //     jquery: {
  //         source: "node_modules/jquery/dist/jquery.js",
  //         exports: "$",
  //     },
  // },
});

fuse
  .bundle("server/app")
  .target("server@esnext")
  .watch("server/**")
  .instructions(" > [server/main.ts]")
  .completed(proc => proc.start());

fuse
  .bundle("client/app")
  .target("browser@esnext")
  .watch("client/**")
  .hmr()
  .instructions(" > client/app.tsx");

fuse.run();
