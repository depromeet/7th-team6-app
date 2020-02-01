import React from 'react';
import * as images from 'assets';
import * as style from './style';

const Container = ({
  goBack,
  tags = [],
}) => (
  <style.Wrapper>
    <style.SafeAreaView />
    <style.Nav>
      <style.Back onPress={() => goBack()}>
        <style.BackIcon source={images.Back} />
      </style.Back>
      <style.Share>
        <style.ShareIcon source={images.Share} />
      </style.Share>
    </style.Nav>

    <style.Header>
      <style.Tag>
        {tags.map((t, i) => (
          <style.TagItem>
            <style.TagItemText>{`#${t}`}</style.TagItemText>
          </style.TagItem>
        ))}
      </style.Tag>
      <style.Title>{"중도에서 하루 2시간 공부 ✍️"}</style.Title>

      <style.HeaderRow>
        <style.HeaderColumn>
          <style.HeaderColumnTitle>기간</style.HeaderColumnTitle>
          <style.HeaderColumnText>2020.01.01 - 01.15</style.HeaderColumnText>
        </style.HeaderColumn>
        <style.HeaderColumn>
          <style.HeaderColumnTitle>요일</style.HeaderColumnTitle>
          <style.HeaderColumnText>월, 수, 금</style.HeaderColumnText>
        </style.HeaderColumn>
      </style.HeaderRow>
    </style.Header>

    <style.Content>
      <style.Button>
        <style.ButtonText>참가하기</style.ButtonText>
      </style.Button>
    </style.Content>
  </style.Wrapper>
);

export default Container;
