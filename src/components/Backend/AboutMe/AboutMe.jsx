import React from 'react';
import { Button } from 'antd';
import style from './AboutMe.less';
import ReactQuill from 'react-quill';
import {modules,formats} from '../../../config/config';
import 'react-quill/dist/quill.snow.css'

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorHtml: '',}
    }

    handleChange = (html) => {
        console.log(html);
        this.setState({editorHtml: html});
    };

    render() {
        return (
            <div className={style.aboutMe}>
                <div className={style.resume}>
                    <ReactQuill
                        theme='snow'
                        onChange={this.handleChange}
                        value={this.state.editorHtml}
                        modules={modules}
                        formats={formats}
                        bounds={'.app'}
                        style={{ height:400}}
                        placeholder='请输入文章内容'
                    />
                </div>
                <div className={style.btn}>
                    <Button type="primary">提交</Button>
                </div>
            </div>
        )
    }
}

export default AboutMe;