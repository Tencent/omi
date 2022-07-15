const params = new URLSearchParams(location.search);

const version = params.get("version");

if (!version) {
  throw new Error(`Pass ?version= to worker.js.`);
}

self.MonacoEnvironment = {
  baseUrl: `https://unpkg.com/monaco-editor@${version}/min`,
};
importScripts(
  `https://unpkg.com/monaco-editor@${version}/min/vs/base/worker/workerMain.js`,
);
