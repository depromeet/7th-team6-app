import React, {useState, useRef} from 'react';
import {useNavigation} from 'react-navigation-hooks';
import Container from './container';

const Detail = () => {
  const {goBack} = useNavigation();
  const [tags, setTags] = useState(['공부']);
  const [showSheet, setSheet] = useState(false);

  const participantList = useRef(null);

  const showParticipant = () => {
    setSheet(true);
    participantList.current.snapTo(1);
  };

  return (
    <Container
      goBack={goBack}
      tags={tags}
      showParticipant={showParticipant}
      setSheet={setSheet}
      showSheet={showSheet}
      participantList={participantList}
    />
  );
};

export default Detail;
