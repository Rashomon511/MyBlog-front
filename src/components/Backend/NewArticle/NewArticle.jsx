import React from 'react';
import PropType from 'prop-types';
import style from './NewArticle.less';
import ReactQuill from 'react-quill';
import {modules,formats} from '../config/config'


class NewArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorHtml: '',}
    }

    handleChange = (html) => {
        this.setState({editorHtml: html});
    };


    render() {
        return (
            <div>
                <ReactQuill
                    theme="snow"  //编辑器主题
                    value={this.state.editorHtml}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default NewArticle;