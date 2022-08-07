import { useState, useEffect } from "react";
import { api } from "services/api";

//types
import { pokemonDataProps } from "types";

export const useAxiosFetch = () => {
  const [typesData, setTypesData] = useState<string[]>([]);
  const [pokemonData, setPokemonData] = useState<pokemonDataProps[]>([]);
  const [loadingTypes, setLoadingTypes] = useState<boolean>(false);
  const [loadingPokemons, setLoadingPokemons] = useState<boolean>(false);

  const token = process.env.API_KEY;

  useEffect(() => {
    const fetchTypesData = async () => {
      setLoadingTypes(true);
      try {
        const response = await api.request({
          method: "GET",
          url: "/types",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setTypesData(response.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingTypes(false);
      }
    };

    const fetchPokemonData = async () => {
      setLoadingPokemons(true);

      try {
        const response = await api.request({
          method: "GET",
          url: "/cards",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setPokemonData(response.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoadingPokemons(false);
        }, 1000);
      }
    };

    fetchTypesData();
    fetchPokemonData();
  }, [token]);

  return { pokemonData, typesData, loadingTypes, loadingPokemons };
};
