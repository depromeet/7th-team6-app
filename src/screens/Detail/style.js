import styled from 'styled-components';
import {GRAY1, BLACK, WHITE} from 'assets/colors';

export const Wrapper = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex: 1;
  position: relative;
`;

export const Nav = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Back = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;

export const BackIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Share = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;

export const ShareIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Header = styled.View`
  width: 100%;
  height: 160px;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Tag = styled.View`
  flex-direction: row;
`;

export const TagItem = styled.View`
  border-radius: 11px;
  background-color: #e5e5e5;
  padding: 4px 10px;
`;

export const TagItemText = styled.Text`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #3d3d3d;
`;

export const Title = styled.Text`
  margin-top: 8px;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #0a0a0a;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  width: 100%;
  flex: 1;
  margin-top: 25px;
`;

export const HeaderColumn = styled.View`
  flex: 1;
`;

export const HeaderColumnTitle = styled.Text`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: #9d9d9d;
  margin-bottom: 5px;
`;

export const HeaderColumnText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #0a0a0a;
`;

export const Content = styled.ScrollView`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  background-color: #fff;
  width: 100%;
  flex: 1;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  shadow-color: ${GRAY1};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.05;
  shadow-radius: 1px;
  elevation: 1;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: #6a46ff;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #ffffff;
`;

export const Section = styled.View`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 16px;
  padding-left: 16px;
  border-radius: 8px;
  shadow-color: ${BLACK};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
  background: ${WHITE};
`;

export const ParticipantSection = styled(Section)`
  margin-bottom: 12px;
`;

export const SectionTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: #535353;
  margin-bottom: 12px;
`;

export const Participants = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Organizer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  height: 44px;
`;

export const OrganizerProfile = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 16px;
  background-color: #ebebeb;
  margin-right: 10px;
`;

export const OrganizerInfo = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const OrganizerName = styled.Text`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #0a0a0a;
`;

export const OrganizerMajor = styled.Text`
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  letter-spacing: -0.39px;
  text-align: left;
  color: #757575;
`;

export const OtherParticipants = styled.TouchableOpacity`
  border: solid 1px #0a0a0a;
  background-color: ${WHITE};
  border-radius: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 11px;
  padding-left: 11px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OtherParticipantsIcon = styled.Image`
  width: 22px;
  height: 22px;
  margin-left: -5px;
  margin-top: -2px;
`;

export const OtherParticipantsText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #0a0a0a;
`;

export const AmountSection = styled(Section)`
  margin-bottom: 12px;
`;

export const Amount = styled.Text`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #0a0a0a;
  margin-top: -2px;
`;

export const CertificateSection = styled(Section)`
  flex-direction: column;
  justify-content: flex-start;
`;

export const CertificateInfo = styled.View`
  flex-direction: row;
`;

export const CertificateExample = styled.Image`
  width: 120px;
  height: 120px;
  margin-right: 16px;
`;

export const CertificateContent = styled.View``;

export const CertificateTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #000000;
`;

export const CertificateTitleBold = styled(CertificateTitle)`
  color: #6a46ff;
`;

export const CertificateTimeList = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CertificateTime = styled.View`
  border-radius: 14px;
  background-color: #f1effd;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
  padding-left: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CertificateIcon = styled.Image`
  width: 12px;
  height: 12px;
  margin-right: 4px;
`;

export const CertificateTimeText = styled.Text`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #757575;
`;

export const CertificateDescription = styled.Text`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.48px;
  text-align: left;
  color: #0a0a0a;
  margin-top: -5px;
  margin-bottom: -5px;
`;

export const CertificateDivider = styled.View`
  width: 100%;
  height: 1px;
  border-top-color: #e5e5e5;
  border-width: 1px;
  border-radius: 1px;
`;

export const WarningTitle = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 6px;
`;

export const WarningIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 4px;
  margin-top: -3px;
`;

export const WarningTitleText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: #3d3d3d;
`;

export const WarningDescription = styled.Text`
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  line-height: 21px;
  letter-spacing: -0.39px;
  text-align: left;
  color: #757575;
`;

export const Background = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const BackgroundContainer = styled.View`
  position: relative;
  width: 100%;
  flex: 1;
  display: ${props => (props.active ? 'flex' : 'none')};
  background-color: ${BLACK};
  opacity: 0.3;
`;
