import logo from '../assets/logo.png';
import dots from '../assets/three-dots-vertical.svg';

const Header = () => {
  const styles = {
    container: {
      width: '360px',
      position: 'relative',
      top: '72px',
      transform: 'rotate(-0.16deg)',
      borderBottom: '0.25px solid #ccc',
      margin: '0 auto',
      padding: '10px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
    },
    logo: {
      width: '31px',
      height: '31px',
      marginLeft: '20px',
    },
    title: {
      fontSize: '20px',
      fontWeight: '600',
      textAlign: 'center',
      flexGrow: 1,
      color: '#716966',
    },
    icon: {
      width: '27px',
      height: '27px',
      marginRight: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <img
        src={logo}
        alt="Logo"
        style={styles.logo}
      />
      <div style={styles.title}>EmptyCup</div>
      <button
        onClick={console.log('Menu clicked')}
        style={{
          ...styles.icon,
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer'
        }}
      >
        <img
          src={dots}
          alt="Menu"
          style={{ width: '100%', height: '100%' }}
        />
      </button>
    </div>
  );
};

export default Header;