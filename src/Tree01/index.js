import data from './mockData';

export function Tree01(props) {
  const currentItem = props.currentItem || Object.entries(data)[0];
  const level = props.level || 0;
  const [itemKey, itemData] = currentItem;
  const childrenList = Object.hasOwn(itemData, 'children') ? Object.entries(itemData.children) : [];

  return (
    <div className={`wrapper wrapper-level${level}`}>
      <header>
        {itemKey} - level: {level}
        <br />
        <span style={{maxWidth: '200px'}}>
          {itemData?.description}
        </span>
        <br />
      </header>
      <section class={`children children-level${level}`} style={{display: "flex"}}>
      {childrenList.length > 0 && childrenList.map((childData) => (
        <div style={{marginLeft: "30px"}} key={childData[0]} className='child'>
          | <br />| <br />
          <span style={{display: "flex"}}>
            <span style={{textWrap: "nowrap"}}>--&gt;</span>
            <Tree01 currentItem={childData} level={level+1} />
          </span>
        </div>
      ))}
      </section>
    </div>
  )
}
