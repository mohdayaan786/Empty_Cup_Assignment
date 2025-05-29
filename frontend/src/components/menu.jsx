import message from '../assets/message.svg';
import gallery from '../assets/gallery.svg';
import map from '../assets/map.svg';
import shortlist from '../assets/shortlisted.svg';
import sort from '../assets/sort.svg';

const Menu = ({ showShortlistedOnly, toggleShortlistFilter }) => {
  const containerStyle = {
    width: '360px',
    margin: '50px auto -30px auto',
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '90px',
  };

  const leftSection = {
    display: 'flex',
    gap: '30px',
    marginLeft: '16px',
  };

  const rightSection = {
    display: 'flex',
    gap: '25px',
    marginRight: '16px',
  };

  const iconContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '12px',
    fontFamily: 'Chivo, sans-serif',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={leftSection}>
        <div style={iconContainer}>
          <img src={message} alt="Contacts" style={{ width: 34, height: 42 }} />
          <span style={{ color: '#E0A64E', marginTop: '4px' }}></span>
        </div>
        <div style={iconContainer}>
          <img src={gallery} alt="Gallery" style={{ width: 27, height: 40.5 }} />
          <span style={{ color: '#000', marginTop: '4px' }}></span>
        </div>
        <div style={iconContainer}>
          <img
            src={map}
            alt="Map"
            style={{ width: 17, height: 40.75, opacity: 0.3 }}
          />
          <span style={{ color: '#999', marginTop: '4px' }}></span>
        </div>
      </div>

      <div style={rightSection}>
        <div style={iconContainer} onClick={toggleShortlistFilter}>
          <img
            src={showShortlistedOnly ? shortlist : shortlist}
            alt="Shortlist Filter"
            style={{ width: 42, height: 46 }}
          />
          <span style={{ color: '#000', marginTop: '4px' }}></span>
        </div>
        <div style={iconContainer}>
          <img src={sort} alt="Sort" style={{ width: 31, height: 44 }} />
        </div>
      </div>
    </div>
  );
};

export default Menu;