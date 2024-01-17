// / <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CUSTOM_ENV_VARIABLE: string;
  readonly VITE_REACT_APP_BASE_URL: string;
  readonly VITE_REACT_NAVER_CLIENT_ID: string;
  readonly VITE_REACT_NAVER_REDIRECT_URL : string;
  readonly VITE_REACT_NAVER_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare module '*.svg' {
  const content: any;
  export default content;
}
