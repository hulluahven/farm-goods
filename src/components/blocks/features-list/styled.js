import styled from "styled-components";
import { Li, Section, Ul } from "/src/components/styled";
import Title from "/src/components/ui/title/title-single";

export const StyledFeaturesList = styled(Section)`
  position: relative;
  display: flex;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.colorWhite};
  background-size: 449px 304px;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const FeatureList = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 44px;
`;

export const FeatureItem = styled(Li)`
  text-align: left;
  overflow: hidden;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 64px;
  text-align: center;
`;
