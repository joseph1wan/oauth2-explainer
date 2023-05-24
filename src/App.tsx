import React from 'react';
import './App.css';
import HeaderBox from './components/HeaderBox'
import Step from './components/Step'

function App() {
  return (
    <div className="App">
      <div className="flex flex-col p-24">
        <div className="container m-auto grid grid-cols-8 gap-4">
          <HeaderBox name="USER" />
          <HeaderBox name="WEB APPLICATION" />
          <HeaderBox name="AUTHORIZATION LAYER" />
          <HeaderBox name="YOUR API" />
          <div className={"row-span-1 row-start-2 col-start-2 col-span-2"}>
            <Step
              order={1}
              arrow="right"
            />
          </div>
          <div className={"row-span-1 row-start-3 col-start-4 col-span-2"}>
            <Step
              order={2}
              arrow="right"
            />
          </div>
          <div className={"row-span-1 row-start-4 col-start-2 col-span-4"}>
            <Step
              order={3}
              arrow="left"
            />
          </div>
          <div className={"row-span-1 row-start-5 col-start-2 col-span-4"}>
            <Step
              order={4}
              arrow="right"
            />
          </div>
          <div className={"row-span-1 row-start-6 col-start-4 col-span-2"}>
            <Step
              order={5}
              arrow="left"
            />
          </div>
          <div className={"row-span-1 row-start-7 col-start-4 col-span-2"}>
            <Step
              order={6}
              arrow="right"
            />
          </div>
          <div className={"row-span-1 row-start-8 col-start-4 col-span-2"}>
            <Step
              order={7}
              arrow="left"
            />
          </div>
          <div className={"row-span-1 row-start-9 col-start-4 col-span-2"}>
            <Step
              order={8}
              arrow="left"
            />
          </div>
          <div className={"row-span-1 row-start-10 col-start-4 col-span-4"}>
            <Step
              order={9}
              arrow="right"
            />
          </div>
          <div className={"row-span-1 row-start-11 col-start-4 col-span-4"}>
            <Step
              order={10}
              arrow="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
