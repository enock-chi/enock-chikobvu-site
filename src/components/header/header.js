/** @jsx jsx */
import { jsx, Container, Flex, Button, Box } from 'theme-ui';
import { css, keyframes } from '@emotion/css';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/Escape Designs..jpg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((item, i) => (
            <Link
              activeClass="active"
              to={item.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
              sx={styles.nav.items}
            >
              {item.label}
            </Link>
          ))}
        </Flex>
        <Button
          className="getToKnow_btn"
          sx={{ variant: 'buttons.secondary' }}
          aria-label="Get to know me"
        >
          Get to know me
        </Button>
        <MobileDrawer />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.getToKnow__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 1024px)': {
      display: 'none',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
