/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  const imageStyle = {
    height: 50,
    width: 50,
    borderRadius: 50,
    margin: 10,
  };

  const pStyles = {
    position: 'relative',
    top: 6,
    marginLeft: 10,
    color: 'black',
  };

  return (
    <Link
      path="/"
      sx={{
        variant: 'link.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src} alt="Enock-Chikobvu Portfolio" style={imageStyle} />
      <p style={pStyles}>Escape Designs.</p>
    </Link>
  );
}
