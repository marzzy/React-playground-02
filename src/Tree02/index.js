import Child from './Child';
import data from './mockData';
import './tree02.css'
import { useState } from 'react';

function getInitialBackgroundColor(itemDefaultColor) {
  if (itemDefaultColor) return itemDefaultColor;
  const bgSet = ["#7CFC00", "#00FF00", "#90EE90", "#9ACD32", "#00FA9A", "#3CB371", "#8FBC8F"];
  return bgSet[Math.floor(Math.random() * (bgSet.length))];
}

export function Tree02(props) {
  const currentItemId = props.currentItemId || data.rootId;
  const currentItem = data.entities[currentItemId]
  const [bgColor, setBgColor] = useState(() => getInitialBackgroundColor(currentItem.color));
  const level = props.level || 0;

  const handleColorChange = (e) => {
    setBgColor(e.target.value)
  }

  return (
    <div className={`wrapper ${level === 0 ? "root-wrapper": ''}`} style={{background: bgColor}}>
      <section className={`children `}>
      {currentItem.childrenIds && currentItem.childrenIds.map((childId, index) => {
        if(index%2) return (
          <div key={childId}>
            <Child childId={childId} level={level} />
          </div>
        )
        return null
      })}
      </section>
      <header className="flex">
        <div>
          <div>
            {currentItem.id} - level: {level}
          </div>
          <div className="description">
            {currentItem?.description}
          </div>
        </div>
        <div>
          <input type="color" name="selectedItemColor" value={bgColor} onChange={handleColorChange}/>
          <label htmlFor="selectedItemColor">Branch Color</label>
        </div>
      </header>
      <section className={`children `} >
      {currentItem.childrenIds && currentItem.childrenIds.map((childId, index) => {
        if(index%2) return null 
        return (
          <div key={childId}>
            <Child childId={childId} level={level} />
          </div>
        )
      })}
      </section>
    </div>
  )
}
