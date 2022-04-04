import styled from '@emotion/styled';

export default styled.button(props => ({
  display: 'grid',
  placeContent: 'center',

  minHeight: props.minH || 48,
  width: props.w || '100%',

  border: props.border || 'none',
  borderRadius: props.radius || '.75em',

  backgroundColor: props.bgColor || props.primary ? props.theme.colors.brightBlue : 'white',
  color: props.color || props.primary ? 'white' : props.theme.text.para,

  fontSize: props.size || '.9rem',
  fontWeight: props.weight || 700,
  letterSpacing: props.spacing
}));