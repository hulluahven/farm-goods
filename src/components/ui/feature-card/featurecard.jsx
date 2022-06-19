import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title-single";
import {
  Text,
  Figure,
  StyledImage,
  Info,
  Type,
  StyledFeatureCard
} from "./styled";

function FeatureCard({ title, type, isNegative, about, image }) {
  return (
    <StyledFeatureCard isNegative={isNegative}>
      <Figure>
        <StyledImage src={image} width={56} height={56} alt={title} />
        <Info>
          <Type isNegative={isNegative}>{type}</Type>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </Info>
      </Figure>
      <Text
        className="feature-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </StyledFeatureCard>
  );
}

export default FeatureCard;
