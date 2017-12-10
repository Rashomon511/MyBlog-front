import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Tags from '../../components/Blog/Content/Tags/Tags';
import { request_tags } from '../../action';

function mapStateToProps(state) {
    return {
        tags: state.tags.tags
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleGetTags: bindActionCreators(request_tags, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Tags);