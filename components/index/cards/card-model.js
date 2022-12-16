import Tilt from './tilt'
import Icon from '../../icon'
import {
  Box,
  Button,
  Card,
  Flex,
  Container,
  Grid,
  Heading,
  Image,
  Badge,
  Link,
  Text
} from 'theme-ui'
import { Zoom } from 'react-reveal'
import ReactTooltip from 'react-tooltip'
import Comma from '../../comma'

/** @jsxImportSource theme-ui */

const CardModel = ({
  background,
  children,
  link,
  highlight,
  github_link,
  badge,
  text,
  color,
  stars,
  delay,
  position,
  ...props
}) => (
  // <Zoom delay={delay}>
  <Card
    sx={{
      position: 'relative',
      width: '100%',
      color: color,
      my: [4, 5],
      p: '24px',
      backgroundSize: 'cover',
      backgroundImage: `url(${background})` || '',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat',
      '& p': {
        fontSize: ['18px', '20px', '22px']
      }
    }}
    {...props}
  >
    {badge && (
      <Box
        sx={{
          position: ['relative', 'relative', 'relative', 'absolute'],
          width: 'fit-content',
          // float: 'right',
          right: [0, 0, 0, 3],
          top: [0, 0, 0, 3],
          zIndex: 3,
          px: 3,
          py: 2,
          mb: 2,
          float: [null, 'right', null],
          background: 'rgba(255,255,255,0.2)',
          borderRadius: 'extra',
          fontWeight: 'bold'
        }}
      >
        {text || 'Happening now'}
      </Box>
    )}
    {github_link != null ? (
      <Box>
        {position == 'bottom' ? (
          <Flex
            sx={{
              position: 'absolute',
              left: 3,
              bottom: 2,
              alignItems: 'center',
              zIndex: 2
            }}
          >
            <Link
              href={github_link}
              sx={{ mr: 2 }}
              target="_blank"
              rel="noopener"
            >
              <Icon
                glyph="github"
                size={42}
                color="#2351fs"
                sx={{
                  color: '#000',
                  '&:hover': {
                    color: highlight || color
                  }
                }}
              />
            </Link>
            {stars != null ? (
              <Text as="h2">
                ⭐️ <Comma>{stars}</Comma>
              </Text>
            ) : (
              <></>
            )}
          </Flex>
        ) : (
          <Flex
            sx={{
              position: 'absolute',
              right: 2,
              top: 2,
              alignItems: 'center',
              zIndex: 2
              // flexDirection: ['column', 'row', 'row']
            }}
          >
            {stars != null ? (
              <Text as="h2" sx={{ fontSize: ['20px', '24px', '28px'] }}>
                ⭐️ <Comma>{stars}</Comma>
              </Text>
            ) : (
              <></>
            )}
            <Link href={github_link} sx={{ ml: 2 }}>
              <Icon
                glyph="github"
                size={42}
                sx={{
                  color: color,
                  transition: '0.4s',
                  '&:hover': {
                    color: highlight || color
                  }
                }}
              />
            </Link>
          </Flex>
        )}
      </Box>
    ) : (
      <></>
    )}
    {children}
    <ReactTooltip />
  </Card>
  // </Zoom>
)

export default CardModel
