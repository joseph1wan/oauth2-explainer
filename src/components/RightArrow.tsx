import React from 'react';
import BubbleLabel from './BubbleLabel'

export default function RightArrow(props: { order: number }) {
  return (
    <div className="flex items-center">
      <BubbleLabel order={props.order}/>
      <div className="border-t-2 w-full border-gray-400"/>
      <div className={"h-0 w-0 border-y-8 border-y-transparent border-l-[14px] border-l-gray-600"}/>
    </div>
  );
}
