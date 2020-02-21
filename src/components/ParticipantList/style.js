import styled from 'styled-components';
import {WHITE} from 'assets/colors';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  background-color: ${WHITE};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #0a0a0a;
`;

export const Close = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const CloseIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Content = styled.View`
  padding-right: 20px;
  padding-left: 20px;
  background-color: ${WHITE};
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`;

export const Profile = styled.Image`
  width: 44px;
  height: 44px;
  background-color: #ebebeb;
  border-radius: 16px;
  margin-right: 11px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #0a0a0a;
`;
