import React from 'react';
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import DoubleArrow from './DoubleArrow'

export interface StepInterface {
  col_start: number,
  col_span: number,
  order: number,
  arrow: "right" | "left" | "both" 
}
export default function Step({col_start, col_span, order, arrow}:StepInterface) {
  return (
    <div className={`row-span-1 row-start-${order + 1} col-start-${col_start} col-span-${col_span}`}>
      { arrow === "right" && <RightArrow order={order} /> }
      { arrow === "both" && <DoubleArrow order={order} /> }
      { arrow === "left" && <LeftArrow order={order} /> }
    </div>
  )
}
