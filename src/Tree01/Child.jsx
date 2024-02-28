
import { Tree01 } from "."

export default function Child({isLeftSideChild, level, childData}) {
  return (
    <div className='child'>
      <div className="bar">
        | <br />| <br />
      </div>
      <span className="flex">
        {!isLeftSideChild && <span className="arrow" >--{'>'}</span>}
        <Tree01 currentItem={childData} level={level+1} />
        {isLeftSideChild && <span className="arrow">{'<'}--</span>}
      </span>
    </div>
  )
}