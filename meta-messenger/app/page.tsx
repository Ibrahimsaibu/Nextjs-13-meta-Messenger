import { unstable_getServerSession } from "next-auth";
import { Message } from "../types";
import { ChatInput } from "./chatInput";
import { Header } from "./header";
import { MessageList } from "./messageList";
import Providers from "./providers";

async function HomePage() {
  const data = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`
  ).then((res) => res.json());

  const messages: Message[] = data.messages;

  const session = await unstable_getServerSession();
  return (
    <Providers session={session}>
      <main>
        {/* MessageList */}
        <MessageList initialMessages={messages} />
        {/* chatInput */}
        <ChatInput session={session} />
      </main>
    </Providers>
  );
}

export default HomePage;
