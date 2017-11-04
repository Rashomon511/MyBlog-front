import React from 'react';
import {Button,Avatar} from 'antd'
import style from './SideBar.less';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.avatarWrap}>
                    <div className={style.avatar}></div>
                    <div className={style.text}><span>以全栈为目标的前端——魑魅魍魉</span></div>
                    <div className={style.address}>四川——成都</div>
                </div>
                <div className={style.resume}>
                    名字
                </div>
                <div className={style.routeBtn}>
                    <Button>最新文章</Button>
                    <Button>标签</Button>
                    <Button>我的简历</Button>
                </div>
            </div>
        )
    }
}

export default SideBar;