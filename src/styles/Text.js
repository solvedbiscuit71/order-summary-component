import styled from '@emotion/styled';

export default styled.p(props => ({
  fontSize: props.size || '1rem',
  fontWeight: props.weight || 400,
  fontStyle: props.style,

  color: props.color || props.theme.text.para || 'black',
  textAlign: props.align || 'left',
  textDecoration: props.decoration,
  verticalAlign: props.vAlign,
  lineHeight: props.lineH,
  letterSpacing: props.spacing,

  margin: props.m,
  padding: props.p,

  marginInline: props.mx,
  paddingInline: props.px,
  marginBlock: props.my,
  paddingBlock: props.py,
}));