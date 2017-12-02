import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import TagsManage from '../../components/Backend/TagsMansge/TagsManage';
import { request_tags, delete_tag, create_tag } from '../../action'

function mapStateToProps(state) {
    return {
        loading: state.tags.loading,
        tags: state.tags.tags
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleGetTags: bindActionCreators(request_tags, dispatch),
        handleCreateTag: bindActionCreators(create_tag,dispatch),
        handleDeleteTags: bindActionCreators(delete_tag,dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TagsManage);