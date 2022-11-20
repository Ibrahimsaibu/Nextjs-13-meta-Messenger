import { ChatInput } from "./chatInput";
import { Header } from "./header";
import { MessageList } from "./messageList";

function HomePage() {
  return (
    <main>
      {/* MessageList */}
      <MessageList />
      {/* chatInput */}
      <ChatInput />
    </main>
  );
}

export default HomePage;
