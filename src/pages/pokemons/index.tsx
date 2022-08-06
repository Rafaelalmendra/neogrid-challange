import { useEffect, useState } from "react";
import type { NextPage } from "next";
import useMedia from "use-media";

//hooks
import { useAxiosFetch } from "hooks/useAxiosFetch";

//design-system
import { Input } from "antd";

//components
import { HeadSeo } from "components/HeadSeo";
import { Loading } from "components/Loading";
import { NoResults } from "components/NoResults";
import { LayoutPage } from "components/LayoutPage";
import { CardPokemon } from "components/CardPokemon";
import { FilterButton } from "components/FilterButton";
import { CarouselCards } from "components/CarouselCards";

//styles
import styles from "styles/pages/pokemons.module.less";

const PokemonsPage: NextPage = () => {
  const { Search } = Input;
  const isMobile = useMedia({ maxWidth: "768px" });
  const { pokemonData, typesData, loadingTypes, loadingPokemons } =
    useAxiosFetch();

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [filteredCards, setFilteredCards] = useState<any[]>([]);
  const [filterByName, setFilterByName] = useState<string>("");
  const [filterByType, setFilterByType] = useState<string>("all");

  useEffect(() => {
    setFilters(typesData);
    setPokemons(pokemonData);
  }, [typesData, pokemonData]);

  useEffect(() => {
    const lowerSearchByName = filterByName.toLowerCase();

    const handleFilters = () => {
      if (filterByType === "all" || filterByName === "") {
        const filterOnlyByName = pokemons?.filter((card: any) =>
          card.name.toLowerCase().includes(lowerSearchByName)
        );

        setFilteredCards(filterOnlyByName);
      }

      if (!filterByName && filterByType !== "all") {
        const filterOnlyByType = pokemons?.filter(
          (card: any) => card.types[0] === filterByType
        );
        setFilteredCards(filterOnlyByType);
      }

      if (filterByName && filterByType !== "all") {
        const filterByNameAndType = filteredCards?.filter(
          (card) =>
            card.name.toLowerCase().includes(lowerSearchByName) &&
            card.types[0] === filterByType
        );
        setFilteredCards(filterByNameAndType);
      }

      if (!filterByName && filterByType === "all") {
        setFilteredCards(pokemons);
      }
    };

    handleFilters();
  }, [filterByType, filterByName, pokemons, filteredCards]);

  return (
    <>
      <HeadSeo
        title="Descubra Pokemons | Pokemon Universe"
        content="Aqui você pode descobrir todos os tipos de Pokémon"
      />

      <LayoutPage>
        <main className={styles.container}>
          <h2>Escolha seu tipo de Pokémon</h2>

          <div className={styles.filters}>
            {!loadingTypes ? (
              <div className={styles.typesContainer}>
                <FilterButton
                  onClick={() => {
                    setFilterByName("");
                    setFilterByType("all");
                  }}
                  active={filterByType === "all"}
                >
                  Todos
                </FilterButton>

                {filters?.map((filter, index: number) => (
                  <FilterButton
                    key={index}
                    active={filterByType === filter}
                    onClick={() => {
                      setFilterByName("");
                      setFilterByType(filter);
                    }}
                  >
                    {filter}
                  </FilterButton>
                ))}
              </div>
            ) : (
              <p>Buscando tipos...</p>
            )}

            <div>
              <Search
                style={{ width: isMobile ? "100%" : 258 }}
                placeholder="Procure um Pokémon..."
                value={filterByName}
                onChange={(e) => setFilterByName(e?.target?.value)}
              />
            </div>
          </div>

          {loadingPokemons && <Loading />}
          {filteredCards?.length === 0 && <NoResults />}

          {isMobile ? (
            <CarouselCards>
              {!filteredCards
                ? pokemons?.map((pokemon) => (
                    <CardPokemon
                      key={pokemon?.id}
                      imageLink={pokemon?.images?.large}
                    />
                  ))
                : filteredCards
                    ?.slice(0, 40)
                    ?.map((pokemon) => (
                      <CardPokemon
                        key={pokemon?.id}
                        imageLink={pokemon?.images?.large}
                      />
                    ))}
            </CarouselCards>
          ) : (
            <div className={styles.cardsContainer}>
              {!filteredCards
                ? pokemons?.map((pokemon) => (
                    <CardPokemon
                      key={pokemon?.id}
                      imageLink={pokemon?.images?.large}
                    />
                  ))
                : filteredCards
                    ?.slice(0, 40)
                    ?.map((pokemon) => (
                      <CardPokemon
                        key={pokemon?.id}
                        imageLink={pokemon?.images?.large}
                      />
                    ))}
            </div>
          )}

          {!loadingPokemons && filteredCards?.length > 0 && (
            <p className={styles.totalText}>
              Total - <strong>{filteredCards?.slice(0, 40)?.length}</strong>
            </p>
          )}
        </main>
      </LayoutPage>
    </>
  );
};

export default PokemonsPage;
