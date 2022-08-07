//design-system
import { Button } from "antd";

//styles
import styles from "./styles.module.less";

interface FilterButtonProps {
  bgColor?: string;
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const FilterButton = ({
  bgColor,
  active,
  onClick,
  style,
  children,
}: FilterButtonProps) => {
  return (
    <Button className={`${styles.button}`} style={style} onClick={onClick}>
      {children}
    </Button>
  );
};
