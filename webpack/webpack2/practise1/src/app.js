import React from 'react';
import ReactDom from 'react-dom';

class AppComponent extends React.Component{
    render(){
        return (
            <div>Hello ReactJS</div>
        );
    }
}

ReactDom.render(<AppComponent/>, document.getElementById('root'));