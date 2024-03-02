
import { Tree02 } from "."

export default function Child({level, childId}) {
  return (
    <div className='child'>
      <div className="bar">
      </div>
      <span className="flex">
        <Tree02 currentItemId={childId} level={level+1} />
      </span>
    </div>
  )
}