import { load } from '@shadow-bridge/preact';
import { useState } from 'preact/hooks';

const ReactAntd = load<any>({
  script: 'https://guoyunhe.github.io/sb-react-component-vite-example/antd.js',
  styles: ['https://guoyunhe.github.io/sb-react-component-vite-example/antd.css'],
  prefetch: true,
  loadingFallback: () => <span>Loading</span>,
  failedFallback: (error) => <span>Failed to load: {error.message}</span>,
});

export function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Ant Design Modal</button>
      <ReactAntd
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        onOk={() => {
          setOpen(false);
        }}
      />
    </div>
  );
}
