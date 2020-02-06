import React from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import * as images from 'assets';
import * as style from './style';

const ParticipantList = ({sheetRef, setBackground}) => {
  const cloaseList = () => {
    sheetRef.current.snapTo(0);
  };

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[300, 0]}
      initialSnap={1}
      enabledBottomClamp
      onOpenStart={() => setBackground(true)}
      onCloseEnd={() => setBackground(false)}
      renderHeader={() => (
        <style.Header>
          <style.Title>배틀 참가자</style.Title>
          <style.Close onPress={() => cloaseList()}>
            <style.CloseIcon source={images.Close} />
          </style.Close>
        </style.Header>
      )}
      renderContent={() => (
        <style.Content>
          {[...Array(10).keys()].map((_, index) => (
            <style.Item key={index}>
              <style.Profile />
              <style.Name>유니뱃 고수</style.Name>
            </style.Item>
          ))}
        </style.Content>
      )}
    />
  );
};

export default ParticipantList;
