import * as ts from "typescript";

export function tsBuild(code) {
  return ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ESNext,
      // @ts-ignore
      jsx: 'react',
      jsxFactory: 'h',
      jsxFragmentFactory: 'h.f',
    }
  }).outputText;
}

