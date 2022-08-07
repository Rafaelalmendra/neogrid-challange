import { useState } from "react";
import Image from "next/image";
import useMedia from "use-media";

//design-system
import { Modal } from "antd";

//components
import { CardDetailsModal } from "../CardDetailsModal";

//styles
import styles from "./styles.module.less";

interface CardPokemonProps {
  data: any;
}

export const CardPokemon = ({ data }: CardPokemonProps) => {
  const isMobile = useMedia({ maxWidth: "768px" });
  const [showModalDetails, setShowModalDetails] = useState<boolean>(false);

  return (
    <>
      <div
        key={data?.id}
        onClick={() => setShowModalDetails(true)}
        className={`${styles?.card} ${data?.types[0]}`}
      >
        <Image
          width={252}
          height={352}
          src={data?.images?.large}
          alt="Pokemon"
        />

        <div className={styles.infos}>
          <div className={styles.infoSection}>
            <p>Subtypes:</p>
            {data?.subtypes?.map((subtype: string) => (
              <span key={subtype}>- {subtype}</span>
            ))}
          </div>

          <div className={styles.infoSection}>
            <p>Weaknesses:</p>
            {data?.weaknesses?.map((weaknesses: any, index: number) => (
              <span key={index}>- {weaknesses?.type}</span>
            ))}
          </div>

          <div className={styles.infoSection}>
            <p>Attacks:</p>
            {data?.attacks?.map((attacks: any, index: number) => (
              <span key={index}>- {attacks?.name}</span>
            ))}
          </div>
        </div>
      </div>

      <Modal
        centered
        width={isMobile ? "100%" : "900px"}
        footer={null}
        cancelText="Fechar"
        title={`${data?.name} details`}
        visible={showModalDetails}
        onCancel={() => setShowModalDetails(false)}
      >
        <CardDetailsModal data={data} />
      </Modal>
    </>
  );
};
