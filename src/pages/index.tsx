import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";

//design-system
import { Button } from "antd";

//components
import { HeadSeo } from "components/HeadSeo";
import { LayoutPage } from "components/LayoutPage";

//styles
import styles from "styles/pages/home.module.less";

const Home: NextPage = () => {
  return (
    <>
      <HeadSeo
        title="Home | Pokemon Universe"
        content="Here you can know the type of Pokémon, their strengths, disadvantages and abilities."
      />

      <LayoutPage>
        <main className={styles.container}>
          <div className={styles.content}>
            <h1>
              Meet all the
              <br />
              <strong>Pokémons</strong> and their types
            </h1>

            <p>
              You can know the type of Pokémon, their strengths, disadvantages
              and abilities
            </p>

            <Link href="/pokemons">
              <a>
                <Button type="primary" size="large">
                  find your pokemons
                </Button>
              </a>
            </Link>
          </div>

          <div className={styles.bannerContainer}>
            <Image
              src="/images/banner.png"
              alt="Pokemon Universe main page banner"
              layout="fill"
            />
          </div>
        </main>
      </LayoutPage>
    </>
  );
};

export default Home;
