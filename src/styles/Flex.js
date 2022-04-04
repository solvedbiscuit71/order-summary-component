import styled from '@emotion/styled';

export default styled.div(props => ({
  display: 'flex',
  flexDirection: props.direction,
  gap: props.gap || '1em',
  alignItems: props.align,
  justifyContent: props.justify,

  border: 'none',
  borderRadius: props.radius || '1.5em',
  backgroundColor: props.bgColor || 'white',

  margin: props.m,
  padding: props.p,

  marginInline: props.mx,
  paddingInline: props.px,
  marginBlock: props.my,
  paddingBlock: props.py,
}));