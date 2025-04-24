import { Avatar, Box, Paper, Typography } from '@mui/material'

interface Props {
  text: string
  sender: 'user' | 'bot'
}

export default function Message({ text, sender }: Props) {
  const isUser = sender === 'user'
  return (
    <>
      <Box display='flex' justifyContent={isUser ? 'flex-end' : 'flex-start'} mb={3}>
        <Box display='flex' alignItems='flex-start'>
          { !isUser && (
            <Avatar src="/logo.png" alt='FuriaBot' sx={{ width: 30, height: 30, mr: 1, backgroundColor: 'rgba(0, 0, 0, .2)', padding: '5px' }} />
          )}
          <Paper
            sx={{
              p: isUser ? 1.5 : 0,
              pl: !isUser ? 1.5 : "none",
              color: "white",
              boxShadow: 'none',
              bgcolor: isUser ? 'rgba(0, 0, 0, .2)' : 'transparent',
              borderRadius: isUser ? '20px 20px 0 20px' : 'none',
              width: '100%',
            }}
          >
            <Typography>{text}</Typography>
          </Paper>
        </Box>
      </Box>
    </>
  )
}
