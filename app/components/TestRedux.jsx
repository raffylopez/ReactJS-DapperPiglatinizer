/*
 * TestRedux.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
var React = require('react')
var redux = require('redux');

class TestRedux extends React.Component {
    store = undefined;
    constructor(props : any) {
        super(props);
        this.state = {};

        var initState = {
            saidHi: false,
            message: "..."
        };

        var reducer = (state = initState, action) => {
            switch (action.type) {
                case 'SAY_HI':
                    return Object.assign(state, {saidHi: true});
                    case 'CHANGE_MESSAGE':
                      return Object.assign(state, {
                        message: action.message
                      })
                default:
                    return state;
            }
            // this shouldn't be reached
        }

        this.store = redux.createStore(reducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
        this
            .store
            .subscribe(() => {
                console.log(this.store.getState());
                document.getElementById("app").innerHTML = this.store.getState().message
            });

        this.method = this
            .method
            .bind(this);

        this
            .store
            .dispatch({type: 'SAY_HI'});
        this
            .store
            .dispatch({type: 'CHANGE_MESSAGE', message: 'aloha'});
        this
            .store
            .dispatch({type: 'CHANGE_MESSAGE', message: 'cool'});
    }

    method() {}

    clicky = () => {
        this
            .store
            .dispatch({type: 'CHANGE_MESSAGE', message:'Danke'});
    }
    // render() {
    //
    //     this
    //         .store
    //         .dispatch({type: 'SAY_HI'});
    //     return (
    //         <div>
    //             This is TestRedux.jsx
    //             <button className="button" onClick={this.clicky}>
    //               {this.store.getState().message}
    //             </button>
    //         </div>
    //     );
    // }
}

TestRedux.propTypes    = {};

TestRedux.defaultProps = {};

module.exports         = TestRedux;

