import React from 'react';
import SideBar from './SideBar/SideBar';
import style from './index.less';
import Footer from '../Blog/Footer/Footer';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className={style.wrap}>
                <SideBar/>
                <div className={style.main}>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Index;