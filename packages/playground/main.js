/**
 * omi playground based on ts playground
 * 
 * https://github.com/agentcooper/typescript-play
 *
 * modified by dntzhang
 */

// whoa, no typescript and no compilation!

const LibManager = {
  libs: {},

  coreLibPath: `https://unpkg.com/typescript@${window.CONFIG.TSVersion}/lib/`,

  getReferencePaths(input) {
    const rx = /<reference path="([^"]+)"\s\/>/;
    return (input.match(new RegExp(rx.source, "g")) || []).map(s => {
      const match = s.match(rx);
      if (match && match.length >= 2) {
        return match[1];
      } else {
        throw new Error(`Error parsing: "${s}".`);
      }
    });
  },

  basename(url) {
    const parts = url.split("/");
    if (parts.length === 0) {
      throw new Error(`Bad url: "${url}"`);
    }
    return parts[parts.length - 1];
  },

  addLib: async function (path, ...args) {
    if (path.indexOf("http") === 0) {
      return this._addRemoteLib(path, ...args);
    }
    return this._addCoreLib(path, ...args);
  },

  _addCoreLib: async function (fileName, ...args) {
    return this._addRemoteLib(`${this.coreLibPath}${fileName}`, ...args);
  },

  _addRemoteLib: async function (
    url,
    stripNoDefaultLib = true,
    followReferences = true,
  ) {
    const fileName = this.basename(url);

    if (this.libs[fileName]) {
      return;
    }

    UI.toggleSpinner(true);
    const res = await fetch(url);
    if (res.status === 404) {
      console.log(
        `Check https://unpkg.com/typescript@${window.CONFIG.TSVersion}/lib/`,
      );
    }
    const rawText = await res.text();
    UI.toggleSpinner(false);

    const text = stripNoDefaultLib
      ? rawText.replace('/// <reference no-default-lib="true"/>', "")
      : rawText;

    if (followReferences) {
      const paths = this.getReferencePaths(text);
      if (paths.length > 0) {
        console.log(`${fileName} depends on ${paths.join(", ")}`);
        for (const path of paths) {
          await this._addCoreLib(path, stripNoDefaultLib, followReferences);
        }
      }
    }

    const lib = monaco.languages.typescript.typescriptDefaults.addExtraLib(
      text,
      fileName,
    );

    console.groupCollapsed(`Added '${fileName}'`);
    console.log(text);
    console.groupEnd();

    this.libs[fileName] = lib;

    return lib;
  },
};

async function main() {
  const defaultCompilerOptions = {
    noImplicitAny: true,
    strictNullChecks: true,
    strictFunctionTypes: true,
    strictPropertyInitialization: true,
    noImplicitThis: true,
    noImplicitReturns: true,

    alwaysStrict: true,
    allowUnreachableCode: false,
    allowUnusedLabels: false,

    downlevelIteration: false,
    noEmitHelpers: false,
    noLib: false,
    noStrictGenericChecks: false,
    noUnusedLocals: false,
    noUnusedParameters: false,

    esModuleInterop: false,
    preserveConstEnums: false,
    removeComments: false,
    skipLibCheck: false,

    experimentalDecorators: false,
    emitDecoratorMetadata: false,

    target: monaco.languages.typescript.ScriptTarget.ES5,
    jsx: monaco.languages.typescript.JsxEmit.React,

    jsxFactory: 'h',
    jsxFragmentFactory: 'h.f',
  };

  // https://stackoverflow.com/questions/56954280/monaco-editor-how-to-disable-errors-typescript
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: true,
  });

  const urlDefaults = Object.entries(defaultCompilerOptions).reduce(
    (acc, [key, value]) => {
      if (params.has(key)) {
        const urlValue = params.get(key);

        if (urlValue === "true") {
          acc[key] = true;
        } else if (urlValue === "false") {
          acc[key] = false;
        } else if (!isNaN(parseInt(urlValue, 10))) {
          acc[key] = parseInt(params.get(key), 10);
        }
      }

      return acc;
    },
    {},
  );

  console.log("Url defaults", urlDefaults);

  const compilerOptions = Object.assign(
    {},
    defaultCompilerOptions,
    urlDefaults,
  );

  const sharedEditorOptions = {
    minimap: { enabled: false },
    automaticLayout: true,
    scrollBeyondLastLine: false,
  };

  const State = {
    inputModel: null,
    outputModel: null,
  };

  let inputEditor, outputEditor;

  function createSelect(obj, globalPath, title, compilerOption) {
    return `<label class="select">
    <span class="select-label">${title}</span>
  <select onchange="console.log(event.target.value); UI.updateCompileOptions('${compilerOption}', ${globalPath}[event.target.value]);">
  ${Object.keys(obj)
        .filter(key => isNaN(Number(key)))
        .map(key => {
          if (key === "Latest") {
            // hide Latest
            return "";
          }

          const isSelected = obj[key] === compilerOptions[compilerOption];

          return `<option ${isSelected ? "selected" : ""
            } value="${key}">${key}</option>`;
        })}
  </select>
  </label>`;
  }

  function createFile(compilerOptions) {
    return monaco.Uri.file(
      "input." +
      (compilerOptions.jsx === monaco.languages.typescript.JsxEmit.None
        ? "ts"
        : "tsx")
    )
  }

  window.UI = {
    tooltips: {},

    shouldUpdateHash: false,

    showFlashMessage(message) {
      const node = document.querySelector(".flash");
      const messageNode = node.querySelector(".flash__message");

      messageNode.textContent = message;

      node.classList.toggle("flash--hidden", false);
      setTimeout(() => {
        node.classList.toggle("flash--hidden", true);
      }, 1000);
    },

    fetchTooltips: async function () {
      try {
        this.toggleSpinner(true);
        const res = await fetch(`${window.CONFIG.baseUrl}schema/tsconfig.json`);
        const json = await res.json();
        this.toggleSpinner(false);

        for (const [propertyName, property] of Object.entries(
          json.definitions.compilerOptionsDefinition.properties.compilerOptions
            .properties,
        )) {
          this.tooltips[propertyName] = property.description;
        }
      } catch (e) {
        console.error(e);
        // not critical
      }
    },

    renderAvailableVersions() {
      const node = document.querySelector("#version-popup");
      const html = `
    <ul>
    ${Object.keys(window.CONFIG.availableTSVersions)
          .sort()
          .reverse()
          .map(version => {
            return `<li class="button" onclick="javascript:UI.selectVersion('${version}');">${version}</li>`;
          })
          .join("\n")}
    </ul>
    `;

      node.innerHTML = html;
    },

    renderVersion() {
      const node = document.querySelector("#version");
      const childNode = node.querySelector("#version-current");

      childNode.textContent = `${window.CONFIG.TSVersion}`;

      node.style.opacity = 1;
      node.classList.toggle("popup-on-hover", true);

      this.toggleSpinner(false);
    },

    toggleSpinner(shouldShow) {
      document
        .querySelector(".spinner")
        .classList.toggle("spinner--hidden", !shouldShow);
    },

    renderSettings() {
      const node = document.querySelector("#settings-popup");

      const html = `
      ${createSelect(
        monaco.languages.typescript.ScriptTarget,
        "monaco.languages.typescript.ScriptTarget",
        "Target",
        "target",
      )}
      <br />
      ${createSelect(
        monaco.languages.typescript.JsxEmit,
        "monaco.languages.typescript.JsxEmit",
        "JSX",
        "jsx",
      )}
    <ul style="margin-top: 1em;">
    ${Object.entries(compilerOptions)
          .filter(([_, value]) => typeof value === "boolean")
          .map(([key, value]) => {
            return `<li style="margin: 0; padding: 0;" title="${UI.tooltips[key] ||
              ""}"><label class="button" style="user-select: none; display: block;"><input class="pointer" onchange="javascript:UI.updateCompileOptions(event.target.name, event.target.checked);" name="${key}" type="checkbox" ${value ? "checked" : ""
              }></input>${key}</label></li>`;
          })
          .join("\n")}
    </ul>
    <p style="margin-left: 0.5em; margin-top: 1em;">
      <a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html" target="_blank">
        Compiler options reference
      </a>
    </p>
    `;

      node.innerHTML = html;
    },

    console() {
      if (!window.ts) {
        return;
      }

      console.log(`Using TypeScript ${window.ts.version}`);

      console.log("Available globals:");
      console.log("\twindow.ts", window.ts);
      console.log("\twindow.client", window.client);
    },

    selectVersion(version) {
      if (version === window.CONFIG.getLatestVersion()) {
        location.href = `${window.CONFIG.baseUrl}${location.hash}`;
        return false;
      }

      location.href = `${window.CONFIG.baseUrl}?ts=${version}${location.hash}`;
      return false;
    },

    selectExample: async function (exampleName) {
      this.toggleSpinner(true);
      try {
        const res = await fetch(
          `${window.CONFIG.baseUrl}examples/${exampleName}.tsx`,
        );
        const code = await res.text();
        UI.shouldUpdateHash = false;
        State.inputModel.setValue(code.trim());
        location.hash = `example/${exampleName}`;
        UI.shouldUpdateHash = true;
      } catch (e) {
        console.log(e);
      }
      this.toggleSpinner(false);
    },

    setCodeFromHash: async function () {
      if (location.hash.startsWith("#example")) {
        const exampleName = location.hash.replace("#example/", "").trim();
        UI.selectExample(exampleName);
      }
    },

    refreshOutput() {
      UI.shouldUpdateHash = false;
      State.inputModel.setValue(State.inputModel.getValue());
      UI.shouldUpdateHash = true;
    },

    updateURL() {
      const diff = Object.entries(defaultCompilerOptions).reduce(
        (acc, [key, value]) => {
          if (value !== compilerOptions[key]) {
            acc[key] = compilerOptions[key];
          }

          return acc;
        },
        {},
      );

      const hash = `code/${LZString.compressToEncodedURIComponent(
        State.inputModel.getValue(),
      )}`;

      const urlParams = Object.assign({}, diff);

      ["lib", "ts"].forEach(param => {
        if (params.has(param)) {
          urlParams[param] = params.get(param);
        }
      });

      if (Object.keys(urlParams).length > 0) {
        const queryString = Object.entries(urlParams)
          .map(([key, value]) => {
            return `${key}=${encodeURIComponent(value)}`;
          })
          .join("&");

        window.history.replaceState(
          {},
          "",
          `${window.CONFIG.baseUrl}?${queryString}#${hash}`,
        );
      } else {
        window.history.replaceState({}, "", `${window.CONFIG.baseUrl}#${hash}`);
      }
    },

    updateCompileOptions(name, value) {
      console.log(`${name} = ${value}`);

      Object.assign(compilerOptions, {
        [name]: value,
      });

      console.log("Updaring compiler options to", compilerOptions);
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
        compilerOptions,
      );

      let inputCode = inputEditor.getValue();
      State.inputModel.dispose();
      State.inputModel = monaco.editor.createModel(
        inputCode,
        "typescript",
        createFile(compilerOptions)
      );
      inputEditor.setModel(State.inputModel);

      UI.refreshOutput();

      UI.renderSettings();

      UI.updateURL();
    },

    getInitialCode() {
      if (location.hash.startsWith("#code")) {
        const code = location.hash.replace("#code/", "").trim();
        return LZString.decompressFromEncodedURIComponent(code);
      }

      return `@tag('my-counter')
class extends WeElement {

  static css = \`
    span {
      color: red;
    }\`
  
  count = 0

  sub = () => {
    this.count--
    this.update()
  }

  add = () => {
    this.count++
    this.update()
  }

  render() {
    return (
      <>
        <button onClick={this.sub}>-</button>
        <span>{this.count}</span>
        <button onClick={this.add}>+</button>
      </>
    )
  }
}

render(<my-counter />, 'body')
  `.trim();
    },
  };

  window.MonacoEnvironment = {
    getWorkerUrl: function (workerId, label) {
      return `worker.js?version=${window.CONFIG.getMonacoVersion()}`;
    },
  };

  for (const path of window.CONFIG.extraLibs) {
    await LibManager.addLib(path);
  }

  monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
    compilerOptions,
  );

  State.inputModel = monaco.editor.createModel(
    UI.getInitialCode(),
    "typescript",
    createFile(compilerOptions)
  );

  State.outputModel = monaco.editor.createModel(
    "",
    "javascript",
    monaco.Uri.file("output.js"),
  );

  inputEditor = monaco.editor.create(
    document.getElementById("input"),
    Object.assign({ model: State.inputModel }, sharedEditorOptions),
  );

  outputEditor = monaco.editor.create(
    document.getElementById("output"),
    Object.assign({ model: State.outputModel }, sharedEditorOptions),
  );

  // 隐藏loading
  UI.toggleSpinner(false);

  function updateOutput() {
    monaco.languages.typescript.getTypeScriptWorker().then(worker => {
      worker(State.inputModel.uri).then((client, a) => {
        if (typeof window.client === "undefined") {
          // UI.renderVersion();

          // expose global
          window.client = client;
          UI.console();
        }

        client.getEmitOutput(State.inputModel.uri.toString()).then(result => {
          State.outputModel.setValue(result.outputFiles[0].text);
          run(result.outputFiles[0].text);
        });
      });
    });

    if (UI.shouldUpdateHash) {
      UI.updateURL();
    }
  }

  UI.setCodeFromHash();

  UI.renderSettings();
  // UI.fetchTooltips().then(() => {
  //   UI.renderSettings();
  // });

  updateOutput();
  inputEditor.onDidChangeModelContent(() => {
    updateOutput();
  });
  UI.shouldUpdateHash = true;

  // UI.renderAvailableVersions();

  /* Run */

  function runJavaScript() {
    console.clear();
    // to hide the stack trace
    setTimeout(() => {
      eval(State.outputModel.getValue());
    }, 0);
  }

  inputEditor.addCommand(
    monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
    runJavaScript,
  );

  outputEditor.addCommand(
    monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
    runJavaScript,
  );

  inputEditor.addCommand(
    monaco.KeyMod.Alt | monaco.KeyMod.Shift | monaco.KeyCode.KEY_F,
    prettier,
  );

  // if the focus is outside the editor
  window.addEventListener(
    "keydown",
    event => {
      const S_KEY = 83;
      if (event.keyCode == S_KEY && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();

        window.clipboard.writeText(location.href.toString()).then(
          () => UI.showFlashMessage("URL is copied to the clipboard!"),
          e => {
            alert(e);
          },
        );
      }

      if (
        event.keyCode === 13 &&
        (event.metaKey || event.ctrlKey) &&
        event.target instanceof Node &&
        event.target === document.body
      ) {
        event.preventDefault();
        runJavaScript();
      }
    },
    false,
  );

  function prettier() {
    const PRETTIER_VERSION = "1.14.3";

    require([
      `https://unpkg.com/prettier@${PRETTIER_VERSION}/standalone.js`,
      `https://unpkg.com/prettier@${PRETTIER_VERSION}/parser-typescript.js`,
    ], function (prettier, { parsers }) {
      const cursorOffset = State.inputModel.getOffsetAt(
        inputEditor.getPosition(),
      );

      const formatResult = prettier.formatWithCursor(
        State.inputModel.getValue(),
        {
          parser: parsers.typescript.parse,
          cursorOffset,
        },
      );

      State.inputModel.setValue(formatResult.formatted);
      const newPosition = State.inputModel.getPositionAt(
        formatResult.cursorOffset,
      );
      inputEditor.setPosition(newPosition);
    });
  }
}
