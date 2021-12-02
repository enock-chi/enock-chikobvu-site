/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import MyStory from 'assets/key-feature/partnership.svg';
import MyAbout from 'assets/key-feature/subscription.svg';
import ContactMe from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: MyAbout,
    altText: 'Hello!',
    title: 'Hello!',
    text:
      'My name is Enock Chikobvu and I am a passionate Frontend Web Developer using web technologies to build amazing products and focusing on solving problems for different niches and different industries using the power of technology.',
  },
  {
    id: 2,
    imgSrc: MyStory,
    altText: 'My Story',
    title: 'My Quick Story',
    text:
      'I first learned code in high school, IT then quickly became one of my favourite subjects and the class I looked forward to most in the day. From there I just never looked back and knew that this was and is what I am meant to do.',
  },
  {
    id: 4,
    imgSrc: ContactMe,
    altText: 'Contact Me',
    title: 'Contact Me',
    text:
      'I would love to hear from you. Whether it is a project, job opportunity, or just a chat. Feel free to contact me. ',
  },
];

export default function AboutMe() {
  return (
    <section sx={{ variant: 'section.keyFeatures' }} id="about">
      <Container>
        <SectionHeader title="About Me" subheading="Personal Info" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
