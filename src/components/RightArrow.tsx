import React from 'react';
import BubbleLabel from './BubbleLabel'
import { ArrowInterface } from './ArrowInterface'

export default function RightArrow({order}: ArrowInterface) {
  return (
    <div>
      <div className="flex items-center">
        <BubbleLabel order={order}/>
        <div className="border-t-2 w-full border-gray-400"/>
        <div className={"h-0 w-0 border-y-8 border-y-transparent border-l-[14px] border-l-gray-600"}/>
      </div>
    </div>
  );
}
