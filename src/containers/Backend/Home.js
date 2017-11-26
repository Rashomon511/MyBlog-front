import {connect} from 'react-redux';
import Home from '../../components/Backend/Home/Home';

function mapStateToProps(state) {
    return {
        data: state.login.data
    };
}

function mapDispatchToProps() {
    return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);