import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title-single";
import { Text, StyledSection, TextWrapper } from "./styled";

function About() {
  return (
    <StyledSection>
      <TextWrapper>
        <Title size={TitleSize.BIG}>
          {" "}
          Магазин фермерских продуктов с доставкой
        </Title>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставяем продукты максимально свежими
        </Text>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
