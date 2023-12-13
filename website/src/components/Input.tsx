import {Dispatch, SetStateAction, useRef} from 'react';

type InputProps = {
  setText: Dispatch<SetStateAction<string>>;
};

export const Input = ({setText}: InputProps): JSX.Element => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!textInputRef.current) return;
    setText(textInputRef.current.value ?? ' ');
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label
        htmlFor="input"
        autoCorrect="false"
        style={{fontSize: '40px', textAlign: 'center'}}
      >
        Enter the text you want to encode
      </label>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10px',
          gap: '5px',
        }}
      >
        <input
          id="input"
          type="text"
          ref={textInputRef}
          style={{
            fontSize: 30,
          }}
        />
        <button
          style={{
            backgroundColor: '#008CBA',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
          }}
          onClick={handleClick}
        >
          Encode
        </button>
      </div>
    </form>
  );
};
