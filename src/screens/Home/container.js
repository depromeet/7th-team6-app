import React from 'react';
import * as images from 'assets';
import {BattleItem} from 'components';
import * as style from './style';

const Container = ({
  coin,
  selectTab,
  title,
  onChangeType,
}) => (
  <style.Wrapper>
    <style.Header>
      <style.Title>
        오늘도{'\n'}
        습관을 키워볼까요?
      </style.Title>

      <style.User>
        <style.Profile>
          <style.ProfileImage source={images.ProfileEmpty} resizeMode="contain" />
          <style.Username>{'디프만'}님</style.Username>
        </style.Profile>

        <style.Coin>
          <style.CoinText>배틀코인</style.CoinText>
          <style.CoinDivider />
          <style.CoinText>{`${coin
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</style.CoinText>
        </style.Coin>
      </style.User>

      <style.Tab>
        <style.TabItem first onPress={() => onChangeType('PROGRESS')}>
          <style.TabItemText active={selectTab === 'PROGRESS'}>
            진행
          </style.TabItemText>
        </style.TabItem>
        <style.TabItem onPress={() => onChangeType('READY')}>
          <style.TabItemText active={selectTab === 'READY'}>
            대기
          </style.TabItemText>
        </style.TabItem>
        <style.TabItem onPress={() => onChangeType('FINISH')}>
          <style.TabItemText active={selectTab === 'FINISH'}>
            완료
          </style.TabItemText>
        </style.TabItem>
      </style.Tab>
    </style.Header>

    <style.Section>
      <style.SectionTitle>{title}</style.SectionTitle>
      <style.List
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5]}
        renderItem={(item, index) => <BattleItem />}
      />
    </style.Section>
  </style.Wrapper>
);

export default Container;
