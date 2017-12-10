import React from 'react';
import PropTypes from 'prop-types';
import style from './Tags.less';

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount(){
        const { handleGetTags } = this.props;
        handleGetTags()
    }

    onClick = (e) =>{
        const self=e.currentTarget;
        return this.context.router.push('/main/tagList/?id='+self.id+'&name='+self.innerHTML);
    };

    renderTag = () => {
        const { tags } = this.props;
        const Tag=tags.map((item,index)=>{
            return (<a
                key={index}
                id={item._id}
                onClick={this.onClick}
                style={{ fontSize: Math.ceil(Math.random()*10) + 16, marginLeft:10, marginRight: 10, color: '#696969'}}
            >
                {item.content}
                </a>)
        });
        return Tag;
    };

    render() {
        const { tags } = this.props;
        return (
            <div className={style.tags}>
                <p className={style.title}>Tags</p>
                <hr/>
                <p className={style.number}>
                    共计
                    <span style={{ color: '#000', fontSize:18 }}> {tags.length} </span>
                    个标签
                </p>
                <div className={style.tagName}>
                    {this.renderTag()}
                </div>
            </div>
        )
    }
}

export default Tags;