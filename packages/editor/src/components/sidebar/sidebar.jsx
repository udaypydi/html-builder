import React from 'react';

const styles = {
    sidebarContainer: {
         width: '20%', 
         height: '100vh', 
         backgroundColor: '#ffffff', 
         border: '1px solid #ccc',
    }
};

function Sidebar(props) {
    return(
        <div>
            <div style={styles.sidebarContainer} >
                <p>Sidebar</p>
            </div>
        </div>
    );
}

export default Sidebar;
