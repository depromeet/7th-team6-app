import styled from 'styled-components';
import {WHITE, BLACK, GRAY5, GRAY6, ORANGE} from 'assets/colors';

export const Wrapper = styled.TouchableOpacity`
  height: 108px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  elevation: 10;
  background-color: ${WHITE};
  margin-bottom: 12px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 18px 16px;
  position: relative;
  margin-right: 5px;
  margin-left: 5px;
`;

export const Left = styled.View`
  margin-right: 20px;
`;

export const Circle = styled.View`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  background-color: #6a46ff;
  justify-content: center;
  align-items: center;
`;

export const CircleText = styled.Text`
  color: ${WHITE};
  font-size: 18px;
  font-weight: 500;
`;

export const CircleDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: #6a46ff;
`;

export const Right = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${BLACK};
  margin-bottom: 2px;
`;

export const Info = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  align-items: center;
`;

export const Date = styled.Text`
  font-size: 14px;
  color: ${GRAY5};
`;

export const Day = styled.Text`
  font-size: 14px;
  color: ${GRAY5};
`;

export const InfoDot = styled.View`
  width: 3px;
  height: 3px;
  border-radius: 1.5px;
  background-color: ${GRAY6};
  margin-left: 6px;
  margin-right: 6px;
`;

export const Batting = styled.View`
  flex-direction: row;
`;

export const BattingTitle = styled.Text`
  font-size: 14px;
  color: ${GRAY5};
`;

export const BattingCoin = styled.Text`
  font-size: 14px;
  color: ${ORANGE};
  font-weight: 500;
  margin-left: 5px;
`;
