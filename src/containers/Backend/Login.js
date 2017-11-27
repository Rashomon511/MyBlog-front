import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Login from '../../components/Backend/Login/Login';
import { request_login } from '../../action/index';

function mapStateToProps(state) {
    return {
        loginState: state.login.loginState,
        token: state.login.token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogin: bindActionCreators(request_login, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);