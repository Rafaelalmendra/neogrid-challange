import Image from "next/image";

import styles from "./styles.module.less";

export const Loading = () => {
  return (
    <div className={styles.LoadingPokeball}>
      <Image
        src="/images/pokeball-animation.gif"
        width={100}
        height={100}
        alt="Loading animation"
        loading="eager"
      />
    </div>
  );
};
