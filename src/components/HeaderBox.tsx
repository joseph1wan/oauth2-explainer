import React from 'react';

export default function HeaderBox(props: { name: string }) {
  return (
    <div className="row-span-1 col-span-2 bg-teal-500">
      <h1 className="text-center">{ props.name }</h1>
    </div>
  );
}
