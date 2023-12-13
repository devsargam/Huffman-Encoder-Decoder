import {
  TreeNode,
  encode,
  getCharCodesFromSource,
  getCharsFrequency,
  getTree,
} from 'huffman-javascript';
import { useEffect, useState } from 'react';

export const useHuffman = (
  text: string,
): { tree?: TreeNode; encoded?: string[]; decoded?: string } => {
  const [tree, setTree] = useState<TreeNode>();
  const [encoded, setEncoded] = useState<string[]>([]);
  const [decoded, setDecoded] = useState('');

  useEffect(() => {
    const codes = getCharCodesFromSource(text);
    const freq = getCharsFrequency(text);
    setTree(getTree(freq));
    setEncoded(encode(text, codes));
    setDecoded(text);
    console.log(freq);
  }, [text]);

  return { tree, encoded, decoded };
};
