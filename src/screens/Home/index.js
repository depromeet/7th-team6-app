import React, {useState, useEffect} from 'react';
import Container from './container';

const Home = () => {
  const [coin, setCoin] = useState(0);
  const [selectTab, setSelectTab] = useState('PROGRESS');
  const [title, setTitle] = useState('진행중인 배틀 리스트');
  const [data, setData] = useState([]);

  useEffect(() => {

  }, [selectTab]);

  const onChangeType = (type) => {
    setSelectTab(type);
  };

  return (
    <Container
      coin={coin}
      selectTab={selectTab}
      title={title}
      onChangeType={onChangeType}
    />
  );
};

export default Home;
