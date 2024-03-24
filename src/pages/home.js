import React from 'react';
import axios from 'axios';

function Home() {

  const [messages, setMessages] = React.useState([]);
  const [message, setmessage] = React.useState('');
  const bottomE = React.useRef(null);

  
  const scrollToBottom = () => {
    bottomE.current?.scrollIntoView({ behavior: 'smooth', block: 'center'});
  };
  

  React.useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        addtoChat(sendToRasa);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  },[message, messages]);


  function addtoChat(myCallback){

    let appendToMessages = [...messages, {
      "sender": 'me',
      "message": message
    }];
    setMessages(appendToMessages);
    setmessage('');
    scrollToBottom();
    myCallback(appendToMessages);   

  }
  

  function sendToRasa(old_chat){

    axios.post(' http://localhost:5005/webhooks/rest/webhook', {
      "sender": 'me',
      "message": message
    })
    .then(function (response) {
      response.data?.map( msg=> {
        console.log(msg);
        if(msg.recipient_id == 'me'){
          var chats = [...old_chat, {
            "sender": 'bot',
            "message": msg.text,
            "imgurl": msg.image
          }]
          setMessages(chats);
          old_chat = [...chats];
        }
      })
      scrollToBottom();
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  return (
      
    <div className='w-full h-screen'>
      <div className='chatbox w-1/3 fixed right-0 bottom-0 h-2/3 shadow-2xl text-white'>
        
        {/* <div className='chat-head bg-gray-900 p-5'>
          <h1>ChatRoom</h1>
        </div>
        <div className='chat-body h-full'>
          <ul className='w-full'>
            <li className='flex p-2 items-center gap-4 shadow-lg'>
              <div className='px-5 py-3 bg-gray-900 rounded-full'>
                <h1>A</h1>
              </div>
              <p className='text-black'>Aziz</p>
            </li>
          </ul>
        </div> */}

        <div className='chat-head flex px-2 items-center gap-4 shadow-lg bg-gray-900 h-1/5'>
            <div className='px-5 py-3 bg-white rounded-full text-black'>
              <h1>A</h1>
            </div>
            <p className=''>Chatbot</p>
        </div>
        <div className='chat-body h-4/5 relative'>
          <div className='h-full p-2 overflow-y-auto'>
            <ul className='w-full grid grid-cols-1 gap-2'>
              {
                messages.map(chat=>{
                  return (
                    <li className={'w-full flex ' + (chat.sender == 'me' ? 'justify-start' : 'justify-end')}>
                      {chat.message?<p className={'w-1/2 px-4 py-2 rounded-lg ' + (chat.sender == 'me' ? 'bg-gray-900' : 'bg-blue-400')}>{chat.message}</p>
                      :<img className='w-1/2 h-32 object-fit rounded-lg' src={`${chat.imgurl}`} />}
                    </li>
                  )
                })
              }
            </ul>
            <div className='h-24' ref={bottomE}></div>
            <div className='w-full bg-white absolute bottom-0 left-0 p-2 flex gap-2 justify-around'>
              <input value={message} onChange={(event)=>setmessage(event.target.value)} className='w-4/5 rounded-md px-2 py-1 bg-gray-200 focus:outline-none text-black' type="text" placeholder='Enter your message' />
              <i onClick={addtoChat} className="fa-solid fa-circle-play text-pink-400 text-2xl cursor-pointer"></i>
            </div>
          </div>
          
        </div>
      </div>
    </div>  

  );

}
  
export default Home;
