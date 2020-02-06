import styled from 'styled-components';
import {WHITE} from 'assets/colors';

export const Wrapper = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex: 1;
  position: relative;
  background-color: ${WHITE};
`;

export const Nav = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Back = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;

export const BackIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Close = styled.TouchableOpacity``;

export const CloseText = styled.Text`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #3d3d3d;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 12px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: -0.66px;
  text-align: left;
  color: #0a0a0a;
`;

export const Step = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StepItem = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${props => (props.active ? '#6a46ff' : '#f0f0f0')};
  border-radius: 4px;
  margin-left: 6px;
`;

export const Next = styled.TouchableOpacity`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  align-items: center;
  background-color: ${props => (props.active ? '#6a46ff' : '#b3b3b3')};
`;

export const NextText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.54px;
  text-align: center;
  color: #f0f0f0;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Section = styled.View`

`;

export const InputArea = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  padding-left: 20px;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: #3d3d3d;
  margin-bottom: 12px;
`;

export const BattleTitle = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 34px;
`;

export const BattleTitleInput = styled.TextInput`
  flex: 1;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  padding-bottom: 6px;
  font-size: 16px;
`;

export const BattleTitleCancel = styled.TouchableOpacity`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 20px;
  bottom: 6px;
`;

export const BattleTitleCancelIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Tag = styled.TouchableOpacity`
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 27px;
  padding-left: 27px;
  border-radius: 30px;
  background-color: #f7f7f7;
  margin-right: 10px;
`;

export const TagText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.42px;
  text-align: center;
  color: #757575;
`;

export const HorizontalSelect = styled.FlatList`
  margin-bottom: 32px;
  padding-left: 20px;
`;

export const Category = styled(HorizontalSelect)``;

export const Team = styled(HorizontalSelect)``;

export const Amount = styled.View`
  margin-bottom: 32px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`;

export const AmountInput = styled.TextInput`
  width: 180px;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  padding-bottom: 6px;
  font-size: 16px;
`;

export const AmountLabel = styled.Text`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #0a0a0a;
`;
