import CardModel from './card-model'
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Badge,
  Link,
  Text
} from 'theme-ui'
import Buttons from './button'

/** @jsxImportSource theme-ui */

export default function Sinerider({stars}) {
  return (
    <CardModel
      github_link="https://github.com/hackclub/sinerider/"
      // link="https://sprig.hackclub.com"
      stars={stars}
      color="white"
      sx={{
        backgroundSize: 'cover',
        backgroundImage:
          'url(https://cloud-pwqxgzqdg-hack-club-bot.vercel.app/0initial-bg__1_.png)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <img
        src="https://cloud-9cei11221-hack-club-bot.vercel.app/0logo_text_2.png"
        sx={{ width: ['200px', '250px', '300px'] }}
      />
      <Grid columns={[1, '0.4fr 0.6fr']}>
        <Box></Box>
        <Box sx={{ mt: '-180px' }}>
          <Text as="p" variant="subtitle">
            A game about love and graphing, coming 2023! This
            project is powered by teenage hackers of all kinds: artists,
            musicians, programmers, storytellers… so if that's you, come join
            us; we need your help to make this thing real!
          </Text>
          <Text as="p" sx={{ fontSize: [2, 3], fontWeight: 'bold', mt: 2 }}>
            Get involved
          </Text>
          <Flex sx={{ flexDirection: 'column' }}>
            <Buttons content="join #gamedev in Slack to get started" id="4" icon="rainbow" href="/slack">Create art for the game</Buttons>
            <Buttons content="DM @cwalker in Slack to learn more" id="5" icon="view" href="/slack">Be a scene maker</Buttons>
          </Flex>
          <Button
            variant="primary"
            sx={{
              backgroundColor: '#CAB4D4',
              color: '#271932',
              mt: 3
            }}
            as="a"
            href="/slack"
          >
            Join the development
          </Button>
        </Box>
      </Grid>
    </CardModel>
  )
}
