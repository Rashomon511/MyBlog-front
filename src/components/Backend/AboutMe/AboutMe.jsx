import React from 'react';
import { Button, message } from 'antd';
import ReactQuill from 'react-quill';
import style from './AboutMe.less';
import {modules,formats} from '../../../config/config';
import 'react-quill/dist/quill.snow.css'

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorHtml: '',}
    }

    componentDidMount(){
        const { requestResume } = this.props;
        requestResume();
    }

    handleChange = (html) => {
        console.log(html);
        this.setState({editorHtml: html});
    };

    submitResume = () => {
      const { editorHtml } = this.state;
      const { submitResume } = this.props;
      const auth = JSON.parse(localStorage.getItem('auth'));
      if(auth){
          submitResume({content:editorHtml})
      } else {
          message.warning('抱歉，您没有权限！');
      }
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
                    <Button type="primary" onClick={this.submitResume}>提交</Button>
                </div>
            </div>
        )
    }
}

export default AboutMe;