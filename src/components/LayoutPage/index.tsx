//design-system
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";

//icons
import { HeartOutlined } from "@ant-design/icons";

//styles
import styles from "./styles.module.less";
import { Navbar } from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutPage = ({ children }: LayoutProps) => {
  return (
    <Layout className={styles.containerLayout}>
      <Header className={styles.header}>
        <Navbar />
      </Header>

      <Content className={styles.containerContent}>
        <div className={styles.content}>{children}</div>
      </Content>

      <Footer className={styles.footerContainer}>
        <span>
          Made with <HeartOutlined /> by{" "}
          <a href="https://rafaelalmendra.com" target="_blank" rel="noreferrer">
            Rafael Almendra
          </a>
        </span>
      </Footer>
    </Layout>
  );
};
