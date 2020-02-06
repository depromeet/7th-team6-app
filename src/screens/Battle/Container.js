import React from 'react';
import {SafeAreaView} from 'react-native';
import {BattleItem} from 'components';
import * as images from 'assets';
import * as style from './style';

const Container = ({
  createBattle,
}) => (
  <style.Wrapper>
    <SafeAreaView />
    <style.Search>
      <style.SearchInput />
      <style.SearchIcon source={images.Search} />
    </style.Search>

    <style.Header>
      <style.Title>기다리는 배틀 리스트</style.Title>
      <style.Filter>
        <style.FilterIcon source={images.Filter} />
      </style.Filter>
    </style.Header>

    <style.List
      showsVerticalScrollIndicator={false}
      data={[...Array(15).keys()]}
      keyExtractor={(_, index) => `${index}`}
      renderItem={() => (
        <BattleItem />
      )}
    />

    <style.Create onPress={() => createBattle()}>
      
    </style.Create>
  </style.Wrapper>
);

export default Container;
