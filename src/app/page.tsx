'use client'

import ChatBox from './components/ChatBox/ChatBox'

import { Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        FuriaBot
      </Typography>
      <ChatBox />
    </>
  )
}
