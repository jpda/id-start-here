import React from 'react';
import { Stack, Text, Link, FontWeights } from 'office-ui-fabric-react';
import { ReactComponent as Logo } from './img/aad.svg'
import Picker from './components/Picker';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: '960px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#605e5c'
        }
      }}
      gap={15}
    >
      <Logo className="logo" height="250" width="250"/>
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
      <Stack>
        <Picker />
      </Stack>
    </Stack>
  );
};
