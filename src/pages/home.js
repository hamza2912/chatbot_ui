import React from 'react';
import { getDatabase, ref, set, onValue, push } from "firebase/database";

function Home() {

  const [activeChat, setactiveChat] = React.useState({});
  const [showChat, setshowChat] = React.useState(false);
  const [chats, setChats] = React.useState([]);
  const [messages, setMessages] = React.useState({});
  const [message, setmessage] = React.useState('');
  const [messageIsAdded, setmessageIsAdded] = React.useState(false);
  const db = getDatabase(); 
  const bottomE = React.useRef(null);
  const [userId, setuserId] = React.useState('hamza2912');

  
  const scrollToBottom = () => {
    bottomE.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  React.useEffect(() => {
    // firebase
    // var chats = []
    // const user = ref(db, 'users/' + userId);
    // onValue(user, (snapshot) => {
    //     if(snapshot.val()){
    //       chats = snapshot.val().mychats;
    //       const mychat = ref(db, 'chatroom/' + chats[0]);
    //       onValue(mychat, (snapshot) => {
    //         if(snapshot.val()){
    //           setMessages(snapshot.val().messages)
    //         }
    //       });
    //     }
    // });
    // console.log(messages);
    
    
    // set(ref(db, 'users/' + userId), {
    //   username: userId,
    //   name: 'Hamza',
    //   profile_picture : 'H',
    //   mychats : ['chat-1']
    // });

    // set(ref(db, 'chatroom/chat-1'), {
    //   date: '2023-8-26',
    //   messages : {
         
    //   }
    // });
    
    // listener
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        addtoChat();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  },[messageIsAdded]);

  function addtoChat(){
    console.log(message);
    const getMessages = ref(db, 'chatroom/chat-1/messages');
    const appendToMessages = push(getMessages);
    set(appendToMessages, {sender: userId, message: message});
    // setChats(prevState => [...prevState, {type: "sender", message: message}])
    setmessage('');
    scrollToBottom();
    setmessageIsAdded(!messageIsAdded)
  }

  return (
      
    <div className='w-full h-screen'>
      <div className='chatbox w-1/4 fixed right-0 bottom-0 h-2/3 shadow-2xl text-white'>
        
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
            <p className=''>Aziz</p>
        </div>
        <div className='chat-body h-4/5 relative'>
          <div className='h-full p-2 overflow-y-auto'>
            {/* <ul className='w-full grid grid-cols-1 gap-2'>
              {
                messages.map(chat=>{
                  return (
                    <li className={'w-full flex ' + (chat.sender == userId ? 'justify-start' : 'justify-end')}>
                      <p className={'w-1/2 px-4 py-2 rounded-lg ' + (chat.sender == userId ? 'bg-gray-900' : 'bg-blue-400')}>{chat.message}</p>
                    </li>
                  )
                })
              }
            </ul> */}
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
