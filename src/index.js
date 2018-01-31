import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import store from './redux/store'


//生成一个store对象

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

store.subscribe(function render() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
})

//或者

// function render() {
//     ReactDOM.render(<App store={store}/>, document.getElementById('root'));
// }
// render()
//
// store.subscribe(render)
