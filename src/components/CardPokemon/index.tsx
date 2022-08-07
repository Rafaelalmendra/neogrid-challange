import Image from "next/image";

//styles
import styles from "./styles.module.less";

interface CardPokemonProps {
  key: number;
  type?: string;
  imageLink: string;
  attacks?: any[];
  subTypes?: string[];
  weaknesses?: any[];
  onClick?: () => void;
}

export const CardPokemon = (props: CardPokemonProps) => {
  return (
    <div
      key={props?.key}
      onClick={props?.onClick}
      className={`${styles.card} ${props?.type}`}
    >
      <Image width={252} height={352} src={props?.imageLink} alt="Pokemon" />
      <div className={styles.infos}>
        <div className={styles.infoSection}>
          <p>Subtipos:</p>
          {props.subTypes?.map((subType: string) => (
            <span key={subType}>- {subType}</span>
          ))}
        </div>

        <div className={styles.infoSection}>
          <p>Fraquezas:</p>
          {props.weaknesses?.map((weaknesses, index: number) => (
            <span key={index}>- {weaknesses?.type}</span>
          ))}
        </div>

        <div className={styles.infoSection}>
          <p>Ataques:</p>
          {props.attacks?.map((attacks, index: number) => (
            <span key={index}>- {attacks?.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
