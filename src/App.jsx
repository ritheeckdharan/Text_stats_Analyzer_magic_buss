import React, { useState } from 'react';
import TextInput from './components/TextInput';
import StatsDisplay from './components/StatsDisplay';
import FrequencyList from './components/FrequencyList';


const App = () => {
  const [text, setText] = useState('');

  return (
    <div className="container mt-5">
      <h2>Text Stats Analyzer</h2>
      <TextInput text={text} setText={setText} />
      <StatsDisplay text={text} />
      <FrequencyList text={text} />
    </div>
  );
};

export default App;
