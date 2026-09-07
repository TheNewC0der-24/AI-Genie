/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import OptionSelection from './Components/OptionSelection/OptionSelection'
import Translation from './Components/Translation/Translation'
import { options } from './AIOptions/index.js';
import OpenAI from "openai";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import bmac from "./assets/bmac.png";

function App() {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const [selectedOption, setSelectedOption] = useState({});
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const selectOption = (selectedOption) => {
    setSelectedOption(selectedOption);
  }

  const handleBack = () => {
    setSelectedOption({});
    setInput('');
  }

  const handleClearInput = () => {
    setInput('');
  }

  const doStuff = async () => {
    try {
      setLoading(true);

      const obj = {
        ...selectedOption,
        prompt: input
      }

      const response = await openai.chat.completions.create(obj);
      setResult(response.choices[0].message.content);
    } catch (error) {
      console.error('OpenAI Error:', error);

      if (
        error instanceof OpenAI.RateLimitError ||
        error?.status === 429
      ) {
        setError(true);
        return null;
      }

      setError(true);
    } finally {
      setInput('');
      setLoading(false);
    }
  }

  return (
    <>
      {Object.values(selectedOption).length === 0 ? (
        <OptionSelection options={options} selectOption={selectOption} />
      ) : (
        <Translation
          doStuff={doStuff}
          input={input}
          setInput={setInput}
          result={result}
          handleBack={handleBack}
          handleClearInput={handleClearInput}
          loading={loading}
        />
      )}

      <Dialog
        open={error}
        maxWidth="xs"
        fullWidth
        className='custom-dialog'
      >
        <DialogTitle
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '1.4rem',
            color: "#dee2e6",
            pt: 3,
          }}
        >
          🚀 AI Credits Exhausted
        </DialogTitle>

        <DialogContent sx={{ textAlign: 'center', pb: 3 }}>
          <DialogContentText
            sx={{
              mb: 2,
              lineHeight: 1.6,
              color: "#dee2e6"
            }}
          >
            Oops! We've reached the AI credit limit for this demo.
            <br />
            <br />
            Your support helps keep the AI features running and
            covers the OpenAI API costs.
          </DialogContentText>

          <Button
            fullWidth
            variant="outlined"
            href="https://www.buymeacoffee.com/bhavyakhurana"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setError(false)}
            size='large'
            startIcon={
              <img src={bmac} width={24} style={{ borderRadius: "50%" }} alt='buymeacoffee' />
            }
            className='custom-button-outlined'
            sx={{
              py: 1.2,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Buy Me a Coffee
          </Button>

          <Button
            fullWidth
            onClick={() => {
              setError(false);
              setSelectedOption({});
            }}
            size='large'
            className='custom-button-text'
            sx={{
              mt: 1,
              py: 1.2,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Maybe Later
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
