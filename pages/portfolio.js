import styled from 'styled-components'
import { Box, Grid, Button } from '@mui/material'
import Image from 'next/image'

import webSiteImage from '../images/portfolio.svg'

const DivFlex = styled.div`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
`

const BoxStyled = styled(Box)`
  flex-grow: 1;
`

const Item = styled.div`
  background-color: rgba(36, 36, 36, 0.8);
  border-radius: 15px;
  padding: 20px;
  color: white;
`

const H3 = styled.h3`
  font-size: 26px;
  margin: 5px 0px;
  padding-bottom: 15px;
`

const TextBold = styled.span`
  font-weight: bold;
  padding-bottom: 7px;
  display: block;
`
const Text = styled.span`
  font-weight: normal;
`

const DivProjects = styled.div``

const ImageStyled = styled(Image)`
  border-radius: 10px;
`

const DivPortfolio = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const DivText = styled.div`
  margin-left: 15px;
  margin-top: 15px;
  width: 100%;
`

const ButtonStyled = styled(Button)`
  background-color: #3385ff;
  color: white;
  font-weight: bold;
  margin-top: 10px;
  text-transform: none;
  &:hover {
    background-color: #5a9cff;
  }
`

const Portfolio = () => {
  return (
    <>
      <DivFlex>
        <BoxStyled>
          <Grid>
            <Grid item xs={12}>
              <Item>
                <H3>Experiência</H3>
                <TextBold>
                  - Graduação: <Text>Cursando Análise e Desenvolvimento de Sistemas na PUC-GO</Text>{' '}
                </TextBold>
                <TextBold>
                  - Estágio: <Text>Experiência com Desenvolvimento web(Javascript + React)</Text>{' '}
                </TextBold>
                <TextBold>
                  - Freelancer: <Text>Atuo como desenvolvedor freelancer desde agosto de 2021</Text>{' '}
                </TextBold>
                <TextBold>
                  - Trabalhos anteriores:{' '}
                  <Text>Desenvolvedor Web (PHP + Javascript) na Bompreço Autopeças</Text>{' '}
                </TextBold>
              </Item>
            </Grid>
          </Grid>
        </BoxStyled>
      </DivFlex>
      <DivProjects>
        <BoxStyled>
          <Grid>
            <Grid item xs={12}>
              <Item>
                <H3>Projetos</H3>
                <DivPortfolio>
                  <ImageStyled src={webSiteImage} width={248} height={248} />
                  <DivText>
                    <TextBold>
                      - Função: <Text>Desenvolvedor Frontend</Text>{' '}
                    </TextBold>
                    <TextBold>
                      - Descrição:{' '}
                      <Text>
                        O site que você está acessando. Utilizo ele como portfolio, desenvolvido com
                        React(Next.JS), MaterialUI e StyledComponents
                      </Text>{' '}
                    </TextBold>
                    <ButtonStyled size="large">
                      <a href="https://github.com/MarlonDev2000" target="_blank">
                        Saiba Mais
                      </a>
                    </ButtonStyled>
                  </DivText>
                </DivPortfolio>
              </Item>
            </Grid>
          </Grid>
        </BoxStyled>
      </DivProjects>
    </>
  )
}

export default Portfolio
