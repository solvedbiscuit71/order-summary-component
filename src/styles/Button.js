import styled from '@emotion/styled';

export default styled.button(props => ({
  display: 'grid',
  placeContent: 'center',

  minHeight: props.minH || 48,
  width: props.w || '100%',

  border: props.border || 'none',
  borderRadius: props.radius || '.75em',

  backgroundColor: props.bgColor || props.primary ? props.theme.colors.brightBlue : 'white',
  boxShadow: props.shadow || props.primary ? `0px 5px 10px 0px hsla(245, 75%, 52%,.25)` : null,
  color: props.color || props.primary ? 'white' : props.theme.text.para,

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: props.primary && '#766cf1',
    color: !props.primary && props.theme.text.heading,
  },

  fontSize: props.size || '.9rem',
  fontWeight: props.weight || 700,
  letterSpacing: props.spacing
}));