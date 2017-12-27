import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import MsgManage from '../../components/Backend/MsgManage/MsgManage';
import { delete_comment, get_all_comment, change_state } from '../../action';

function mapStateToProps(state) {
    return {
        comment: state.comment.allComment,
        loading: state.comment.getAllState,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleGetComment: bindActionCreators(get_all_comment, dispatch),
        handleChangeState: bindActionCreators(change_state,dispatch),
        handleDeleteComment: bindActionCreators(delete_comment,dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(MsgManage);