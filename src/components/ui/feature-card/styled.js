import styled from "styled-components";
import { Image, P } from "/src/components/styled";

export const StyledFeatureCard = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
  box-sizing: border-box;
`;
export const Figure = styled.figure`
  position: relative;
  margin: 0;
  display: flex;
  column-gap: 21px;
`;
export const StyledImage = styled(Image)`
  width: 56px;
  height: 56px;
  background-repeat: no-repeat;
`;
export const Info = styled.div`
  text-align: left;
`;
export const Type = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorBackgroundNeg
      : props.theme.colorBackgroundPos};
`;

export const Text = styled(P)`
  text-align: left;
`;
