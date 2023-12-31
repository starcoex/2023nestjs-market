import classnames from "@/libs/utils";

interface MessageProps {
  message: string;
  reversed?: boolean;
  avataUtl?: string;
}

export default function Message({ message, reversed, avataUtl }: MessageProps) {
  return (
    <div
      className={classnames(
        "flex  items-start",
        reversed ? "flex-row-reverse space-x-reverse space-x-2" : "space-x-2"
      )}
    >
      <div className="w-8 h-8 rounded-full bg-slate-400" />
      <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
        <p>{message}</p>
      </div>
    </div>
  );
}
