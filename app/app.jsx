var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main')
var SimpleTest = require('SimpleTest')
var TodoApp = require('TodoApp')
// var TestRedux = require('TestRedux')
var ReduxEngaged = require('ReduxEngaged')
// var WhereAmI = require('./redux-playground/where-am-i.jsx')
var PcConfigurator = require('PcConfigurator')
var ColorMeBaddApp = require('ColorMeBaddApp')
var AwesomeRedux = require('AwesomeRedux')
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var ReduxLocalStorageApp = require('./components/ReduxLocalStorageApp.jsx');
var ReduxVanillaCounter = require('ReduxVanillaCounter');
var ReactVanillaCounterApp = require('ReactVanillaCounterApp');
var TodoPartDeux = require('TodoPartDeux');
var SyncedTypingApp = require('SyncedTypingApp');
// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   (
//   <Router history={ hashHistory }>
//     <Route path="/" component={Main}>
//       <IndexRoute component={TodoApp} />
//       <Route path="foo" component={SimpleTest} />
//       <Route path="pc-configurator" component={PcConfigurator} />
//       {#<{(| <Route path="test-redux" component={TestRedux} /> |)}>#}
//       {#<{(| <Route path="where-am-i" component={WhereAmI} /> |)}>#}
//       <Route path="redux-engaged" component={ReduxEngaged} />
//       <Route path="awesome-redux" component={AwesomeRedux} />
//       <Route path="color-me-badd" component={ColorMeBaddApp} />
//       <Route path="redux-localstorage" component={ReduxLocalStorageApp} />
//       <Route path="react-counter" component={ReactVanillaCounterApp} />
//       <Route path="redux-counter" component={ReduxVanillaCounter} />
//       <Route path="todo-2" component={TodoPartDeux} />
//       <Route path="synced-typing" component={SyncedTypingApp} />
//     </Route>
//   </Router>
//   ),
//   document.getElementById('app')
// );
//
require('app/components/FirebaseExperiment2.jsx')
