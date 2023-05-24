import React from 'react';
import './App.css';
import HeaderBox from './components/HeaderBox'
import Step from './components/Step'

function App() {
  return (
    <div className="App">
      <div className="flex flex-col p-24">
        <div className="container m-auto grid grid-cols-8 grid-rows-10 gap-4">
          <HeaderBox name="USER" />
          <HeaderBox name="WEB APPLICATION" />
          <HeaderBox name="AUTHORIZATION LAYER" />
          <HeaderBox name="YOUR API" />
          <Step
            col_start={2}
            col_span={2}
            order={1}
            arrow="right"
          />
          <Step
            col_start={4}
            col_span={2}
            order={2}
            arrow="right"
          />
          <Step
            col_start={2}
            col_span={4}
            order={3}
            arrow="left"
          />
          <Step
            col_start={2}
            col_span={4}
            order={4}
            arrow="right"
          />
          <Step
            col_start={4}
            col_span={2}
            order={5}
            arrow="left"
          />
          <Step
            col_start={4}
            col_span={2}
            order={6}
            arrow="right"
          />
          <Step
            col_start={4}
            col_span={2}
            order={7}
            arrow="left"
          />
          <Step
            col_start={4}
            col_span={2}
            order={8}
            arrow="left"
          />
          <Step
            col_start={4}
            col_span={4}
            order={9}
            arrow="right"
          />
          <Step
            col_start={4}
            col_span={4}
            order={10}
            arrow="left"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
