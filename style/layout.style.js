import styled from 'styled-components'

export const PrimaryContainer = styled.div`
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.mainColor};
  display: flex;
  flex-direction: column;
`
export const SecondaryContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.secondaryColor};
  display: flex;
  flex-direction: column;
`
export const TernaryContainer = styled.div`
  background: ${(props) => props.theme.ternary};
  color: ${(props) => props.theme.mainColor};
  display: flex;
  flex-direction: column;
`
export const Row = styled.div.attrs((props) => {
  const direction = props.mobile ? 'column' : 'row'
  const justifyContent = props.justifyContent ?? 'start'
  const alignItems = props.alignItems ?? 'start'
  const reverse = props.reverse

  return {
    direction: `${direction + (reverse ? '-reverse' : '')}`,
    justifyContent,
    alignItems,
  }
})`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`

export const RowFill = styled(Row)`
  width: 100%;
`

export const PseudoRowFill = styled(RowFill)`
  position: relative;
  margin-bottom: 34px;
  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 35px;
    transform: translateX(-50%);
    width: 2px;
    height: 35px;
    background: #fff;
  }
`

export const Column = styled.div.attrs((props) => {
  const justifyContent = props.justifyContent
  const justifySelf = props.justifySelf
  const alignItems = props.alignItems
  const alignSelf = props.alignSelf

  return {
    justifyContent,
    alignItems,
    alignSelf,
    justifySelf,
  }
})`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
  justify-self: ${(props) => props.justifySelf};
`

export const ColumnFill = styled(Column)`
  width: 100%;
`
