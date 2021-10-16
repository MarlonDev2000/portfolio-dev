import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Image from 'next/image'
import Toasty from './components/Toasty'

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
  border-radius: 6px;
  border: none;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  outline: none;
`

const TextAreaStyled = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  border-radius: 6px;
  border: none;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  outline: none;
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

  const [openToasty, setOpenToasty] = useState({
    open: false,
    message: '',
  })

  const onSubmit = () => {
    setOpenToasty({
      open: true,
      message: 'Contato Enviado',
    })
  }

  const handleOnClose = () => {
    setOpenToasty(false)
  }

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
      <H1>Entre em contato (Fase de Teste)</H1>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled
          placeholder="Nome"
          {...register('name', { required: true, maxLength: 20, pattern: /^[A-Za-z\s]+$/i })}
        />
        {errors?.name?.type === 'required' && <PStyled>Campo obrigatório</PStyled>}
        {errors?.name?.type === 'maxLength' && (
          <PStyled>O nome nao pode execeder 20 caracteres</PStyled>
        )}
        {errors?.name?.type === 'pattern' && <PStyled>Apenas letras do alfabeto</PStyled>}
        <InputStyled
          placeholder="Email"
          {...register('email', { required: true, maxLength: 99 })}
        />
        {errors?.email?.type === 'required' && <PStyled>Campo obrigatório</PStyled>}
        <InputStyled
          placeholder="Assunto"
          {...register('text', { required: true, maxLength: 99 })}
        />
        {errors?.text?.type === 'required' && <PStyled>Campo obrigatório</PStyled>}
        <TextAreaStyled
          placeholder="Descrição"
          {...register('textarea', { required: true, maxLength: 255 })}
        />
        {errors?.textarea?.type === 'required' && <PStyled>Campo obrigatório</PStyled>}
        <ButtonStyled type="submit"> Enviar </ButtonStyled>
        <Toasty
          open={openToasty.open}
          severity="success"
          message={openToasty.message}
          onClose={handleOnClose}
        />
      </FormStyled>
    </>
  )
}

export default Form
