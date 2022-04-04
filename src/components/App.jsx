import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import Card from '../styles/Card';
import Container from '../styles/Container';
import Grid from '../styles/Grid';
import Title from '../styles/Title';
import Text from '../styles/Text';
import Wrapper from '../styles/Wrapper';
import Heading from '../styles/Heading';
import Flex from '../styles/Flex';
import Button from '../styles/Button';
import Link from '../styles/Link';
const theme = {
  colors: {
    veryPaleBlue: 'hsl(225, 100%, 98%)',
    paleBlue: 'hsl(225, 100%, 94%)',
    brightBlue: 'hsl(245, 75%, 52%)',
  },
  text: {
    heading: 'hsl(223, 47%, 23%)',
    para: 'hsl(224, 23%, 55%)',
  }
}
function App(props) {
  return (
    <>
      <Global styles={`
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap');

    *,*::before,*::after {
      box-sizing: inherit;
      font-family: inherit;
    }

    html,body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Red Hat Display";
    }
    `} />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Card>
            <img style={{
              width: '100%',
              borderTopLeftRadius: '1.5em',
              borderTopRightRadius: '1.5em'
            }} src="images/illustration-hero.svg" alt="hero illustration" />
            <Container mx='1.5em' my='1em' md={{mx: '3em',my: '2em'}}>
              <Title size='1.625rem' weight={900} align='center' my='.85em .7em' mx={0}>Order Summary</Title>
              <Text align='center' my='1.125em 1.5em' px='.5em' lineH='1.625em'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</Text>

              <Grid my='1.5em' p='1em' gap='1.125em' alignI='center' rows='1fr' columns='48px 2fr 1fr' bgColor={theme.colors.veryPaleBlue}  md={{minH: 100,my: '1.5em 2em',p: '1.625em'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#DFE6FB" /><path fill="#717FA6" fill-rule="nonzero" d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z" /></g></svg>
                <Container style={{justifySelf: 'flex-start'}}>
                  <Heading size='.9rem' m={0} md={{size: '1rem'}}>Annual Plan</Heading>
                  <Text size='.9rem' m={0} my='4px 0'>$59.99/year</Text>
                </Container>
                <Link style={{justifySelf: 'flex-end'}} href='#'>Change</Link>
              </Grid>

              <Flex gap='.75em' md={{gap: '1.125em'}}>
                <Button primary>Proceed to Payment</Button>
                <Button>Cancel Order</Button>
              </Flex>
            </Container>
          </Card>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;