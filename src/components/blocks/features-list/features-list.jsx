import React from "react";
import FeatureCard from "/src/components/ui/feature-card/featurecard";
import {
  FeatureItem,
  FeatureList,
  StyledFeaturesList,
  StyledTitle
} from "./styled";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/app-route";

function FeaturesList({ features }) {
  return (
    <StyledFeaturesList>
      {features && features.length ? (
        <>
          <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
          <FeatureList $isGridList>
            {features.map((feature) => (
              <FeatureItem key={feature.id}>
                <FeatureCard {...feature} />
              </FeatureItem>
            ))}
          </FeatureList>
          <Button minWidth={260} link={AppRoute.ORDER}>
            Купить
          </Button>
        </>
      ) : null}
    </StyledFeaturesList>
  );
}

export default FeaturesList;
