var john_button=document.getElementById('John-selector');
var jane_button=document.getElementById('Jane-selector');
var chat_header=document.getElementsByClassName("Chat-Header");
var chat_messages=document.querySelector('.chat-messages');
var chat_input=document.querySelector('.chat-input');
var send_button=Array.from(document.getElementsByClassName('send-button'));
var reset_button=document.querySelector('.reset-button');


//initialize garney kaam sakyo//

//adding the message,sender,timestamp to html element//
function newMessage(message)
{    
    var messageContainer=document.createElement('div');
    if (message.sender=='John') {
     var senderContainer=document.createElement('div');
     var textcontainor=document.createElement('div');
     var timecontanior=document.createElement('div');
     messageContainer.className="blue-color message";
     senderContainer.className="message-sender";
     textcontainor.className="message-text";
      timecontanior.className="message-time";
     senderContainer.innerHTML=message.sender;
     textcontainor.innerHTML=message.message;
     timecontanior.innerHTML=message.timestamp;
     messageContainer.appendChild(senderContainer);
     messageContainer.appendChild(textcontainor);
     messageContainer.appendChild(timecontanior);
     chat_messages.appendChild(messageContainer); 
    }
    else{
        console.log(message.timestamp);
        var senderContainer=document.createElement('div');
        var textcontainor=document.createElement('div');
        var timecontanior=document.createElement('div');
        messageContainer.className="gray-color message";
        senderContainer.className="message-sender";
        textcontainor.className="message-text";
         timecontanior.className="message-time";
        senderContainer.innerHTML=message.sender;
        textcontainor.innerHTML=message.message;
        timecontanior.innerHTML=message.timestamp;
        messageContainer.appendChild(senderContainer);
        messageContainer.appendChild(textcontainor);
        messageContainer.appendChild(timecontanior);
        chat_messages.appendChild(messageContainer); 


    }    


}

let messageSender='John';
function messageSenderfunction(name){  
    chat_input.focus();
    messageSender=name;
    chat_header[0].innerHTML=`${messageSender} chatting...........`;    
    chat_input.placeholder=`Type here ${messageSender }`;

    if (name=="John") {
        john_button.classList.add("active-person");
        jane_button.classList.remove("active-person");
        
    }
    else{
        john_button.classList.remove("active-person");
        jane_button.classList.add("active-person");
    }
    
}
john_button.onclick = function () {
     messageSenderfunction('John');
};

jane_button.onclick = function () {
    messageSenderfunction('Jane');
};

send_button[0].onclick=function (e) {
    messagesend(e);
}
  
var  messagesend=(e)=>{
    e.preventDefault();
    const currDate=new Date();
    let hours=currDate.getHours();
    const minutes=currDate.getMinutes();
    var AmOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    var time=0;
    if (minutes<10){
     time=`${hours}:0${minutes} ${AmOrPm}`;
     
    }
    else{
     time=`${hours}:${minutes} ${AmOrPm}`;
    }
    
    const mymessage={
       sender:messageSender,
       message:chat_input.value,
       timestamp:time
       


    };

if (mymessage.message=='') {  
    window.alert('Cannot Send Empty Messages');
}
else{
newMessage(mymessage);
chat_input.value=null;
chat_messages.scrollTop=chat_messages.scrollHeight;
var audioelement=new Audio("1.mp3");
audioelement.play();
}
}

reset_button.onclick=function () {
    clearchat();
}
function clearchat(){
   var a= window.confirm('ALL MESSAGES WILL BE DELETED');
   console.log(a);
   if(a==true){
    chat_messages.innerHTML="";
}
}

