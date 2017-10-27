import React from 'react';
import PropType from 'prop-types';
import Footer from '../../../containers/Blog/Footer';
import {Button} from 'antd'

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Button type='primary' style={{marginLeft:20}}>2222</Button>
                <Footer/>
            </div>
        )
    }
}

export default Content;