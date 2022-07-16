const params = new URLSearchParams(location.search);

const version = params.get("version");

if (!version) {
  throw new Error(`Pass ?version= to worker.js.`);
}

self.MonacoEnvironment = {
  baseUrl: `./monaco-editor/min`,
};
importScripts(
  `./monaco-editor/min/vs/base/worker/workerMain.js`,
);
