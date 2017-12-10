import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ArticleList from '../../components/Blog/Content/ArticleList/ArticleList';
import { request_article, request_tags } from "../../action/index";

function mapStateToProps(state) {
    return {
        article: state.article.articleList,
        loading: state.article.requestState,
        allTags: state.tags.tags
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleRequestArticle: bindActionCreators(request_article,dispatch),
        handleGetTags: bindActionCreators(request_tags, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);