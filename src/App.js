import React,{Component} from 'react';

class App extends Component{
    render (){
        return (
            <div>
                {this.props.children}
                <div class="layout-copy">
                    2017- &copy; Rashomon
                </div>
            </div>
        );
    }
}

export default App