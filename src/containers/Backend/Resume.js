import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import AboutMe from '../../components/Backend/AboutMe/AboutMe';
import { request_resume, submit_resume } from "../../action/index";

function mapStateToProps(state) {
    return {
        resume: state.resume.resume
    };
}

function mapDispatchToProps(dispatch) {
    return {
        requestResume: bindActionCreators(request_resume,dispatch),
        submitResume: bindActionCreators(submit_resume,dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);