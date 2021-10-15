import { AppBar, Box, Toolbar } from '@mui/material/'
import styled from 'styled-components'
import Link from 'next/link'

const AppBarStyled = styled(AppBar)`
  background-color: rgba(36, 36, 36, 0.8);
  height: 55px;
  justify-content: center;
  box-shadow: none;
`

const Div = styled.div`
  display: flex;
  justify-content: space-around;
`

const ToolbarStyled = styled(Toolbar)``

const NameArea = styled.div`
  display: flex;
`

const Name = styled.h3`
  color: #3385ff;
  font-size: 32px;
  cursor: pointer;
  margin-right: 5px;
`

const SurName = styled.h3`
  color: #3385ff;
  font-size: 32px;
  font-weight: normal;
  cursor: pointer;
`

const HeaderText = styled.span`
  color: white;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
  margin: 0px 10px;
`

const Header = () => {
  return (
    <Box>
      <AppBarStyled position="static">
        <Div>
          <Link href="/">
            <NameArea>
              <Name>Marlon</Name>
              <SurName>Braga</SurName>
            </NameArea>
          </Link>
          <ToolbarStyled>
            <Link href="/portfolio">
              <HeaderText>Portfolio</HeaderText>
            </Link>
            <Link href="/contact">
              <HeaderText>Contato</HeaderText>
            </Link>
          </ToolbarStyled>
        </Div>
      </AppBarStyled>
    </Box>
  )
}

export default Header
