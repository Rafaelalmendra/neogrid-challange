//design-system
import { Button } from "antd";

//styles
import styles from "./styles.module.less";

interface FilterButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const FilterButton = ({
  style,
  onClick,
  children,
}: FilterButtonProps) => {
  return (
    <Button className={`${styles.button}`} style={style} onClick={onClick}>
      {children}
    </Button>
  );
};
