import styles from "./styles.module.less";

interface TotalCardsProps {
  total: number;
}

export const TotalCards = ({ total }: TotalCardsProps) => {
  return (
    <p className={styles.totalText}>
      Total - <strong>{total}</strong>
    </p>
  );
};
