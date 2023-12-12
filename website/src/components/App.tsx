import {BeautifulTree} from '@beautiful-tree/react';
import {
    getCharCodesFromSource,
    getCharsFrequency,
    getTree,
    encode,
    decode,
} from 'huffman-javascript';
import {MouseEvent, useState} from 'react';
import useTypeWriter from 'react-typewriter-hook';

export const App = (): JSX.Element => {
    const [text, setText] = useState('hello there');
    const [finalText, setFinalText] = useState('');
    const typing = useTypeWriter(finalText);

    const handleClick = () => {
        setFinalText(text);
    };

    console.time('1');
    const codes = getCharCodesFromSource(typing ?? ' ');

    const freq = getCharsFrequency(typing ?? ' ');
    const tree = getTree(freq);

    const encoded = encode(finalText, codes);
    const decoded = decode(encoded, codes);

    console.timeEnd('1');

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
            <label htmlFor="input" style={{fontSize: 40, textAlign: 'center'}}>
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
                    value={text}
                    onChange={(e) => setText(e.currentTarget.value)}
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
            <br />
            {!typing ? (
                <>Type something to get Started!</>
            ) : (
                <BeautifulTree
                    id="my-tree"
                    tree={tree.node}
                    svgProps={{width: 500, height: 500}}
                    getNodeContent={(data) => {
                        return data?.['v']?.toString() === ' '
                            ? '_'
                            : data?.['v']?.toString() ?? '';
                    }}
                />
            )}
            <h1>Encoded: {encoded}</h1>
            <h1>Decoded: {decoded}</h1>
        </div>
    );
};
