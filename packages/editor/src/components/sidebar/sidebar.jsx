import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import cx from "classnames";
import sidebarConfig from './sidebar.constant';

import './sidebar.scss';


function Sidebar(props) {
    const { customClass } = props;
    
    return(
        <div className="sidebar">
            <Segment 
                className={cx({
                    "container": true,
                    customClass: true,
                })}
                raised
            >
                {
                    sidebarConfig.map(config => (
                        <Segment className="icon-container">
                            <Icon name={config.icon} style={{ fontSize: 30 }} />
                            <p>{config.name}</p>
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
