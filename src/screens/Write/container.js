import React from 'react';
import {SafeAreaView} from 'react-native';
import * as images from 'assets';
import * as style from './style';

const Container = ({
  canNext,
  step,
  goPrevious,
  goNext,
  closeWrite,
  title,
  setTitle,
  category,
  amount,
  setAmount,
}) => {
  return (
    <style.Wrapper>
      <SafeAreaView />
      <style.Nav>
        {step !== 0 ? (
          <style.Back onPress={() => goPrevious()}>
            <style.BackIcon source={images.Back} />
          </style.Back>
        ) : (
          <style.Back />
        )}
        <style.Close onPress={() => closeWrite()}>
          <style.CloseText>닫기</style.CloseText>
        </style.Close>
      </style.Nav>

      <style.Header>
        <style.Title>
          {step === 0 ? '새로운 배틀 생성' : null}
          {step === 1 ? '배틀 기간' : null}
          {step === 2 ? '인증 방식' : null}
        </style.Title>

        <style.Step>
          <style.StepItem active={step === 0} />
          <style.StepItem active={step === 1} />
          <style.StepItem active={step === 2} />
        </style.Step>
      </style.Header>

      {step === 0 ? (
        <style.Section>
          <style.InputArea>
            <style.Label>제목</style.Label>

            <style.BattleTitle>
              <style.BattleTitleInput
                placeholder="배틀 제목을 적어주세요"
                placeholderTextColor="#d6d6d6"
                value={title}
                onChange={({nativeEvent: {eventCount, target, text}}) =>
                  setTitle(text)
                }
              />

              <style.BattleTitleCancel>
                <style.BattleTitleCancelIcon source={images.InputCancel} />
              </style.BattleTitleCancel>
            </style.BattleTitle>
          </style.InputArea>

          <style.InputArea>
            <style.Label>카테고리</style.Label>

            <style.Category
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[...Array(15).keys()]}
              keyExtractor={(_, index) => `${index}`}
              renderItem={() => (
                <style.Tag>
                  <style.TagText>관계</style.TagText>
                </style.Tag>
              )}
            />
          </style.InputArea>

          <style.InputArea>
            <style.Label>금액</style.Label>

            <style.Amount>
              <style.AmountInput
                placeholder="배팅 금액"
                placeholderTextColor="#d6d6d6"
                keyboardType="number-pad"
                value={`${amount}`}
                onChange={({nativeEvent: {eventCount, target, text}}) =>
                  setAmount(text)
                }
              />
              <style.AmountLabel>원</style.AmountLabel>
            </style.Amount>
          </style.InputArea>

          <style.InputArea>
            <style.Label>배틀인원</style.Label>

            <style.Team
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[...Array(4).keys()]}
              keyExtractor={(_, index) => `${index}`}
              renderItem={() => (
                <style.Tag>
                  <style.TagText>1:1</style.TagText>
                </style.Tag>
              )}
            />
          </style.InputArea>
        </style.Section>
      ) : null}

      <style.Next
        active={canNext}
        onPress={() => (canNext ? goNext(step) : null)}>
        <style.NextText active={canNext}>
          {step < 2 ? '다음' : '확인'}
        </style.NextText>
        <SafeAreaView />
      </style.Next>
    </style.Wrapper>
  );
};

export default Container;
