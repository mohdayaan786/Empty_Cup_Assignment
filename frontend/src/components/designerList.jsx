import { useEffect, useState } from 'react';
import axios from 'axios';
import detailsIcon from '../assets/details.svg';
import hideIcon from '../assets/hide.svg';
import heartOutline from '../assets/heart.svg';
import heartFilled from '../assets/heart-fill.svg';
import reportIcon from '../assets/report.svg';

const DesignerList = ({ showShortlistedOnly }) => {

    const mainContainer = {
        width: '360px',
        height: '284px',
        borderTop: '0.25px solid #D7D7D7',
        margin: '20px auto',
        position: 'relative',
        fontFamily: 'Chivo, sans-serif',
        backgroundColor: '#fff',
        display: 'flex',
    };

    const leftSection = {
        width: '275px',
        padding: '20px',
        position: 'relative',
    };

    const verticalBorder = {
        width: '0.25px',
        height: '237px',
        backgroundColor: '#D0D0D0',
        position: 'absolute',
        top: '20px',
        left: '275px',
    };

    const rightSection = {
        width: '85px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '20px 0',
    };

    const featureIcon = {
        width: '23px',
        height: '22px',
        marginBottom: '12px',
        fontSize: '16px',
        textAlign: 'center',
        color: '#8D4337',
        cursor: 'pointer',
    };



    const [designers, setDesigners] = useState([]);
    const [shortlistedIds, setShortlistedIds] = useState(new Set());

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/designs')
            .then(res => setDesigners(res.data))
            .catch(err => console.error('Error fetching designs:', err));
    }, []);

    const toggleShortlist = (id) => {
        setShortlistedIds((prev) => {
            const newSet = new Set(prev);
            newSet.has(id) ? newSet.delete(id) : newSet.add(id);
            return newSet;
        });
    };

    const ratingStars = (rating) => '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
    const filteredDesigners = showShortlistedOnly
        ? designers.filter(d => shortlistedIds.has(d._id))
        : designers;

    return (
        <div>
            {filteredDesigners.map((designer) => (
                <div key={designer._id} style={mainContainer}>
                    <div style={leftSection}>
                        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', width: '218px' }}>{designer.title}</h2>
                        <div style={{ fontSize: '23px', color: '#000', marginBottom: '8px', width: '96px' }}>{ratingStars(designer.rating)}</div>
                        <p style={{ fontSize: '10px', width: '211px', marginBottom: '20px', color: '#000000', marginTop: '15px' }}>{designer.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '220px', marginBottom: '30px' }}>
                            <div style={{ textAlign: 'left', width: '47px' }}>
                                <div style={{ fontSize: '24px', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>{designer.NoOfProjects}</div>
                                <div style={{ fontSize: '12px' }}>Projects</div>
                            </div>
                            <div style={{ textAlign: 'left', width: '47px' }}>
                                <div style={{ fontSize: '24px', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>{designer.Year}</div>
                                <div style={{ fontSize: '12px', marginLeft: '10px' }}>Years</div>
                            </div>
                            <div style={{ textAlign: 'left', width: '47px', padding: '0 4px' }}>
                                <div style={{ fontSize: '24px', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>{designer.price}</div>
                                <div style={{ fontSize: '12px', marginLeft: '10px' }}>Price</div>
                            </div>
                        </div>
                        <div style={{ fontSize: '16px', width: '200px', marginBottom: '4px' }}>+91 - {designer.mobileNumber}</div>
                        {designer.alternativeMobileNumber && (
                            <div style={{ fontSize: '16px', width: '200px' }}>
                                +91 - {designer.alternativeMobileNumber}
                            </div>
                        )}
                    </div>

                    <div style={verticalBorder}></div>

                    <div style={rightSection}>
                        <div style={featureIcon}>
                            <img src={detailsIcon} alt="Details" style={{ width: '23px', height: '22px' }} />
                            <br /><span style={{ fontSize: '8px' }}>Details</span>
                        </div>
                        <div style={featureIcon}>
                            <img src={hideIcon} alt="Hide" style={{ width: '23px', height: '22px' }} />
                            <br /><span style={{ fontSize: '8px' }}>Hide</span>
                        </div>
                        <div style={featureIcon} onClick={() => toggleShortlist(designer._id)}>
                            <img
                                src={shortlistedIds.has(designer._id) ? heartFilled : heartOutline}
                                alt="Shortlist"
                                style={{ width: '23px', height: '22px' }}
                            />
                            <br /><span style={{ fontSize: '8px' }}>Shortlist</span>
                        </div>
                        <div style={featureIcon}>
                            <img src={reportIcon} alt="Report" style={{ width: '23px', height: '22px' }} />
                            <br /><span style={{ fontSize: '8px' }}>Report</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DesignerList;
