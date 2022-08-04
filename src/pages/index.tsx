import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";

//design-system
import { Button } from "antd";

//components
import { LayoutPage } from "components/LayoutPage";

//styles
import styles from "styles/pages/home.module.less";
import { HeadSeo } from "@/components/HeadSeo";

const Home: NextPage = () => {
  return (
    <>
      <HeadSeo
        title="Home | Pokemon Universe"
        content="Aqui você pode conhecer o tipo de Pokémon, seus pontos fortes,desvantagens e habilidades"
      />
      <LayoutPage>
        <main className={styles.container}>
          <div className={styles.content}>
            <h1>
              Conheça todos os
              <br />
              <span>Pokémons</span> e seus tipos
            </h1>
            <p>
              Você pode conhecer o tipo de Pokémon, seus pontos fortes,
              desvantagens e habilidades
            </p>
            <Link href="/pokemons">
              <a>
                <Button type="primary" size="large">
                  Encontre seus Pokémons
                </Button>
              </a>
            </Link>
          </div>

          <div className={styles.bannerContainer}>
            <Image
              src="/images/banner.png"
              alt="Banner principal da página Pokémon Universe"
              layout="fill"
            />
          </div>
        </main>
      </LayoutPage>
    </>
  );
};

export default Home;
