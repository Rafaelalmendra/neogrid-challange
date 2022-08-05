import { useEffect, useState } from "react";
import type { NextPage } from "next";

//hooks
import { useAxiosFetch } from "hooks/useAxiosFetch";

//components
import { HeadSeo } from "components/HeadSeo";
import { LayoutPage } from "components/LayoutPage";
import { FilterButton } from "components/FilterButton";

//styles
import styles from "styles/pages/pokemons.module.less";

const PokemonsPage: NextPage = () => {
  const { data, isLoading } = useAxiosFetch("/types");
  const [filters, setFilters] = useState<String[]>([]);

  useEffect(() => {
    setFilters(data?.data);
  }, [data, setFilters]);

  return (
    <>
      <HeadSeo
        title="Descubra Pokemons | Pokemon Universe"
        content="Aqui você pode descobrir todos os tipos de Pokémon"
      />

      <LayoutPage>
        <main className={styles.container}>
          <h2>Escolha seu tipo de Pokémon</h2>

          <div className={styles.content}>
            {!isLoading ? (
              <div className={styles.filtersContainer}>
                {filters?.map((filter, index: number) => (
                  <FilterButton key={index}>{filter}</FilterButton>
                ))}
              </div>
            ) : (
              <p>Carregando tipos...</p>
            )}

            <div>pesquisa</div>
          </div>
        </main>
      </LayoutPage>
    </>
  );
};

export default PokemonsPage;
