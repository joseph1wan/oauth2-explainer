import React from 'react';

export default function BubbleLabel(props: { order: number }) {
  return (
    <div className="h-8 w-8 border-gray-400 bg-blue-500 flex justify-center items-center rounded-full">{ props.order }</div>
  );
}
