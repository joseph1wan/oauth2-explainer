import React from 'react';
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import DoubleArrow from './DoubleArrow'

export interface StepInterface {
  order: number,
  arrow: "right" | "left" | "both" 
}
export default function Step({order, arrow}:StepInterface) {
  return (
    <div>
      { arrow === "right" && <RightArrow order={order} /> }
      { arrow === "both" && <DoubleArrow order={order} /> }
      { arrow === "left" && <LeftArrow order={order} /> }
    </div>
  )
}
