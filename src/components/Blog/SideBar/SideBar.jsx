import React from 'react';
import {Link} from 'react-router'
import {Icon} from 'antd'
import style from './SideBar.less';
import {browserHistory} from 'react-router';


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        let urlPath = browserHistory.getCurrentLocation().pathname;
        return (
            <div className={style.wrap}>
                <div className={style.avatarWrap}>
                    <div className={style.avatar}></div>
                    <div className={style.text}><span>以全栈为目标的前端——魑魅魍魉</span></div>
                    <div className={style.address}>四川——成都</div>
                </div>
                <div className={style.resume}>
                    <a href='https://github.com/LuoShengMen' className={style.gitHub}>
                        <Icon type="github" style={{fontSize: 30}}/>
                        <span className={style.name}>Rashomon</span>
                    </a>
                </div>
                <div className={style.routeBtn}>
                    <ul className={style.tab}>
                        <li className={urlPath === "/main/article" ? style.active : ''}>
                            <Link to="/main/article">最新文章</Link>
                        </li>
                        <li className={urlPath === "/main/tags" ? style.active : ''}>
                            <Link to="/main/tags">标签</Link>
                        </li>
                        <li className={urlPath === "/main/resume" ? style.active : ''}>
                            <Link to="/main/resume">关于我</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBar;