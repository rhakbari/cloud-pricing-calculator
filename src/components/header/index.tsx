import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundImage: 'linear-gradient(to right, #19A583,#2ECC72)',
          width: '100%',
          height: '60px',
        }}
      >
        <Toolbar variant="dense">
          <a href="https://qcloud.pk">
            <Image
              // loader={myLoader}
              src={'/QCloud-logo.png'}
              alt="Qcloud logo"
              width={150}
              height={60}
            />
          </a>
          {/* <Image
            // loader={myLoader}
            src={"/calculator-preview 1.png"}
            alt="Qcloud logo"
            width={500}
            height={60}
            // style={{marginLeft: "20px"}}
          /> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
