import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './components/axios';
import Login from './components/login';
import { useStateValue } from './StateProvider';

function App() {
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    axios.get("/messages/sync").then(res => {
      setMessages(res.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('1616452', {
      cluster: "mt1",
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages(prevMessages => [...prevMessages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  console.log(messages);
  return (
    <div className="App">
      {!user ? <Login setUser={setUser} /> : (
        <div className="app__body">
          <Sidebar messages={messages} />
          <Chat messages={messages} />
        </div>
      )}
    </div>
  );
}

export default App;
