import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import sidebarConfig from './sidebar.constant';
import './sidebar.scss';


function Sidebar(props) {
    return(
        <div className="sidebar">
            <Segment 
                className="container"
                raised
            >
                {
                    sidebarConfig.map(config => (
                        <Segment className="icon">
                            <Icon name={config.icon} style={{ fontSize: 30 }} />
                        </Segment>
                    ))
                }
            </Segment>
        </div>
    );
}

export default Sidebar;
