import { dotStream } from 'ldrs'
dotStream.register()

export default function Loader() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}><l-dot-stream size="100" speed="2.5" color="aqua"></l-dot-stream></div>
  );
}