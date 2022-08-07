import { useEffect, useState } from "react";
import type { NextPage } from "next";
import useMedia from "use-media";

//hooks
import { useAxiosFetch } from "hooks/useAxiosFetch";

//types
import { pokemonDataProps } from "types";

//design-system
import { Input } from "antd";

//mocks
import filterTypes from "mocks/colorTypesMock.json";

//components
import { HeadSeo } from "components/HeadSeo";
import { Loading } from "components/Loading";
import { NoResults } from "components/NoResults";
import { TotalCards } from "components/TotalCards";
import { LayoutPage } from "components/LayoutPage";
import { CardPokemon } from "components/CardPokemon";
import { FilterButton } from "components/FilterButton";
import { CarouselCards } from "components/CarouselCards";

//styles
import styles from "styles/pages/pokemons.module.less";

const PokemonsPage: NextPage = () => {
  const types = filterTypes;
  const { Search } = Input;
  const isMobile = useMedia({ maxWidth: "768px" });
  const { pokemonData, typesData, loadingTypes, loadingPokemons } =
    useAxiosFetch();

  const [filteredPokemons, setFilteredPokemons] = useState<pokemonDataProps[]>(
    []
  );
  const [filters, setFilters] = useState<string[]>([]);
  const [filterByName, setFilterByName] = useState<string>("");
  const [filterByType, setFilterByType] = useState<string>("all");

  useEffect(() => {
    setFilters(typesData);
  }, [pokemonData, typesData]);

  useEffect(() => {
    handleFilters();
  }, [filterByType, filterByName, pokemonData]);

  const lowerSearchByName = filterByName.toLowerCase();

  const handleFilters = () => {
    if (filterByType === "all" || filterByName === "") {
      const filterOnlyByName = pokemonData?.filter((card: pokemonDataProps) =>
        card.name.toLowerCase().includes(lowerSearchByName)
      );
      setFilteredPokemons(filterOnlyByName);
    }

    if (!filterByName && filterByType !== "all") {
      const filterOnlyByType = pokemonData?.filter(
        (card: pokemonDataProps) => card.types[0] === filterByType
      );
      setFilteredPokemons(filterOnlyByType);
    }

    if (filterByName && filterByType !== "all") {
      const filterByNameAndType = filteredPokemons?.filter(
        (card) =>
          card.name.toLowerCase().includes(lowerSearchByName) &&
          card.types[0] === filterByType
      );
      setFilteredPokemons(filterByNameAndType);
    }

    if (!filterByName && filterByType === "all") {
      setFilteredPokemons(pokemonData);
    }
  };

  const handleFilterByType = (type: string) => {
    setFilterByName("");
    setFilterByType(type);
  };

  return (
    <>
      <HeadSeo
        title="Discover Pokemons | Pokémon Universe"
        content="Here you can discover all types of Pokémon"
      />

      <LayoutPage>
        <main className={styles?.container}>
          <h2>Choose your Pokémon type</h2>

          <div className={styles?.filters}>
            {loadingTypes ? (
              <p>Searching types...</p>
            ) : (
              <div className={styles?.typesContainer}>
                <FilterButton
                  onClick={() => handleFilterByType("all")}
                  style={
                    filterByType === "all"
                      ? {
                          backgroundColor: "#FEDC47",
                          border: "1px solid #FEDC47",
                        }
                      : {}
                  }
                >
                  All
                </FilterButton>

                {filters?.map((filter, index: number) => (
                  <FilterButton
                    key={index}
                    onClick={() => handleFilterByType(filter)}
                    style={
                      filterByType === filter && types[index]?.name === filter
                        ? {
                            border: "1px solid #FEDC47",
                            color: types[index]?.textColor,
                            backgroundColor: types[index]?.color,
                          }
                        : {}
                    }
                  >
                    {filter}
                  </FilterButton>
                ))}
              </div>
            )}

            <Search
              value={filterByName}
              placeholder="Search for a Pokémon..."
              style={{ width: isMobile ? "100%" : 258 }}
              onChange={(e) => setFilterByName(e?.target?.value)}
            />
          </div>

          {loadingPokemons && <Loading />}
          {!loadingPokemons && filteredPokemons?.length === 0 && <NoResults />}

          {isMobile ? (
            <CarouselCards>
              {!filteredPokemons
                ? pokemonData
                    ?.slice(0, 40)
                    ?.map((pokemon) => (
                      <CardPokemon data={pokemon} key={pokemon?.id} />
                    ))
                : filteredPokemons
                    ?.slice(0, 40)
                    ?.map((pokemon) => (
                      <CardPokemon data={pokemon} key={pokemon?.id} />
                    ))}
            </CarouselCards>
          ) : (
            <div className={styles.cardsContainer}>
              {!filteredPokemons
                ? pokemonData
                    ?.slice(0, 40)
                    ?.map((pokemon) => (
                      <CardPokemon data={pokemon} key={pokemon?.id} />
                    ))
                : filteredPokemons
                    ?.slice(0, 40)
                    ?.map((pokemon) => (
                      <CardPokemon data={pokemon} key={pokemon?.id} />
                    ))}
            </div>
          )}

          {!loadingPokemons && filteredPokemons?.length > 0 && (
            <TotalCards total={filteredPokemons?.slice(0, 40)?.length} />
          )}
        </main>
      </LayoutPage>
    </>
  );
};

export default PokemonsPage;
