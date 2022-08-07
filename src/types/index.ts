export interface pokemonDataProps {
  id: number;
  name: string;
  images: {
    large: string;
  };
  attacks: {
    name: string;
    text: string;
  }[];
  weaknesses: {
    type: string;
  }[];
  subtypes: string[];
  types: string[];
}
