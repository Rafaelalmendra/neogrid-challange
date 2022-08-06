import Image from "next/image";

//styles
import styles from "./styles.module.less";

interface CardPokemonProps {
  key: number;
  imageLink: string;
  onClick?: () => void;
}

export const CardPokemon = ({ key, imageLink, onClick }: CardPokemonProps) => {
  return (
    <div className={styles.card} key={key}>
      <Image onClick={onClick} src={imageLink} alt="Pokemon" layout="fill" />
    </div>
  );
};
