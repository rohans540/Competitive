let clickCount = 0;
const getData = () => {
    //fetching results from the server
    console.log(`${++clickCount} times clicked.`);
}

const debounce = function(fn, delay) {
    
    let timer;

    return function () {
        let context = this.
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, arguments);
        }, delay);
    }
}

const betterFunction = debounce(getData, 300);