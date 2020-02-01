import styled from 'styled-components';
import {GRAY1, GRAY2, GRAY3, GRAY4, WHITE, BLACK} from 'assets/colors';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${GRAY1};
  flex-direction: column;
`;

export const Header = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  line-height: 34px;
  margin-top: 45px;
`;

export const User = styled.View`
  background-color: ${WHITE};
  height: 55px;
  margin-top: 25px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin-right: 8px;
`;

export const Username = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;

export const Coin = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CoinDivider = styled.View`
  margin-left: 8px;
  margin-right: 8px;
  background-color: ${GRAY3};
  width: 1px;
  height: 15px;
`;

export const CoinText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${GRAY2};
`;

export const Tab = styled.View`
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
`;

export const TabItem = styled.TouchableOpacity`
  padding: ${props => (props.first ? '15px 12px 15px 0' : '15px 12px')};
`;

export const TabItemText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.active ? BLACK : GRAY4)};
`;

export const Section = styled.View`
  margin-top: 20px;
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  background-color: ${WHITE};
  flex-direction: column;
  border-top-left-radius: 16;
  border-top-right-radius: 16;
  shadow-color: ${GRAY1};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.05;
  shadow-radius: 1px;
  elevation: 1;
`;

export const SectionTitle = styled.Text`
  color: ${GRAY2};
  font-size: 14px;
  margin-bottom: 11px;
`;

export const List = styled.FlatList`
  flex: 1;
  padding-top: 5px;
`;

export const columnWrapper = {
  marginBottom: '12px',
};
