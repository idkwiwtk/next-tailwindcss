import { Plus, Upload } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="border p-10 flex items-center gap-5">
      <button>
        <Upload size={24} />
      </button>
      <input
        type="text"
        className="flex-1 px-4 focus:outline-none"
        placeholder="input message..."
      />
      <button>
        <Plus size={24} />
      </button>
    </div>
  );
};

export default ChatInput;
