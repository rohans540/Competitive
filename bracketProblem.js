class Stack {
    constructor(){
        this.items = [];
    };

    pushIn(item) {
        this.items.push(item);
    };

    popOut(item) {
        if(this.items.length == 0)
            return "Stack UnderFlow";
        return this.items.pop();
    };

    peekTop() {
        return this.items[this.items.length - 1]
    };

    printStack() {
        this.items.map((ele) => console.log(ele));
    }

    isEmpty() {
        return this.items.length === 0;
    }
};

const checkBracket = (str) => {
    const newStack = new Stack();
    // let result = true;
    // console.log("Stack initialized");
    for(let ch of str) {
        if(ch === '(' || ch === '{' || ch === '[') {
            newStack.pushIn(ch);
        }
        else {
            if(newStack.isEmpty())
                return false;
            const topChar = newStack.peekTop();
            let popEle = "";
            if(topChar === '('){
                if(ch !== ')')
                    return false;
                else
                    popEle = newStack.popOut();
            }
            if(topChar === '{') {
                if(ch !== '}')
                    return false;
                else
                    popEle = newStack.popOut();
            }
            if(topChar === '[') {
                if(ch !== ']')
                    return false;
                else
                    popEle = newStack.popOut();
            }

        }
    }
    if(newStack.isEmpty()) {
        return true;
    } else {
        return false;
    }
    newStack.printStack();

}

//Tests to check edge cases=======================================

//Test case 1:
if(checkBracket("[{()}]"))
    console.log("Balanced");
else
    console.log("Unbalanced");

//Test case 2:
if(checkBracket("[{()}}"))
    console.log("Balanced");
else
    console.log("Unbalanced");

//Test case 3:
if(checkBracket("{}"))
    console.log("Balanced");
else
    console.log("Unbalanced");

//Test case 4:
if(checkBracket("[{}"))
    console.log("Balanced");
else
    console.log("Unbalanced");

//Test case 4:
if(checkBracket(""))
    console.log("Balanced");
else
    console.log("Unbalanced");