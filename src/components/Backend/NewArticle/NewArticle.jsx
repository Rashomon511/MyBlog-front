import React from 'react';
import { Input, Button, Select } from 'antd'
import { DatePicker } from 'antd';
import moment from 'moment';
import style from './NewArticle.less';
import ReactQuill from 'react-quill';
import {modules,formats} from '../config/config';
import 'react-quill/dist/quill.snow.css'

const dateFormat = 'YYYY-MM-DD';

class NewArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorHtml: '',}
    }

    handleChange = (html) => {
        console.log(html);
        this.setState({editorHtml: html});
    };

    handleSelect = (value) => {
        console.log(value)
    };


    render() {
        const children = [];
        for (let i = 10; i < 13; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <div className={style.article}>
                <div className={style.box}>
                    <span>文章标题：</span>
                    <Input
                        placeholder="请输入标题"
                        style={{ width: '80%' }}
                    />
                </div>
                <div className={style.box}>
                    <span>文章标签：</span>
                    <Select
                        mode="multiple"
                        style={{ width: '80%' }}
                        placeholder="Please select"
                        defaultValue={['a10', 'c12']}
                        onChange={this.handleSelect}
                    >
                        {children}
                    </Select>
                </div>
                <div className={style.box}>
                    <span>发布时间：</span>
                    <DatePicker defaultValue={moment(new Date, dateFormat)}  />
                </div>
                <div className={style.articleBox}>
                    <p>文章详情：</p>
                    <ReactQuill
                        theme='snow'
                        onChange={this.handleChange}
                        value={this.state.editorHtml}
                        modules={modules}
                        formats={formats}
                        bounds={'.app'}
                        style={{ height:300}}
                        placeholder='请输入文章内容'
                    />
                </div>
                <div className={style.btn}>
                    <Button type="primary" style={{ marginRight: 20 }}>保存草稿</Button>
                    <Button type="primary">提交文章</Button>
                </div>
            </div>

        )
    }
}

export default NewArticle;