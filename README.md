<h1 align="center"><img height="150" src="assets/logo.png" /><br>Huffman coding (TypeScript)</h1>

Huffman code is a particular type of optimal prefix code that is commonly used for lossless data compression. This is the implementation of the algorithm on TypeScript.

## Installation

Clone this repository and install modules:

```bash
git clone https://github.com/devsargam/Huffman-Encoder-Decoder.git
cd Huffman-Encoder-Decoder
npm install
npm run dev(or build)
```

![](assets/split.png)

## Usage

<b>The algorithm implementation is in the file /src/index.ts</b>

Let's encode and decode plain text!

```typescript
import { getCodesFromText, encode, decode } from './huffman';

/** ENCODING */
let text: string = 'abracadabra';
let encodedText: string = '';

let codes: Map<string, string> = getCodesFromText(text); // Symbols codes
let encodedArray: Array<any> = encode(text, codes); // Get array of encoded symbols

encodedText = encodedArray.join(''); // Encoded array to string. Equals 0101100...

/** DECODING */
text = decode(encodedArray, codes); // Equals 'abracadabra'
```

![](assets/split.png)

## APIs

#### Encode text

```typescript
encode(text: string, codes: Map<string, string>): Array<string>
```

#### Decode text

```typescript
decode(text: Array<string>, codes: Map<string, string>):string
```

#### Get symbols codes from text

```typescript
getCodesFromText(text: string): Map<string, string>
```

#### Get symbols frequency

```typescript
getFrequency(text: string): Array<any>
```

#### Get Huffman Tree from frequency array

```typescript
getTree(arr: Array<any>)
```

#### Get relative frequency array

```typescript
getRelativeFrequency(arr: Array<any>): Array<any>
```

#### Get text entropy

```typescript
getEntropyOfText(text: string): number
```
