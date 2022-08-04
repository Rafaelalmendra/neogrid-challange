import { HeadSeo } from "@/components/HeadSeo";
import { LayoutPage } from "@/components/LayoutPage";
import type { NextPage } from "next";

//styles
import styles from "styles/pages/pokemons.module.less";

const PokemonsPage: NextPage = () => {
  return (
    <>
      <HeadSeo
        title="Descubra Pokemons | Pokemon Universe"
        content="Aqui você pode descobrir todos os tipos de Pokémon"
      />

      <LayoutPage>
        <main className={styles.container}></main>
      </LayoutPage>
    </>
  );
};

export default PokemonsPage;
