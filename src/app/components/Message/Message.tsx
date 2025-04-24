import { Avatar, Box, Paper, Typography } from '@mui/material'

interface Props {
  text: string
  sender: 'user' | 'bot'
}

export default function Message({ text, sender }: Props) {
  const isUser = sender === 'user'

  // Função para formatar a mensagem do bot
  const renderBotMessage = (text: string) => {
    const formated = text.replace(/([\p{L}]+)\s+"([\w\d]+)"\s+([\p{L}]+)/gu, '"$2" ($1 $3)')
    const sections = formated.split(/\n{2,}/)

    return sections.map((section, idx) => (
      <Box key={idx}>
        <Typography sx={{ mb: 1.5, whiteSpace: 'pre-line' }}>
          {section.trim()}
        </Typography>
      </Box>
    ))
  };

  return (
    <Box display="flex" justifyContent={isUser ? 'flex-end' : 'flex-start'} mb={3}>
      <Box display="flex" alignItems="flex-start">
        {!isUser && (
          <Avatar
            src="/logo.png"
            alt="FuriaBot"
            sx={{
              width: 30,
              height: 30,
              mr: 1,
              backgroundColor: 'rgba(0, 0, 0, .2)',
              padding: '5px',
            }}
          />
        )}
        <Paper
          sx={{
            p: 1.5,
            color: 'white',
            boxShadow: 'none',
            bgcolor: isUser ? 'rgba(0, 0, 0, .2)' : 'transparent',
            borderRadius: isUser ? '20px 20px 0 20px' : 'none',
            maxWidth: '100%',
          }}
        >
          {isUser ? (
            <Typography>{text}</Typography>
          ) : (
            renderBotMessage(text)
          )}
        </Paper>
      </Box>
    </Box>
  )
}
