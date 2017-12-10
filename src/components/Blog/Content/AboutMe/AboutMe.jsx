import React from 'react';
import style from './AboutMe.less';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        const { requestResume } = this.props;
        requestResume();
    }

    render() {
        return (
            <div className={style.resume}>
                <p className={style.title}>AboutMe</p>
                <hr/>
                <ReactQuill
                    readOnly
                    theme='bubble'
                    value={this.props.resume.content}
                >
                </ReactQuill>
            </div>
        )
    }
}

export default AboutMe;