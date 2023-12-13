import {useState} from 'react';
import useTypeWriter from 'react-typewriter-hook';
import {Output} from './Output';
import {Input} from './Input';

export const App = (): JSX.Element => {
  const [text, setText] = useState('');
  const textWithTypingAnimation = useTypeWriter(text);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <Input setText={setText} />
      <br />
      {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
      <Output text={textWithTypingAnimation!} />
    </div>
  );
};
