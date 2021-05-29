import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const projectID = "95d18c2b-f1be-4973-b936-d2a54b284039"

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine height="100vh" projectID={projectID} userName={localStorage.getItem("username")} userSecret={localStorage.getItem("password")} renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} onNewMessage={() => new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()} />
  );
};

export default App;
