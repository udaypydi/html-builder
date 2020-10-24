import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import sidebarConfig from './sidebar.constant';

const styles = {
    sidebarContainer: {
         width: '20%', 
         height: '100vh', 
         backgroundColor: '#ffffff', 
         border: '1px solid #ccc',
         display: 'flex',
         alignItems: 'flex-start',
         justifyContent: 'space-evenly',
         flexWrap: 'wrap'
    },

    iconContainer: {
        height: 100,
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    }
};

function Sidebar(props) {
    return(
        <div>
            <Segment 
                style={styles.sidebarContainer}
                raised
            >
                {
                    sidebarConfig.map(config => (
                        <Segment style={styles.iconContainer}>
                            <Icon name={config.icon} style={{ fontSize: 30 }} />
                        </Segment>
                    ))
                }
            </Segment>
        </div>
    );
}

export default Sidebar;
