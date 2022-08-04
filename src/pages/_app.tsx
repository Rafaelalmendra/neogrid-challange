import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";

//styles
import "styles/global.less";
import "antd/dist/antd.less";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />;
    </ConfigProvider>
  );
}

export default MyApp;
