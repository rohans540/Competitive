const appState = require('./scope');
function a() {
    var b = 10;
    function c() {
        console.log(appState.state.name);
    }
    c();
}

a();