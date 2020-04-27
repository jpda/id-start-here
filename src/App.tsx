import "./App.css";
import React from 'react';
import { Stack, Text, Link, FontWeights, Fabric } from 'office-ui-fabric-react';
import { ReactComponent as Logo } from './img/aad.svg'
import { HashRouter as Router, Switch, Route, Link as RouterLink } from 'react-router-dom';
import SelectPicker from './components/SelectPicker';
import BoxPicker from './components/BoxPicker';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App: React.FunctionComponent = () => {
  return (
    <Fabric>
      <Router>
        <div className="ms-Grid" dir="ltr">
          {/* nav row */}
          <div className="ms-Grid-row ms-depth-8">
            <div className="ms-Grid-col ms-lg2 ms-depth-8"></div>
            <div className="ms-Grid-col ms-sm2 ms-lg1" style={{ padding: "1em" }}>
              <Stack horizontal horizontalAlign="center" gap={15}>
                <Logo className="logo" height={45} width={45} />
                <Text variant="xxLarge" styles={boldStyle}>Identity</Text>
              </Stack>
            </div>
            <div className="ms-Grid-col ms-sm10 ms-lg6">
              <nav className="topNav">
                <ul>
                  <li>
                    <RouterLink to="./">Home</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="./box">Box</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="./select">Select</RouterLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="ms-Grid-col ms-lg2"></div>
          </div>
          {/* main grid */}
          <div className="ms-Grid-row" dir="ltr">
            <div className="ms-Grid-col ms-lg2"></div>
            {/* main content container */}
            <div className="ms-Grid-col ms-sm12 ms-lg8">
              <div className="ms-Grid">
                <Switch>
                  <Route path="/box">
                    <BoxPicker />
                  </Route>
                  <Route path="/select">
                    <SelectPicker />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </div>
            <div className="ms-Grid-col ms-lg2"></div>
          </div>
          {/* <Footer /> */}
        </div>
      </Router >
    </Fabric >
  );
};

export function Jumbo() {
  return <Stack horizontalAlign="center" verticalFill styles={{
    root: {
      width: '1620px',
      margin: '0 auto',
      textAlign: 'center',
      color: '#605e5c'
    }
  }} gap={15}>
    <Logo className="logo" height="250" width="250" />
    <Text variant="xxLarge" styles={boldStyle}>Interested in identity? You're in the right place.</Text>
    <Stack horizontalAlign="center" styles={{
      root: {
        minWidth: "1200px"
      }
    }}>
    </Stack>
  </Stack>
}

export function Home() {
  return <BoxPicker />;
}

export function Footer() {
  return <div className="ms-Grid-row">
    <div className="ms-Grid-col ms-sm2"></div>
    <div className="ms-Grid-col ms-sm4">
      <Text styles={boldStyle}>
        Essential Links
</Text>
      <Stack>
        <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
        <Link href="https://github.com/officeDev/office-ui-fabric-react/">Github</Link>
        <Link href="https://twitter.com/officeuifabric">Twitter</Link>
      </Stack>
    </div>
    <div className="ms-Grid-col ms-sm4">
      <Text styles={boldStyle}>Get in touch.</Text>
      <Stack>
        <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
        <Link href="https://github.com/officeDev/office-ui-fabric-react/">Github</Link>
        <Link href="https://twitter.com/officeuifabric">Twitter</Link>
      </Stack>
    </div>
    <div className="ms-Grid-col ms-sm2"></div>
  </div>;
}