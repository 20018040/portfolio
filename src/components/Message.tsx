interface MessageProps {
  welcome: string;
  size?: number; // optional
  color?: string; // optional
}

const Message = ({ welcome, size = 24, color = "#faf8f8ff" }: MessageProps) => {
  return <h1 style={{ fontSize: size, color: color }}>{welcome}</h1>;
};

export default Message;
