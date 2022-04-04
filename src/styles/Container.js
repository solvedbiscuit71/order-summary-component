import styled from '@emotion/styled';

export default styled.div(props => ({
  margin: props.m,
  padding: props.p,

  marginInline: props.mx,
  paddingInline: props.px,
  marginBlock: props.my,
  paddingBlock: props.py,

  '@media (min-width: 1024px)': props.md && {
    marginInline: props.md.mx,
    paddingInline: props.md.px,
    marginBlock: props.md.my,
    paddingBlock: props.md.py,
  }
}));