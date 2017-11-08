import React from 'react';
import PropType from 'prop-types';
import style from './NewArticle.less';
import ReactQuill from 'react-quill';
import {modules,formats} from '../config/config';
import 'react-quill/dist/quill.snow.css'


class NewArticle extends React.Component {
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
            <div>
                <ReactQuill
                    theme='snow'
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={modules}
                    formats={formats}
                    bounds={'.app'}
                    style={{height:500}}
                    placeholder='请输入文章内容'
                />
            </div>
        )
    }
}

export default NewArticle;