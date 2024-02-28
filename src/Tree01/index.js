import data from './mockData';
import Child from './Child';
import './tree01.css'

export function Tree01(props) {
  const currentItem = props.currentItem || Object.entries(data)[0];
  const level = props.level || 0;
  const [itemKey, itemData] = currentItem;
  const childrenList = Object.hasOwn(itemData, 'children') ? Object.entries(itemData.children) : [];

  return (
    <div className={`wrapper wrapper-level${level}`}>
      <section class={`children children-left children-level${level} flex`}>
      {childrenList.length > 0 && childrenList.map((childData, index) => {
        if(index%2) return (
          <Child key={childData[0]} isLeftSideChild level={level} childData={childData} />
        )
        return null
      })}
      </section>
      <header>
        {itemKey} - level: {level}
        <br />
        <span className="description">
          {itemData?.description}
        </span>
        <br />
      </header>
      <section class={`children children-level${level} flex`} >
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
