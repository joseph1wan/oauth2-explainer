import React from 'react';
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import DoubleArrow from './DoubleArrow'

interface StepInterface {
  order: number,
  colStart: number,
  colSpan: number,
  arrow: "right" | "left" | "both" ,
  label: string
}

export default function Step({order, colStart, colSpan, arrow, label}: StepInterface) {
  const sizes: { [key: number]: string } = {
    1: 'col-span-2',
    2: 'col-span-4',
    3: 'col-span-6',
  }

  const cols: { [key: number]: string } = {
    1: 'col-start-2',
    2: 'col-start-4',
    3: 'col-start-6',
  }
  const rows: { [key: number]: string } = {
    1: 'row-start-1',
    2: 'row-start-2',
    3: 'row-start-3',
    4: 'row-start-4',
    5: 'row-start-5',
    6: 'row-start-6',
    7: 'row-start-7',
    8: 'row-start-8',
    9: 'row-start-9',
    10: 'row-start-10',
    11: 'row-start-11',
  }
  return (
    <div className={`${sizes[colSpan]} ${rows[order + 1]} ${cols[colStart]}`}>
      <div className="text-white text-xs">{label}</div>
      { arrow === "right" && <RightArrow order={order} /> }
      { arrow === "both" && <DoubleArrow order={order} /> }
      { arrow === "left" && <LeftArrow order={order} /> }
    </div>
  )
}
