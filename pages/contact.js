import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Image from 'next/image'

import photo from '../images/photo.jpg'
import GitHubicon from '../images/logo-github.png'
import LinkedInIcon from '../images/logo-linkedin.png'
import EmailIcon from '../images/email.png'

const DivProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
`

const ProfileImage = styled(Image)`
  border-radius: 50%;
`

const DivText = styled.div`
  margin-left: 30px;
`

const AnchorStyled = styled.a`
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  margin-bottom: 5px;
`

const IconStyled = styled(Image)``

const FormStyled = styled.form`
  max-width: 500px;
  margin: 0 auto;
`

const H1 = styled.h1`
  font-weight: 100;
  color: white;
  text-align: center;
`

const PStyled = styled.p`
  color: #bf1650;
  &::before {
    display: inline;
    content: '⚠ ';
  }
`

const InputStyled = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`

const LabelStyled = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: white;
  font-size: 22px;
  font-weight: 200;
`

const ButtonStyled = styled.button`
  display: flex;
  background: #3385ff;
  color: white;
  text-transform: uppercase;
  border: none;
  margin: 50px auto;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 5px;
  &:hover {
    background: #5a9cff;
  }
  &:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
`

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <DivProfile>
        <ProfileImage src={photo} width={248} height={248} />
        <DivText>
          <AnchorStyled href="mailto:marloncs13@outlook.com">
            <IconStyled src={EmailIcon} width={36} height={36} />
            marloncs13@outlook.com
          </AnchorStyled>
          <AnchorStyled href="https://github.com/MarlonDev2000" target="_blank">
            <IconStyled src={GitHubicon} width={36} height={36} />
            MarlonDev2000
          </AnchorStyled>
          <AnchorStyled href="https://www.linkedin.com/in/marlon-braga-16832b201" target="_blank">
            <IconStyled src={LinkedInIcon} width={36} height={36} />
            Marlon Braga Filho
          </AnchorStyled>
        </DivText>
      </DivProfile>
      <H1>Entre em contato</H1>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <LabelStyled>Nome:</LabelStyled>
        <InputStyled
          {...register('firstName', { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
        />
        {errors?.firstName?.type === 'required' && <PStyled>Este campo e obrigatorio</PStyled>}
        {errors?.firstName?.type === 'maxLength' && (
          <PStyled>Primeiro Nome nao pode execeder 20 caracteres</PStyled>
        )}
        {errors?.firstName?.type === 'pattern' && <PStyled>Apenas letras do alfabeto</PStyled>}
        <LabelStyled>Sobrenome:</LabelStyled>
        <InputStyled {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })} />
        {errors?.lastName?.type === 'pattern' && <PStyled>Apenas letras do alfabeto</PStyled>}
        <LabelStyled>E-mail:</LabelStyled>
        <InputStyled {...register('Email', { required: true, maxLength: 99 })} />
        {errors?.Email?.type === 'required' && <PStyled>Este campo e obrigatorio</PStyled>}
        <ButtonStyled type="submit"> Enviar </ButtonStyled>
      </FormStyled>
    </>
  )
}

export default Form
