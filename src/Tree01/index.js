import data from './mockData';

export function Tree01(props) {
  const currentItem = props.currentItem || Object.entries(data)[0];
  const level = props.level || 0;
  const [itemKey, itemData] = currentItem;
  const childrenList = Object.hasOwn(itemData, 'children') ? Object.entries(itemData.children) : [];

  return (
    <div className='root'>
      <section>
        {itemKey} - level: {level}
        <br />
        {itemData?.description}
        <br />
      </section>
      {childrenList.length > 0 && childrenList.map((childData) => (
        <div style={{marginLeft: "30px"}} key={childData[0]} className='child'>
          <div>==&gt; </div>
          <Tree01 currentItem={childData} level={level+1} />
        </div>
      ))}
    </div>
  )
}
