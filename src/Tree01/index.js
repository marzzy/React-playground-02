import data from './mockData';
import Child from './Child';
import './tree01.css'
import { useState } from 'react';

function getInitialBackgroundColor(itemDefaultColor) {
  if (itemDefaultColor) return itemDefaultColor;
  const bgSet = ["#7CFC00", "#00FF00", "#90EE90", "#9ACD32", "#00FA9A", "#3CB371", "#8FBC8F"];
  return bgSet[Math.floor(Math.random() * (bgSet.length))];
}

export function Tree01(props) {
  const currentItem = props.currentItem || Object.entries(data)[0];
  const level = props.level || 0;
  const [itemKey, itemData] = currentItem;
  const childrenList = Object.hasOwn(itemData, 'children') ? Object.entries(itemData.children) : [];
  const [bgColor, setBgColor] = useState(() => getInitialBackgroundColor(itemData.color));

  const handleColorChange = (e) => {
    setBgColor(e.target.value)
  }

  return (
    <div className={`wrapper ${level === 0 ? "root-wrapper": ''}`} style={{background: bgColor}}>
      <section class={`children children-left children-level${level} flex`}>
      {childrenList.length > 0 && childrenList.map((childData, index) => {
        if(index%2) return (
          <Child key={childData[0]} isLeftSideChild level={level} childData={childData} />
        )
        return null
      })}
      </section>
      <header className="flex">
        <div>
          <div>
            {itemKey} - level: {level}
          </div>
          <div className="description">
            {itemData?.description}
          </div>
        </div>
      </header>
      <section class={`children children-level${level} flex`} >
      <div>
        <input type="color" name="selectedItemColor" value={bgColor} onChange={handleColorChange}/>
        <label for="selectedItemColor">Branch Color</label>
      </div>
      {childrenList.length > 0 && childrenList.map((childData, index) => {
        if(index%2) return null 
        return (
          <Child key={childData[0]} level={level} childData={childData} />
        )
      })}
      </section>
    </div>
  )
}
