import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import TagList from '../../components/Blog/Content/Tags/TagList/TagList';
import { get_article_list } from '../../action';

function mapStateToProps(state) {
    return {
        articleList: state.article.lists,
        loading: state.article.getListState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleGetArticle: bindActionCreators(get_article_list,dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TagList);