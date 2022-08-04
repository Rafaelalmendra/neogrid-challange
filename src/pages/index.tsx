import type { NextPage } from "next";

//components
import { LayoutPage } from "components/LayoutPage";

//styles
import styles from "styles/pages/home.module.less";

const Home: NextPage = () => {
  return (
    <LayoutPage>
      <div className={styles.container}>
        <p>Hello World</p>
      </div>
    </LayoutPage>
  );
};

export default Home;
