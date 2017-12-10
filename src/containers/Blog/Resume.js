import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import AboutMe from '../../components/Blog/Content/AboutMe/AboutMe';
import { request_resume } from "../../action/index";

function mapStateToProps(state) {
    return {
        resume: state.resume.resume
    };
}

function mapDispatchToProps(dispatch) {
    return {
        requestResume: bindActionCreators(request_resume,dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);