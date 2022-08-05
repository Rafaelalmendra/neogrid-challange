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
import Image from "next/image";
import { CardPokemon } from "@/components/CardPokemon";

const PokemonsPage: NextPage = () => {
  const { pokemonData, typesData, loadingTypes, loadingPokemons } =
    useAxiosFetch();

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [filters, setFilters] = useState<String[]>([]);

  const [filteredCards, setFilteredCards] = useState<any[]>([]);
  const [filterByType, setFilterByType] = useState<String>("all");
  const [filterByName, setFilterByName] = useState<String>("all");

  useEffect(() => {
    setFilters(typesData);
    setPokemons(pokemonData);
  }, [typesData, pokemonData]);

  console.log(pokemons);

  // useEffect(() => {
  //   handleFilters();
  // }, [filterByType, filterByName]);

  // const lowerSearchByName = filterByName.toLowerCase();

  // const handleFilters = () => {
  //   if (filterByName && filterByType === "all") {
  //     const filterOnlyByName = cards.filter((card) =>
  //       card.name.toLowerCase().includes(lowerSearchByName)
  //     );
  //     setFilteredCards(filterOnlyByName);
  //   }

  //   if (!filterByName && filterByType !== "all") {
  //     const filterOnlyByType = cards.filter(
  //       (card) => card.types[0] === filterByType
  //     );
  //     setFilteredCards(filterOnlyByType);
  //   }

  //   if (filterByName && filterByType !== "all") {
  //     const filterByNameAndType = filteredCards.filter(
  //       (card) =>
  //         card.name.toLowerCase().includes(lowerSearchByName) &&
  //         card.types[0] === filterByType
  //     );
  //     setFilteredCards(filterByNameAndType);
  //   }

  //   if (!filterByName && filterByType === "all") {
  //     setFilteredCards(cards);
  //   }
  // };

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
            {!loadingTypes ? (
              <div className={styles.filtersContainer}>
                <FilterButton onClick={() => setFilterByType("all")}>
                  Todos
                </FilterButton>
                {filters?.map((filter, index: number) => (
                  <FilterButton
                    key={index}
                    onClick={() => setFilterByType(filter)}
                  >
                    {filter}
                  </FilterButton>
                ))}
              </div>
            ) : (
              <p>Buscando tipos...</p>
            )}

            <div>pesquisa</div>
          </div>

          {!loadingPokemons ? (
            <div className={styles.cardsContainer}>
              {pokemons?.map((pokemon) => (
                <CardPokemon
                  key={pokemon?.id}
                  imageLink={pokemon?.images?.large}
                />
              ))}
            </div>
          ) : (
            <p>Buscando Pokémons...</p>
          )}
        </main>
      </LayoutPage>
    </>
  );
};

export default PokemonsPage;
