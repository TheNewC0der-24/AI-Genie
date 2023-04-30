import React, { useState } from 'react';

import OptionSelection from './Components/OptionSelection/OptionSelection'
import Translation from './Components/Translation/Translation'
import { options } from './AIOptions/index.js';

import { Configuration, OpenAIApi } from "openai"

function App() {

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [selectedOption, setSelectedOption] = useState({});
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const selectOption = (selectedOption) => {
    setSelectedOption(selectedOption);
  }

  const handleBack = () => {
    setSelectedOption({});
  }

  const handleClearInput = () => {
    setInput('');
  }

  const doStuff = async () => {
    let obj = { ...selectedOption, prompt: input }
    setInput('');
    const response = await openai.createCompletion(obj);
    setResult(response.data.choices[0].text);
  }

  return (
    <React.Fragment>
      {
        Object.values(selectedOption).length === 0
          ? (
            <OptionSelection options={options} selectOption={selectOption} />
          )
          : (
            <Translation
              doStuff={doStuff}
              input={input}
              setInput={setInput}
              result={result}
              handleBack={handleBack}
              handleClearInput={handleClearInput}
            />
          )
      }
    </React.Fragment>
  );
}

export default App;
