import data from './mockData';
// import './tree02.css'
import { useState } from 'react';

function getInitialBackgroundColor(itemDefaultColor) {
  if (itemDefaultColor) return itemDefaultColor;
  const bgSet = ["#7CFC00", "#00FF00", "#90EE90", "#9ACD32", "#00FA9A", "#3CB371", "#8FBC8F"];
  return bgSet[Math.floor(Math.random() * (bgSet.length))];
}

export function Tree02(props) {
  const currentItemId = props.currentItemId || data.rootId;
  const currentItem = data.entities[currentItemId]
  const [bgColor, setBgColor] = useState(() => getInitialBackgroundColor());

  const handleColorChange = (e) => {
    setBgColor(e.target.value)
  }

  return (
    <div style={{background: bgColor}}>
      <section className={`children-left`}>
      {/* children-left */}
      {currentItem.childrenIds && currentItem.childrenIds.map((childId, index) => {
        if(index%2) return (
          <div key={childId}>
            <div className='child'>
              <div className="bar">
                {/* | <br />| <br /> */}
              </div>
              <span className="flex">
                {/* {!isLeftSideChild && <span className="arrow" >--{'>'}</span>} */}
                <Tree02 currentItemId={childId} />
                {/* <span className="arrow">{'<'}--</span> */}
              </span>
            </div>
          </div>
        )
        return null
      })}
      </section>
      <header className="flex">
        <div>
          <div>
            {currentItem.id} - level: ????
          </div>
          <div className="description">
            {currentItem?.description}
          </div>
        </div>
        <div>
          <input type="color" id="selectedItemColor" value={bgColor} onChange={handleColorChange}/>
          <label for="selectedItemColor">Branch Color</label>
        </div>
      </header>
      <section className={`children-right`} >
        {/* children-right */}
      {currentItem.childrenIds && currentItem.childrenIds.map((childId, index) => {
        if(index%2) return null 
        return (
          <div key={childId}>
            <div className='child'>
              <div className="bar">
                {/* | <br />| <br /> */}
              </div>
              <span className="flex">
                {/* <span className="arrow" >--{'>'}</span> */}
                <Tree02 currentItemId={childId} />
              </span>
            </div>
          </div>
        )
      })}
      </section>
    </div>
  )
}
