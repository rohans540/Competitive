//Waiting for the page to load
document.addEventListener('DOMContentLoaded', () => {
//Open a new Websocket connection
    let socket = new WebSocket('wss://echo.websocket.org');

//Grab elements
    let dmInput = document.getElementById('dm-id');
    let groupInput = document.getElementById('group-input');
    let dmList = document.getElementById('dm-list');
    let groupList = document.getElementById('group-list');

//Setting the heading when connection is open
    socket.onopen = event => {
        document.getElementById('socket-status').innerText = "Socket is Open";
    };

//Setting the heading when connection is closed
    socket.onclose = event => {
        document.getElementById('socket-status').innerText = "Socket is Closed";
    }

//When message is received
    socket.onmessage = event => {
        let messageData = JSON.parse(event.data);
        let newMessage = document.createElement('li');
        newMessage.innerText = messageData.message;

        if(messageData.action === 'group') {
            groupList.append(newMessage);
        } else {
            dmList.append(newMessage);
        }
    }
//When message is sent
    Array.from(document.getElementsByTagName('input')).forEach(input => {
        input.addEventListener('keydown', event => {
                if(event.keyCode === 13) {
                    if(event.target.value.length > 0) {
                        let messageData = {
                            message: event.target.value
                        }
                        if(event.target.id === 'group-input') {
                            messageData.action = 'group';
                        } else {
                            messageData.action = 'dm';
                        }
                        socket.send(JSON.stringify(messageData));
                        event.target.value = '';
                    } else {
                        alert("Can't send empty messages");
                    }
                    
                }
        })
    })
})