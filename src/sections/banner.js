/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/Design inspiration-pana.svg';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary" sx={styles.banner.heading}>
            Hello There,
          </Heading>
          <Heading as="h1" variant="heroPrimary">
            I am Enock Chikobvu.
          </Heading>
          <Text as="p" variant="heroSecondary">
            You have a dream, let me get you there?
          </Text>
          <Button variant="primary">Contact Me</Button>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg}></Image>
          <div sx={styles.banner.circle}></div>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    height: 'auto',
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      position: 'relative',
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        height: [245, '25rem'],
        position: 'relative',
        //height: '18rem',
      },
    },
    heading: {
      color: '#EA3A60',
    },
    circle: {
      position: 'absolute',
      backgroundColor: '#EA3A60',
      height: [245, '25rem'],
      width: [245, '35rem'],
      top: '2rem',
      borderRadius: '50%',
      zIndex: -3,
    },
  },
};
