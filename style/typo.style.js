import styled from 'styled-components'

export const Heading = styled.span.attrs((props) => ({
  textAlign: props.isMobile ? 'center' : 'left',
  fontSize: props.isMobile ? '28px' : '40px',
  lineHeight: props.isMobile ? '30px' : '55px',
  letterSpacing: props.isMobile ? '0px' : '-2.4px',
  color: props.fade ? props.theme.accent : '',
}))`
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font: 500;
  line-height: ${(props) => props.lineHeight};
  white-space: pre-line;
  letter-spacing: ${(props) => props.letterSpacing};
`

export const SecondaryHeading = styled(Heading)`
  color: ${(props) => props.theme.accent};
  font-size: 50px;
  line-height: ${(props) => (props.isMobile ? '54px' : props.lineHeight)};
`
export const PseudoSecondaryHeading = styled(SecondaryHeading)`
  position: relative;
  &:before {
    content: '';
    display: ${({ isMobile, displayUnderlineMobile }) =>
      (isMobile && displayUnderlineMobile) || 'block'};
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100px;
    height: 10px;
    border-radius: 10px;
    background: ${(props) => props.theme.accent};
  }
  ${(props) => {
    return (
      props.isMobile &&
      `
    margin-bottom:30px;
    &:before {
      left:50%;
      transform:translateX(-50%);
    }
  `
    )
  }}
`
export const Subheading = styled.span.attrs((props) => ({
  textAlign: props.isMobile ? 'center' : 'left',
  fontSize: props.isMobile ? '12px' : '24px',
}))`
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
`
export const Paragraph = styled.span.attrs((props) => ({
  fontSize: props.isMobile ? '12px' : '14px',
  textAlign: props.isMobile ? 'center' : 'left',
  lineHeight: props.isMobile ? '20px' : '26px',
  isMobile: props.isMobile,
}))`
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  font-weight: 500;
  line-height: ${(props) => props.lineHeight};
  white-space: pre-line;
`

export const LinkParagraph = styled(Paragraph)`
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

export const PseudoParagraph = styled(Paragraph)`
  padding-left: ${(props) => props.paddingLeft};
  margin-bottom: ${(props) => props.marginBottom};
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: #fff;
    top: ${(props) => props.top};
    transform: translateY(-50%) !important;
    left: 0;
  }
`

export const LinkPseudoParagraph = styled(PseudoParagraph)`
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`
export const CodeParagraph = styled(Paragraph)`
  color: ${(props) => props.theme.codeColor};
`

export const SecondaryParagraph = styled(Paragraph)`
  font-size: ${(props) => (props.isMobile ? '16px' : '24px')};
  color: ${(props) => props.theme.accent};
`
export const DullParagraph = styled(Paragraph)`
  color: ${(props) => props.theme.dullColor};
  font-weight: normal;
  line-height: ${(props) => props.lineHeight};
  letter-spacing: 0px;
`
