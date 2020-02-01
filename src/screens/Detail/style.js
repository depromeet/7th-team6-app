import styled from 'styled-components';
import {GRAY1} from 'assets/colors';

export const Wrapper = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex: 1;
`;

export const SafeAreaView = styled.SafeAreaView`
  background-color: ${GRAY1};
`;

export const Nav = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 45px;
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

export const Share = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;

export const ShareIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Header = styled.View`
  width: 100%;
  height: 160px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Tag = styled.View`
  flex-direction: row;
`;

export const TagItem = styled.View`
  border-radius: 11px;
  background-color: #e5e5e5;
  padding: 4px 10px;
`;

export const TagItemText = styled.Text`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #3d3d3d;
`;

export const Title = styled.Text`
  margin-top: 8px;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #0a0a0a;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  width: 100%;
  flex: 1;
  margin-top: 25px;
`;

export const HeaderColumn = styled.View`
  flex: 1;
`;

export const HeaderColumnTitle = styled.Text`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: #9d9d9d;
  margin-bottom: 5px;
`;

export const HeaderColumnText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #0a0a0a;
`;

export const Content = styled.View`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  background-color: #fff;
  width: 100%;
  flex: 1;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  shadow-color: ${GRAY1};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.05;
  shadow-radius: 1px;
  elevation: 1;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: #6a46ff;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #ffffff;
`;
