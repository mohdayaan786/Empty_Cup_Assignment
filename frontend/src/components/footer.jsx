import arrowIcon from '../assets/details.svg';

const Footer = () => {
  const footerStyle = {
    width: '100%',
    maxWidth: '360px',
    height: '59px',
    borderTop: '0.25px solid #D7D7D7',
    backgroundColor: '#FFFCF2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    boxSizing: 'border-box',
    margin: '0 auto',
    marginTop: '24px',
  };

  const textStyle = {
    fontFamily: 'Chivo, sans-serif',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '100%',
    color: '#000',
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
  };

  return (
    <div style={footerStyle}>
      <div style={textStyle}>House of designs</div>
      <img src={arrowIcon} alt="Arrow" style={iconStyle} />
    </div>
  );
};

export default Footer;
