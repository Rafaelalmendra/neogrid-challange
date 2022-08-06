import React, { useRef } from "react";

//design-system
import { Carousel } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

//styles
import styles from "./styles.module.less";

interface CarouselCardsProps {
  children: React.ReactNode;
}

export const CarouselCards = ({ children }: CarouselCardsProps) => {
  const slider = useRef<any>(null);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.arrowLeft} onClick={() => slider?.current?.next()}>
        <CaretLeftOutlined />
      </div>
      <div
        className={styles.arrowRight}
        onClick={() => slider?.current?.next()}
      >
        <CaretRightOutlined />
      </div>

      <Carousel
        ref={slider}
        autoplay
        dots={false}
        centerMode
        centerPadding="58px"
        style={{ marginTop: "2rem" }}
      >
        {children}
      </Carousel>
    </div>
  );
};
