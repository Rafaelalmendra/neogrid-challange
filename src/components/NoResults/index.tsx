import Image from "next/image";

//styles
import styles from "./styles.module.less";

export const NoResults = () => {
  return (
    <div className={styles.noResultsContainer}>
      <Image
        src="/images/no-results.png"
        alt="Imagem para quando não existe um resultado para o filtro"
        width={179}
        height={142}
      />
      <p>No results for this filter</p>
    </div>
  );
};
