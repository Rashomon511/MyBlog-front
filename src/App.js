import React,{Component} from 'react';
import style from './components/Blog/index.less'

class App extends Component{
    render (){
        return (
            <div className={style.app}>
                {this.props.children}
            </div>
        );
    }
}

export default App