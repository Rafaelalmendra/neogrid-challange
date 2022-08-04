import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

//design-system
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";

//icons
import { HeartOutlined } from "@ant-design/icons";

//styles
import styles from "./styles.module.less";

interface LayoutProps {
  children: React.ReactNode;
}

interface LinksProps {
  url: string;
  name: string;
}

const links: LinksProps[] = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/pokemons",
    name: "Pokemons",
  },
];

export const LayoutPage = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <Layout className={styles.containerLayout}>
      <Header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Image src="/images/logo.png" alt="logo" layout="fill" />
          </div>

          <ul>
            {links.map((link) => (
              <li
                key={link.url}
                style={{
                  color: `${
                    router.pathname === link.url ? "#0063f7" : "#3a3a3c"
                  }`,
                }}
              >
                <Link href={link.url}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Header>

      <Content className={styles.containerContent}>{children}</Content>

      <Footer className={styles.footerContainer}>
        <span>
          Feito com <HeartOutlined /> Por{" "}
          <a href="https://rafaelalmendra.com">Rafael Almendra</a>
        </span>
      </Footer>
    </Layout>
  );
};
