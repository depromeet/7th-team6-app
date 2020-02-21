import styled from 'styled-components';
import {WHITE, BLACK} from 'assets/colors';

export const Wrapper = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${WHITE};
  flex: 1;
`;

export const Search = styled.View`
  width: 100%;
  height: 40px;
  margin-top: 16px;
  flex-direction: row;
  position: relative;
`;

export const SearchInput = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  background-color: #f4f4f4;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const SearchIcon = styled.Image`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 6px;
  right: 12px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 12px;
  height: 24px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: #555555;
`;

export const Filter = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const FilterIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const List = styled.FlatList`
  flex: 1;
  padding-top: 8px;
`;

export const Create = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: #6a46ff;
  right: 20px;
  bottom: 20px;
  position: absolute;
  shadow-color: ${BLACK};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.15;
  shadow-radius: 6px;
  elevation: 2;
`;
