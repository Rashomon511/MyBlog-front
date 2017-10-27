import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar/SideBar';
import Content from '../../containers/Blog/Content';


class Index extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    static contextTypes = {
        router: PropTypes.object
    };

    click = () => {
        this.context.router.push('/home')
    }

    render() {
        return (
            <div>
                <SideBar/>
                <Content/>
                <a onClick={this.click}>sss</a>
            </div>
        );
    }
}

export default Index;