/** ENCODE TEXT */
function encode(text, codes) {
    const result = [];
    for (const char of text) {
        result.push(codes.get(char));
    }
    return result;
}
/** DECODE TEXT */
function decode(encodedText, codes) {
    let result = '';
    const reversedCodes = {};
    Array.from(codes.entries()).forEach(([key, value]) => {
        reversedCodes[value] = key;
    });
    for (const code of encodedText) {
        result += reversedCodes[code];
    }
    return result;
}
/** GET ENTROPY */
function getEntropyOfText(text) {
    const relFreq = getRelativeFrequency(getCharsFrequency(text));
    let entropy = 0;
    for (let i = 0; i < relFreq.length; i++) {
        entropy += relFreq[i][1] * Math.log2(relFreq[i][1]);
    }
    return -entropy;
}
/** Create char-to-code Map */
function getCharCodesFromSource(text) {
    const freqArr = getCharsFrequency(text);
    const tree = getTree(freqArr);
    const codes = new Map(); // Array with symbols and codes
    getCodes(tree, (char, code) => {
        codes.set(char, code);
    });
    return codes;
}
const getCodes = (tree, cb, code = '') => {
    if (!tree) {
        return;
    }
    if (!tree.node.children[0] && !tree.node.children[1]) {
        cb(tree.node.data.v, code);
        return;
    }
    getCodes(tree.node.children[0], cb, code + '0');
    getCodes(tree.node.children[1], cb, code + '1');
};
/** Relative frequency */
function getRelativeFrequency(arr) {
    let length = 0;
    const resArr = [];
    for (let i = 0; i < arr.length; i++) {
        length += arr[i][1];
    }
    for (let i = 0; i < arr.length; i++) {
        const relFreq = arr[i][1] / length;
        resArr.push([arr[i][0], relFreq]);
    }
    return resArr;
}
/** Calculate chars frequency */
function getCharsFrequency(text) {
    const freq = new Map();
    for (const char of text) {
        const count = freq.get(char);
        freq.set(char, count ? count + 1 : 1);
    }
    return Array.from(freq).sort((a, b) => b[1] - a[1]); // descending
}
/** Generate Huffman tree */
function getTree(freq) {
    const nodes = [];
    for (const [char, weight] of freq) {
        nodes.push({
            node: {
                data: { v: char || weight.toString() },
                eData: { e: weight },
                children: [],
            },
        });
    }
    while (nodes.length > 1) {
        nodes.sort((a, b) => a.node.eData.e - b.node.eData.e);
        const left = nodes.shift();
        const right = nodes.shift();
        const parent = {
            node: {
                data: { v: `${left?.node.eData.e + right?.node.eData.e}` },
                eData: { e: left?.node.eData.e + right?.node.eData.e },
                children: [left, right],
            },
        };
        nodes.push(parent);
    }
    return nodes[0];
}

export { decode, encode, getCharCodesFromSource, getCharsFrequency, getEntropyOfText, getRelativeFrequency, getTree };
//# sourceMappingURL=index.esm.js.map
