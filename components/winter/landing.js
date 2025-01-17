import { Box, Heading, Button, Text, Container } from 'theme-ui'
// import { gsap } from 'gsap'
import { useEffect } from 'react'
// import ScrollTrigger from 'gsap/dist/ScrollTrigger'
/** @jsxImportSource theme-ui */
import Snowfall from 'react-snowfall'
import { Fade } from 'react-reveal'
import Rsvp from './rsvp'
import { keyframes } from '@emotion/react'

const flashing = keyframes({
  from: { opacity: 0 },
  '50%': { opacity: 1 },
  to: { opacity: 0 }
})

function Dot() {
  return (
    <Text
      sx={{
        bg: 'green',
        color: 'white',
        borderRadius: 'circle',
        display: 'inline-block',
        lineHeight: 0,
        width: '.4em',
        height: '.4em',
        marginRight: '.4em',
        marginBottom: '.12em',
        animationName: `${flashing}`,
        animationDuration: '3s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite'
      }}
    />
  )
}

export default function Landing({ rsvpCount }) {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     gsap.registerPlugin(ScrollTrigger)
  //     gsap.to('.box', {
  //       scrollTrigger: {
  //         trigger: '.box',
  //         start: 'top center',
  //         end: 'top 100%',
  //         scrub: true,
  //         markers: true,
  //       }, // start the animation when ".box" enters the viewport (once)
  //       x: 600,
  //       ease: 'none',
  //       duration: 5
  //     })
  //   }
  // })

  return (
    <Box sx={{ position: 'relative' }}>
      {/* <img
        src="https://cloud-mvlym308h-hack-club-bot.vercel.app/0cloud_2.png"
        width="200px"
        height="auto"
        class="box"
        sx={{ zIndex: 3, position: 'absolute', top: '10%', left: '60%' }}
      />
      <img
        src="https://cloud-mvlym308h-hack-club-bot.vercel.app/1cloud_1.png"
        width="200px"
        height="auto"
        class="box"
        sx={{ zIndex: 3, position: 'absolute', top: '20%', left: '80%' }}
      />
      <img
        src="https://cloud-mvlym308h-hack-club-bot.vercel.app/1cloud_1.png"
        width="200px"
        height="auto"
        class="box"
        sx={{ zIndex: 3, position: 'absolute', top: '40%', left: '40%' }}
      /> */}
      <Box
        sx={{
          background:
            'url(https://cloud-6h53svh6x-hack-club-bot.vercel.app/0group_5.png), linear-gradient(0deg, #3561A4 0%, #338EDA 100%)',
          backgroundPosition: 'bottom center',
          backgroundSize: ['200%', '150%', '100%'],
          backgroundRepeat: 'no-repeat',
          height: '85vh',
          minHeight: [null, '750px'],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 2
        }}
      >
        <Snowfall />
        <Container>
          <Box
            sx={{
              backdropFilter: 'blur(1.5px)',
              maxWidth: 'container'
            }}
          >
            <Fade left cascade>
              <Heading
                variant="eyebrow"
                sx={{
                  color: 'sunken'
                  // fontSize: ['18px', '20px', '24px']
                }}
              >
                <Dot />
                {rsvpCount} more RSVPs till the start of a hacker's
              </Heading>
            </Fade>
            <Fade left cascade>
              <Heading
                as="h1"
                variant="ultratitle"
                sx={{
                  color: 'white',
                  textShadow: '0 0 16px rgba(0, 0, 0, 0.2)'
                }}
                id="rsvp"
              >
                Winter Hardware <br />
                Wonderland
              </Heading>
            </Fade>
            {/* <Container variant="copy">
              <Text
                variant="subtitle"
                as="p"
                sx={{
                  color: 'white',
                  textShadow: '2px 2px 10px rgba(0, 0, 0, 1)',
                  pt: 2
                }}
              >
                Get up to $250 in grant money build a hardware project this
                winter alongside hundreds of other hackers.
              </Text>
            </Container> */}
            <Rsvp />
          </Box>
          {/* <ScrollHint sx={{mt: 3}} /> */}
        </Container>
      </Box>
    </Box>
  )
}
