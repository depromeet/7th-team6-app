import React from 'react';
import {useNavigation} from 'react-navigation-hooks';

import * as style from './style';

const BattleItem = ({amount = 15000}) => {
  const {navigate} = useNavigation();

  return (
    <style.Wrapper onPress={() => navigate('Detail')}>
      <style.Left>
        <style.Circle>
          <style.CircleText>{'3:3'}</style.CircleText>
          <style.CircleDot />
        </style.Circle>
      </style.Left>

      <style.Right>
        <style.Title>{'중도에서 하루 2시간 공부 ✍️'}</style.Title>
        <style.Info>
          <style.Date>{'2020.01.05-01.10'}</style.Date>
          <style.InfoDot />
          <style.Day>{'월,수,금'}</style.Day>
        </style.Info>
        <style.Batting>
          <style.BattingTitle>{'배팅금액:'}</style.BattingTitle>
          <style.BattingCoin>
            {`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}
          </style.BattingCoin>
        </style.Batting>
      </style.Right>
    </style.Wrapper>
  );
};

export default BattleItem;
