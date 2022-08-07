import Image from "next/image";

//types
import { pokemonDataProps } from "types";

//styles
import styles from "./styles.module.less";

interface CardDetailsModalProps {
  data: pokemonDataProps;
}

export const CardDetailsModal = ({ data }: CardDetailsModalProps) => {
  return (
    <div className={styles.containerDetails}>
      <div className={styles.imageContainer}>
        <Image
          src={data?.images?.large}
          alt={`Image for ${data?.name}`}
          width={300}
          height={426}
        />
      </div>

      <div className={styles.infosContainer}>
        <p className={styles.name}>
          Name: <strong>{data?.name}</strong>
        </p>

        {data?.attacks?.map((attack, index: number) => (
          <div key={index} className={styles.attacksContainer}>
            <p>Attack {index + 1}:</p>
            <span>Name: {attack?.name}</span>
            <span>Description: {attack?.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
