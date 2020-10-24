import React from 'react';
import { Segment } from 'semantic-ui-react';

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
            <Segment 
                style={styles.sidebarContainer}
                raised
            >
                <p>Sidebar</p>
            </Segment>
        </div>
    );
}

export default Sidebar;
