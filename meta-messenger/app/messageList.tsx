"use client";

import useSWR from "swr";
import { Message } from "../types";
import fetcher from "../utils/fetchMessages";
import { MessageComponent } from "./messageComponent";

export const MessageList = () => {
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);
  return (
    <div>
      {messages?.map((message) => {
        return <MessageComponent key={message.id} message={message} />;
      })}
    </div>
  );
};
