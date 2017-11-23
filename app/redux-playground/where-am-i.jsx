var axios = require('axios');
var vavavoom = require('./vavavoom')
var actions = require('./actions')
var store = require('./store/mystore').configurestore()


store.subscribe(() => {
    var state = store.getState();
    var isFetching = state.ipfy.isFetching;
    console.log(`isFetching: ${isFetching}`);
    console.log(state.ipfy.url);
    console.log(state)

    var state = store.getState();
    console.log("ALOHA: " + state.ipfy.isFetching);
    if (state.ipfy.isFetching) {
        document.getElementById("app").innerHTML = "<h1>Loading...</h1>"
    } else {
      document.getElementById("app").innerHTML = `<a href=${state.ipfy.url} target='_blank'>View your location</a>`
    }
});

var performQuery = () => {
  store.dispatch(actions.beginDoSomething())
  store.dispatch(actions.doSomething())
    store.dispatch(actions.startFetch());
    axios
        .get("http://ipinfo.io")
        .then((response) => {
            var location = response.data.loc;
            var url = `https://maps.google.com?q=${location}`;
            store.dispatch(actions.completeLocationFetch(url));
        });
}

vavavoom.foo()

performQuery();
setTimeout(() => {
    document
        .getElementById("app")
        .innerHTML = "<h1>Fooooobar</h1>";
    document
        .getElementById("app")
        .innerHTML = "DSFSDFSDf!<br/>";
    console.log('done');
}, 5000);

