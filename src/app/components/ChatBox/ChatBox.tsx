'use client'

import { Box, TextField, IconButton, Paper } from '@mui/material'

import SendIcon from '@mui/icons-material/Send'

import { LoadingDots, Message, useChatBoxRules } from '../index'

export default function ChatBox() {

  const {
    messages,
    input,
    loading,
    messagesEndRef,
    handleInputChange,
    handleKeyDown,
    sendMessage,
  } = useChatBoxRules()

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          // p: 1,
          height: '75vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: "none",
          backgroundColor: 'transparent'
        }}
      >

        <Box sx={{ 
          flex: 1,
          overflowY: 'auto',
          mb: 2,
          pr: 1,
          "::-webkit-scrollbar": {
            width: '3px',
            backgroundColor: 'transparent',
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: 'rgba(0, 0, 0, .2)',
            borderRadius: '10px',
          }
        }}>
          {messages.map((msg, idx) => (
            <Box key={idx}>
              <Message {...msg} />
            </Box>
          ))}
          {loading && <LoadingDots />}
          <div ref={messagesEndRef} />
        </Box>


        <Box display="flex" gap={1}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Pergunte algo sobre a FURIA..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, .2)',
                '& fieldset': { border: 'none' },
                '&:hover fieldset': { border: 'none' },
                '&.Mui-focused fieldset': { border: 'none' },
              },
            }}
          />
          <IconButton onClick={sendMessage} disabled={loading} sx={{
            color: 'white',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.2)',
              color: '#00bcd4',
            }
          }}>
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    </>
  )
}
