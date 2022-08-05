//design-system
import { Button } from "antd";

//styles
import styles from "./styles.module.less";

interface FilterButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

export const FilterButton = ({
  children,
  onClick,
  active,
}: FilterButtonProps) => {
  return (
    <Button
      className={`${styles.button} ${active && styles.activeButton}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
