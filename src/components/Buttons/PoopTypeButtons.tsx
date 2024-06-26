import { styled } from "styled-components";
import { Text } from "../common";
import { theme } from "../../styles";
import React from "react";
import {
  PoopTypes,
  PoopTypesInterface,
} from "../../assets/info/ScaleRecordInfo";

export const PoopTypeButtons = ({
  scaleDescription,
  setScaleDescription,
}: {
  scaleDescription: string;
  setScaleDescription: any;
}) => {
  return (
    <ButtonsContainer>
      {PoopTypes.map((type: PoopTypesInterface) => (
        <Container
          enable={scaleDescription === type.description ? true : false}
          onClick={() => setScaleDescription(type.description)}
        >
          {React.cloneElement(type.icon, {
            enable: scaleDescription === type.description,
          })}
          <Text
            $Typo="Body2"
            $paletteColor={
              scaleDescription === type.description ? "Main_orange" : "Gray5"
            }
          >
            {type.description}
          </Text>
        </Container>
      ))}
    </ButtonsContainer>
  );
};

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Container = styled.div<{ enable: boolean }>`
  width: 76px;
  height: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ enable }) =>
    enable ? theme.palette.Sub4_orange : theme.palette.Gray2};
  border-radius: 8px;
  border: 1px solid
    ${({ enable }) =>
      enable ? theme.palette.Main_orange : theme.palette.Gray4};
  gap: 7px;
`;
