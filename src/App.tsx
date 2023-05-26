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
              colStart={1}
              colSpan={1}
              order={1}
              arrow="right"
              label="Click login link"
            />
            <Step
              colStart={2}
              colSpan={1}
              order={2}
              arrow="right"
              label="Authorization Code Request to /authorize"
            />
            <Step
              colStart={1}
              colSpan={2}
              order={3}
              arrow="left"
              label="Redirect to login/authorization prompt"
            />
            <Step
              colStart={1}
              colSpan={2}
              order={4}
              arrow="right"
              label="Authenticate and Consent"
            />
            <Step
              colStart={2}
              colSpan={1}
              order={5}
              arrow="left"
              label="Authorization Code"
            />
            <Step
              colStart={2}
              colSpan={1}
              order={6}
              arrow="right"
              label="Authorization Code + Client ID + Client Secret to /oauth/token"
            />
            <Step
              colStart={2}
              colSpan={1}
              order={7}
              arrow="left"
              label="Validate Authorization Code + Client ID + Client Secret"
            />
            <Step
              colStart={2}
              colSpan={1}
              order={8}
              arrow="left"
              label="ID Token and Access Token"
            />
            <Step
              colStart={2}
              colSpan={2}
              order={9}
              arrow="right"
              label="Request user data with Access Token"
            />
            <Step
              colStart={2}
              colSpan={2}
              order={10}
              arrow="left"
              label="Response"
            />
        </div>
      </div>
    </div>
  );
}

export default App;
