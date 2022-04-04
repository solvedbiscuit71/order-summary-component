import styled from '@emotion/styled';

export default styled.div(props => ({
  display: 'grid',
  gap: props.gap || '1em',
  justifyContent: props.justifyC || 'center',
  alignContent: props.alignC || 'center',
  justifyItems: props.justifyI,
  alignItems: props.alignI,
  gridTemplateRows: props.rows,
  gridTemplateColumns: props.columns,
  gridTemplateAreas: props.areas,

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