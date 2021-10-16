import { Snackbar, Alert } from '@mui/material'
import styled from 'styled-components'

const AlertStyled = styled(Alert)`
  background-color: #3385ff;
`

const Toasty = ({ open, onClose, severity, message }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    onClose()
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <AlertStyled elevation={6} variant="filled" severity={severity}>
        {message}
      </AlertStyled>
    </Snackbar>
  )
}

export default Toasty
