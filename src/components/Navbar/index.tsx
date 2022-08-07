import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useMedia from "use-media";

//design-system
import { Dropdown, Menu, Space } from "antd";

//styles
import styles from "./styles.module.less";

//icons
import { MenuOutlined } from "@ant-design/icons";

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
          <Link href="/pokemons">
            <a>Pokémons</a>
          </Link>
        ),
      },
    ]}
  />
);

export const Navbar = () => {
  const router = useRouter();
  const isMobile = useMedia({ maxWidth: "768px" });

  return (
    <div className={styles.headerContent}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a>
            <Image
              src="/images/logo.png"
              alt="Pokemon Universe main logo"
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
  );
};
