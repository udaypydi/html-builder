import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
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

Sidebar.propTypes = {
    customClass: PropTypes.string,
}

export default Sidebar;
