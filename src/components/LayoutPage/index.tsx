import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMedia } from "use-media";

//design-system
import { Layout, Dropdown, Menu, Space } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";

//icons
import { HeartOutlined, MenuOutlined } from "@ant-design/icons";

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
    name: "Pokémons",
  },
];

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <Link href="/">
            <a>Home</a>
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link href="/pokemon">
            <a>Pokémon</a>
          </Link>
        ),
      },
    ]}
  />
);

export const LayoutPage = ({ children }: LayoutProps) => {
  const router = useRouter();
  const isMobile = useMedia({ maxWidth: "768px" });

  return (
    <Layout className={styles.containerLayout}>
      <Header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <a>
                <Image
                  src="/images/logo.png"
                  alt="Logo Principal do Pokémon Universe"
                  layout="fill"
                />
              </a>
            </Link>
          </div>

          {!isMobile ? (
            <ul>
              {links.map((link) => (
                <li key={link.url}>
                  <Link href={link.url}>
                    <a
                      style={{
                        color: `${
                          router.pathname === link.url ? "#3D67BA" : "#3a3a3c"
                        }`,
                      }}
                    >
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <MenuOutlined />
                </Space>
              </a>
            </Dropdown>
          )}
        </div>
      </Header>

      <Content className={styles.containerContent}>
        <div className={styles.content}>{children}</div>
      </Content>

      <Footer className={styles.footerContainer}>
        <span>
          Feito com <HeartOutlined /> Por{" "}
          <a href="https://rafaelalmendra.com" target="_blank" rel="noreferrer">
            Rafael Almendra
          </a>
        </span>
      </Footer>
    </Layout>
  );
};
