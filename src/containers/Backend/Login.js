import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Login from '../../components/Backend/Login/Login';
import { request_login } from '../../action/index';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogin: bindActionCreators(request_login, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);