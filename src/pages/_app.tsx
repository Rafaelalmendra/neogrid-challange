import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";

//styles
import "styles/global.less";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />;
    </ConfigProvider>
  );
}

export default MyApp;
