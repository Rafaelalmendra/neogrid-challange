import Image from "next/image";

//styles
import styles from "./styles.module.less";

interface CardPokemonProps {
  key: number;
  imageLink: string;
}

export const CardPokemon = ({ key, imageLink }: CardPokemonProps) => {
  return (
    <div className={styles.card} key={key}>
      <Image src={imageLink} alt="Pokemon" layout="fill" />
    </div>
  );
};
