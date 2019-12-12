import { FuseBox, WebIndexPlugin, Sparky } from "fuse-box";

Sparky.task("clean", () => Sparky.src("dist").clean("dist"));

Sparky.task("default", ["clean"], () => {
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
    .hmr({ socketURI: `http://localhost:4444`})
    .instructions(" > client/app.tsx");

  fuse.run();
});

// Sparky.start("default");
