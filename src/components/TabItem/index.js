import React, {useState, useEffect} from 'react';
import * as images from 'assets';
import * as style from './style';

const TabItem = ({routeName, onPress, focused}) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    setIcon(images[`Tab${routeName}${focused ? 'Active' : ''}`]);
  }, [routeName, focused]);

  return (
    <style.Item onPress={onPress}>
      <style.Icon resizeMode="contain" source={icon} />
    </style.Item>
  );
};

export default TabItem;
