/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  readonly VITE_BUILD_NO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
