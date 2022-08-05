//design-system
import { Button } from "antd";

//styles
import styles from "./styles.module.less";

interface FilterButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const FilterButton = ({ children, onClick }: FilterButtonProps) => {
  return (
    <Button className={styles.button} onClick={onClick}>
      {children}
    </Button>
  );
};
