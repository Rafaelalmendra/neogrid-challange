//design-system
import { Button } from "antd";

//styles
import styles from "./styles.module.less";

interface FilterButtonProps {
  children: React.ReactNode;
}

export const FilterButton = ({ children }: FilterButtonProps) => {
  return <Button className={styles.button}>{children}</Button>;
};
