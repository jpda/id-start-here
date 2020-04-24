import React from 'react';
import { Stack, Text, Link, FontWeights } from 'office-ui-fabric-react';
import { ReactComponent as Logo } from './img/aad.svg'
import Picker from './components/BoxPicker';
import { HashRouter as Router, Switch, Route, Link as RouterLink } from 'react-router-dom';
import SelectPicker from './components/SelectPicker';
import BoxPicker from './components/BoxPicker';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <RouterLink to="./">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="./box">box</RouterLink>
            </li>
            <li>
              <RouterLink to="./select">select</RouterLink>
            </li>
          </ul>
        </nav>
        <div className="ms-Grid">
          <Stack horizontalAlign="center" verticalFill styles={{
            root: {
              width: '1620px',
              margin: '0 auto',
              textAlign: 'center',
              color: '#605e5c'
            }
          }}
            gap={15}>
            <Logo className="logo" height="250" width="250" />
            <Text variant="xxLarge" styles={boldStyle}>
              Interested in identity? You're in the right place.
          </Text>
            <Text variant="large"></Text>
            <Text variant="large" styles={boldStyle}>
              Essential Links
          </Text>
            <Stack horizontal gap={15} horizontalAlign="center">
              <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
              <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
              <Link href="https://github.com/officeDev/office-ui-fabric-react/">Github</Link>
              <Link href="https://twitter.com/officeuifabric">Twitter</Link>
            </Stack>
            <Stack horizontalAlign="center" styles={{
              root: {
                minWidth: "1200px"
              }
            }}>
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
            </Stack>
          </Stack>
        </div>
      </div>
    </Router>
  );
};

export function Home() {
  return <Picker />;
}