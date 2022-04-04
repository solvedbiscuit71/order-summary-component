import styled from '@emotion/styled';

export default styled.div(props => ({
  display: 'block',

  width: 327,
  minHeight: 567,

  border: 'none',
  borderRadius: '1.5em',
  backgroundColor: 'white',

  '@media (min-width: 1024px)': {
    width: 450,
    minHeight: 698,
  }
}));