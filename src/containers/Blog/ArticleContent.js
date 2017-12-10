import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ArticleContent from '../../components/Blog/Content/ArticleList/ArticleContent/ArticleContent';
import { get_article } from '../../action';

function mapStateToProps(state) {
    return {
        articleContent: state.article.articleContent
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleGetArticle: bindActionCreators(get_article,dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticleContent);