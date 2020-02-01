import React, {useState} from 'react';
import {useNavigation} from 'react-navigation-hooks';
import Container from './container';

const Detail = () => {
  const {goBack} = useNavigation();
  const [tags, setTags] = useState(['공부']);

  return (
    <Container
      goBack={goBack}
      tags={tags}
    />
  );
};

export default Detail;
