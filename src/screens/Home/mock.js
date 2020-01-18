import moment from "moment";

const Title = [
  '인문관까지 걸어가기',
  '중도에서 하루 2시간 공부 ✍️',
  '커피 먹을 돈으로 저축하기',
  '매일 아침 영양제 챙겨먹기',
];

const BattleType = ['혼자', '1:1', '2:2', '3:3', '4:4'];

const Days = ['매일', '월', '화', '수', '목', '금', '토'];

export const Battles = [...Array(Math.random() * 10).map(() => ({
  type: BattleType[Math.floor(Math.random() * BattleType.length)],
  title: Title[Math.floor(Math.random() * Title.length)],
  date: `${moment(new Date()).format("YYYY-MM-DD")}-${moment(new Date()).format("YYYY-MM-DD")}`,
}))];
