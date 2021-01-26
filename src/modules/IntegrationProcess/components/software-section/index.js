import React, { useState } from 'react';
import Item from './item/index';
import { integrationItems } from '../../../../utils/constants';
const SoftwareSection = (props) => {
  const [items, setItems] = useState(integrationItems);
  const { yPosition, screenWidth } = props;

  const onClickItem = ({ text, description, type }) => {
    const itemIndex = items.findIndex((item) => item.text === text);
    if (type === 'open') {
      setItems([
        ...items.slice(0, itemIndex).map((item) => {
          return {
            ...item,
            isActive: false
          };
        }),
        { text, isActive: !items[itemIndex].isActive, description },
        ...items.slice(itemIndex + 1).map((item) => {
          return {
            ...item,
            isActive: false
          };
        })
      ]);
    } else {
      setItems([
        ...items.slice(0, itemIndex),
        { text, isActive: false, description },
        ...items.slice(itemIndex + 1)
      ]);
    }
  };

  return (
    <div className='section software-section'>
      <img className='gear' id='gear258' alt='Gear' src='/images/256Gear.png' />
      <div className='gears'>
        <img
          className='gear'
          id='gear258Small'
          alt='Gear'
          src='/images/256Gear.png'
        />
        <img
          className='gear'
          id='gear128'
          alt='Gears'
          src='/images/128Gear.png'
        />
      </div>
      <h2 className='section-title'>2. Software Features</h2>
      <p className='section-informer'>
        Once the 3d model is uploaded or completed, we start integrating it with
        our living simulation software. The following features will be made
        available:
      </p>
      <div className='content'>
        {items.map((item, index) => {
          return (
            <Item
              animation={
                screenWidth <= 425
                  ? yPosition > 1300
                    ? `appear-int-item-${index}`
                    : 'hide-item'
                  : yPosition > 900
                  ? `appear-int-item-${index}`
                  : 'hide-item'
              }
              screenWidth={screenWidth}
              onClickItem={onClickItem}
              {...item}
              key={index}
              className='item-with-margin'
            />
          );
        })}
      </div>
    </div>
  );
};

export default SoftwareSection;
