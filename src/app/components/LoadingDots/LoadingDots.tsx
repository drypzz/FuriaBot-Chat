import { Avatar, Box } from '@mui/material'

import { motion } from 'framer-motion'

export default function LoadingDots() {
  return (
    <>
      <Box display="flex" alignItems={"center"} justifyContent={"flex-start"}>
        <Avatar src="/logo.png" alt='FURIABOT' sx={{ width: 30, height: 30, mr: 1.5, backgroundColor: 'rgba(0, 0, 0, .2)', padding: '5px' }} />
        {[0, 1, 2].map((i) => (
          <>
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: 'gray',
              }}
            />
          </>
        ))}
      </Box>
    </>
  )
};