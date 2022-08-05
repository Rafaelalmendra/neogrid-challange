import { useState, useEffect } from "react";
import { api } from "services/api";

export const useAxiosFetch = () => {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [typesData, setTypesData] = useState<any>(null);
  const [fetchError, setFetchError] = useState("");
  const [loadingTypes, setLoadingTypes] = useState(false);
  const [loadingPokemons, setLoadingPokemons] = useState(false);

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
          setFetchError("");
        }
      } catch (error: any) {
        setFetchError(error.message);
        [];
      } finally {
        setTimeout(() => setLoadingTypes(false), 1000);
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
          setFetchError("");
        }
      } catch (error: any) {
        setFetchError(error.message);
        [];
      } finally {
        setTimeout(() => setLoadingPokemons(false), 1000);
      }
    };

    fetchTypesData();
    fetchPokemonData();
  }, [token]);

  return { pokemonData, typesData, fetchError, loadingTypes, loadingPokemons };
};
