import Image from "next/image";
import React from "react";
import { Message } from "../types";

type MessageComponentProps = {
  message: Message;
};

export const MessageComponent = ({ message }: MessageComponentProps) => {
  return (
    <div>
      <div>
        <Image
          className="rounded-full mx-2"
          src={message.profilePic}
          alt="Profile Picture"
          width={42}
          height={42}
        />
      </div>
    </div>
  );
};
