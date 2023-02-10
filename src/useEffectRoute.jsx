import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} new messages`;
    // if there is a variable here or anything using memory, use return statement to clear memory to disppose the unused vars and free up memory
  }, []);

  return (
    <div>
      <h3>{count} new messages</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
