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
import ScrollingHackathons from '../../hackathons/scrolling-hackathons'
import Dot from '../../dot'

/** @jsxImportSource theme-ui */
const Cover = () => (
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      backgroundImage:
        'linear-gradient(to bottom,rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))',
      opacity: 0.8,
      zIndex: 1
    }}
  />
)

export default function Hackathons({ data, stars }) {
  return (
    <CardModel
      color="white"
      sx={{
        backgroundColor: 'dark'
        // background:
        //   'linear-gradient(to bottom,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.4) 25%,rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.6) 100%), url("https://hackclub.com/bank/bg.webp")',
        // backgroundPositon: 'center center',
        // backgroundSize: '100% auto'
      }}
      stars={stars}
      github_link="https://github.com/hackclub/hackathons"
      highlight="blue"
      // background="https://hackclub.com/bank/bg.webp"
    >
      <Image
        src="https://hackclub.com/bank/bg.webp"
        sx={{
          objectFit: 'cover',
          position: 'absolute',
          width: '100%',
          height: '100%',
          ml: -4,
          mt: -4,
          zIndex: 0
        }}
      />
      <Cover />
      <Text
        variant="title"
        sx={{ fontSize: ['36px', 4, 5], position: 'relative', zIndex: 2 }}
      >
        High school hackathons
      </Text>
      <Grid columns={[1, 1, 2]} sx={{ position: 'relative', zIndex: 2 }}>
        <Box>
          <Text as="p" variant="subtitle">
            We support the largest network of high school hackathons in the
            world. From an online community of organizers to free stickers and
            more!{' '}
          </Text>
          <Text
            sx={{
              fontSize: ['18px', '20px', 3],
              display: 'block',
              fontWeight: 'bold',
              mt: 2
            }}
          >
            Get involved
          </Text>
          <Flex sx={{ flexDirection: 'column' }}>
            <Buttons
              id="19"
              icon="event-code"
              link="https://hackathons.hackclub.com"
              primary="blue"
            >
              Find a high school hackathon
            </Buttons>
            <Buttons
              content="learn more about available resources"
              id="20"
              icon="bolt"
              link="/hackathons"
            >
              Organize a hackthon in your community
            </Buttons>
          </Flex>
          {/* <Button
            variant="primary"
            sx={{ bg: 'blue' }}
            mt={3}
            as="a"
            href="https://editor.sprig.hackclub.com"
            target="_blank"
            rel="noopener"
          >
            Find a hackathon
          </Button> */}
        </Box>
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            alignSelf: 'flex-end'
          }}
        >
          <Text sx={{ fontSize: 'small' }}>
            Upcoming hackathons <Dot />
          </Text>

          <Box>
            {data.slice(0, 5).map(data => (
              <Box
                sx={{
                  zIndex: '1',
                  // bg: 'rgb(255, 255, 255, 0.3)',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'normal',
                  width: 'fit-content',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 'small',
                  my: 2,
                  a: {
                    textDecoration: 'none',
                    color: 'white'
                  }
                }}
              >
                {data.logo && (
                  <Box
                    sx={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.375) 75%), url('${data.banner}')`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 'circle',
                      height: ['20px', '25px', '30px'],
                      width: ['20px', '25px', '30px']
                    }}
                  >
                    <Image
                      src={data.logo}
                      alt={`${data.name} logo`}
                      loading="lazy"
                      sx={{
                        height: '70%',
                        width: '70%',
                        objectFit: 'contain',
                        borderRadius: 'default'
                      }}
                    />
                  </Box>
                )}
                <Link href={data.website}>{data.name}</Link>
              </Box>
            ))}
          </Box>
        </Flex>
        {/* <Box
          sx={{
            transform: [null,'translateY(25%)' ,'translateY(25%)']
          }}
        >
          <ScrollingHackathons eventData={data} mode="await" />
        </Box> */}
      </Grid>
    </CardModel>
  )
}
