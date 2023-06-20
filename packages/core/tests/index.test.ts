import {encode, decode, getCharCodesFromSource} from '../src';

describe('Check Encode/decode', () => {
    it('abra', () => {
        const text = 'abra';
        const codes = getCharCodesFromSource(text);
        const encoded = encode(text, codes);
        const decoded = decode(encoded, codes);
        expect(decoded).toEqual(text);
    });

    // it('aaaaaaaaaa', () => {
    //     const text = 'aaaaaaaaaa';
    //     const codes = getCodesFromText(text);
    //     const encoded = encode(text, codes);
    //     const decoded = decode(encoded, codes);
    //     expect(decoded).toEqual(text);
    // });

    it('1234', () => {
        const text = '1234123121';
        const codes = getCharCodesFromSource(text);
        const encoded = encode(text, codes);
        const decoded = decode(encoded, codes);
        expect(decoded).toEqual(text);
    });

    // it('', () => {
    //     const text = '';
    //     const codes = getCodesFromText(text);
    //     const encoded = encode(text, codes);
    //     const decoded = decode(encoded, codes);
    //     expect(decoded).toEqual(text);
    // });
});
