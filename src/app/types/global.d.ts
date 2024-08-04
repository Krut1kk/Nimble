interface ImportMetaEnv {
  readonly VITE_DEVNIMBLE_API_KEY: string;
  readonly VITE_BACKEND_BASE_URL: string;
  readonly VITE_PROXY_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*svg?react" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  export default content;
}
