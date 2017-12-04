import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ArticleManage from '../../components/Backend/ArticleManage/ArticleManage';
import { request_article, delete_article } from "../../action/index";

function mapStateToProps(state) {
    return {
        article: state.article.articleList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleRequestArticle: bindActionCreators(request_article,dispatch),
        handleDeleteArticle: bindActionCreators(delete_article,dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticleManage);