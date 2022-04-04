import styled from '@emotion/styled';

export default styled.a(props => ({
  fontSize: props.size || '.8rem',
  fontWeight: props.weight || 700,
  fontStyle: props.style,

  color: props.color || props.theme.text.anchor || 'blue',
  textAlign: props.align || 'left',
  textDecoration: props.decoration,
  verticalAlign: props.vAlign,
  lineHeight: props.lineH,
  letterSpacing: props.spacing,

  '&:hover': {
    cursor: 'pointer',
    color: props.Hcolor || '#766cf1',
    textDecoration: 'none'
  }
}));