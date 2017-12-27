import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ArticleContent from '../../components/Blog/Content/ArticleList/ArticleContent/ArticleContent';
import { get_article, get_comment, submit_comment } from '../../action';

function mapStateToProps(state) {
    return {
        articleContent: state.article.articleContent,
        comment: state.comment.comment,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleGetArticle: bindActionCreators(get_article,dispatch),
        handleGetComment: bindActionCreators(get_comment,dispatch),
        handleSubmitComment: bindActionCreators(submit_comment,dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticleContent);