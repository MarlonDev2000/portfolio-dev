import styled from 'styled-components'
import Image from 'next/image'

import photoProfile from '../images/photo.jpg'
import GitHubicon from '../images/logo-github.png'
import LinkedInIcon from '../images/logo-linkedin.png'

const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
`

const ProfileImage = styled(Image)`
  border-radius: 50%;
`

const Div = styled.div`
  display: inline-block;
`

const DivText = styled.div`
  color: #191919;
  background-color: #3385ff;
  width: 270px;
  font-weight: bold;
  margin-left: 30px;
`

const H2 = styled.h2`
  color: white;
  font-size: 24px;
  margin-left: 30px;
  margin-bottom: 5px;
`

const Span = styled.span`
  color: #3385ff;
  margin-left: 30px;
  display: flex;
  margin-bottom: 15px;
`

const DivIcon = styled.div`
  display: flex;
  margin-left: 30px;
`

const Icon = styled.a`
  margin-right: 15px;
`

const Index = () => {
  return (
    <>
      <DivFlex>
        <ProfileImage src={photoProfile} width={350} height={350} />
        <Div>
          <DivText>Desenvolvedor Fullstack Javascript</DivText>
          <H2>
            Desenvolvedor de aplicações web utilizando Javascript e suas varias bibliotecas e
            frameworks
          </H2>
          <Span>Tecnologias que utilizo: Node, React, Express, Next, MaterialUI e MongoDB</Span>
          <DivIcon>
            <Icon href="https://github.com/MarlonDev2000" target="_blank">
              <Image src={GitHubicon} width={36} height={36} />
            </Icon>
            <Icon href="https://www.linkedin.com/in/marlon-braga-16832b201/" target="_blank">
              <Image src={LinkedInIcon} width={36} height={36} />
            </Icon>
          </DivIcon>
        </Div>
      </DivFlex>
    </>
  )
}

export default Index
