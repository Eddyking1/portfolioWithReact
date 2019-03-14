import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';


const Mydata = {
    nick: 'Edward',
    email: 'Edward.kumerius@kyh.se'
}

ReactDOM.render((
<HashRouter>
    <App {...Mydata}/>
</HashRouter>
), document.getElementById('root'));

