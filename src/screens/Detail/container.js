import React from 'react';
import {SafeAreaView} from 'react-native';
import * as images from 'assets';
import * as style from './style';

const Container = ({
  goBack,
  tags = [],
}) => (
  <style.Wrapper>
    <SafeAreaView />
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
      <style.ParticipantSection>
        <style.SectionTitle>주최자</style.SectionTitle>
        <style.Participants>
          <style.Participants>
            <style.Organizer>
              <style.OrganizerProfile />
              
              <style.OrganizerInfo>
                <style.OrganizerName>유니뱃 고수</style.OrganizerName>
                <style.OrganizerMajor>컴퓨터공학과</style.OrganizerMajor>
              </style.OrganizerInfo>
            </style.Organizer>

            <style.OtherParticipants>
              <style.OtherParticipantsIcon source={images.Glove} />
              <style.OtherParticipantsText>3명</style.OtherParticipantsText>
            </style.OtherParticipants>
          </style.Participants>
        </style.Participants>
      </style.ParticipantSection>

      <style.AmountSection>
        <style.SectionTitle>배팅 금액</style.SectionTitle>
        <style.Amount>15,000원</style.Amount>
      </style.AmountSection>

      <style.CertificateSection>
        <style.SectionTitle>인증 방식</style.SectionTitle>

        <style.CertificateInfo>
          <style.CertificateExample source={images.CertificateExample} />

          <style.CertificateContent>
            <style.CertificateTitle>하루 <style.CertificateTitleBold>3번</style.CertificateTitleBold></style.CertificateTitle>

            <style.CertificateTimeList>
              {[...Array(3).keys()].map(_ => (
                <style.CertificateTime>
                  <style.CertificateIcon source={images.TimeCheck} />
                  <style.CertificateTimeText>{`오전 7:00 ~ 7:30`}</style.CertificateTimeText>
                </style.CertificateTime>
              ))}
            </style.CertificateTimeList>
          </style.CertificateContent>
        </style.CertificateInfo>

        <style.CertificateDescription>
          {`
각자 공부하고 계신 교재나 필기장을 
중도 정문 동상 앞에서 들고 찍어주세요.
          `}
        </style.CertificateDescription>

        <style.CertificateDivider
          style={{borderStyle: 'dotted', borderRadius: 1}}
        />

        <style.WarningTitle>
          <style.WarningIcon source={images.Warning} />
          <style.WarningTitleText>주의해주세요!</style.WarningTitleText>
        </style.WarningTitle>

        <style.WarningDescription>
          - 무관한 이미지로 인증 대체 시 경고가 주어집니다.{`\n`}
          - 경고 2번 누적 시 전액 회수 및 3개월간 서비스 사용이 불가합니다.
        </style.WarningDescription>
      </style.CertificateSection>

      <style.Button>
        <style.ButtonText>참가하기</style.ButtonText>
      </style.Button>
    </style.Content>
  </style.Wrapper>
);

export default Container;
