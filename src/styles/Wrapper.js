import styled from '@emotion/styled';

export default styled.div(props => ({
  display: 'grid',
  placeContent: 'center',

  width: '100vw',
  minHeight: '100vh',

  backgroundColor: props.theme.colors.paleBlue,
  backgroundImage: 'url(images/pattern-background-mobile.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top left',
  backgroundSize: 'contain',

  '@media (min-width: 1024px)': {
    backgroundImage: 'url(images/pattern-background-desktop.svg)',
  }
}));