import { cn } from "@/lib/utils";
import { dateToString } from "@/shared/lib/date";

export interface ChatMessageProps {
  message: string;
  sender: string;
  time: Date;
}

const ChatMessage = (props: ChatMessageProps) => {
  const { message, sender, time } = props;
  return (
    <div
      className={cn("flex", sender === "me" ? "justify-end" : "justify-start")}
    >
      <div>
        <div>{message}</div>
        <div>{dateToString(time)}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
