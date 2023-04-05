import React, { useState } from 'react';
// import logo from '../assets/logo.svg';
import '../styles/ui.css';

function App() {
  // const textbox = React.useRef<HTMLInputElement>(undefined);

  // const countRef = React.useCallback((element: HTMLInputElement) => {
  //   if (element) element.value = '5';
  //   textbox.current = element;
  // }, []);

  // const onCreate = () => {
  //   const count = parseInt(textbox.current.value, 10);
  //   parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*');
  // };

  // const onCancel = () => {
  //   parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  // };

  let [nodeType, setNodeType] = useState(null);

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
      if (type === 'update-selection') {
        setNodeType(message);
        console.log(message);
      }
    };
  }, []);

  console.log(this);

  return (
    <div>
      <p>{nodeType}</p>
    </div>
  );
}

export default App;
