import React from 'react';
import BubbleLabel from './BubbleLabel'
import { ArrowInterface } from './ArrowInterface'

export default function DoubleArrow({order}: ArrowInterface) {
  return (
    <div>
      <div className="flex items-center">
        <div className={"h-0 w-0 border-y-8 border-y-transparent border-r-[14px] border-r-gray-600"}></div>
        <div className="border-t-2 w-full border-gray-400"></div>
        <BubbleLabel order={order}/>
        <div className="border-t-2 w-full border-gray-400"></div>
        <div className={"h-0 w-0 border-y-8 border-y-transparent border-l-[14px] border-l-gray-600"}></div>
      </div>
    </div>
  );
}
