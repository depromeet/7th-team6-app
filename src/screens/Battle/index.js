import React from 'react';
import {useNavigation} from 'react-navigation-hooks';
import Container from './container';

const Battle = () => {
  const {navigate} = useNavigation();

  const createBattle = () => {
    navigate('Write');
  };

  return (
    <Container createBattle={createBattle} />
  );
};

export default Battle;
