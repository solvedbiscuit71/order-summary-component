import styled from '@emotion/styled';

export default styled.h2(props => ({
  fontSize: props.size || '1.5rem',
  fontWeight: props.weight || 700,
  fontStyle: props.style,

  color: props.color || props.theme.text.heading || 'black',
  textAlign: props.align || 'left',
  textDecoration: props.decoration,
  verticalAlign: props.vAlign,

  margin: props.m,
  padding: props.p,

  marginInline: props.mx,
  paddingInline: props.px,
  marginBlock: props.my,
  paddingBlock: props.py,
}));