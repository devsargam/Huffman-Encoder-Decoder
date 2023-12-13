import {BeautifulTree} from '@beautiful-tree/react';
import {useHuffman} from '../hooks/useHuffman';

type OutputProps = {
  text: string;
};

export const Output = ({text}: OutputProps): JSX.Element => {
  const {decoded, encoded, tree} = useHuffman(text ?? ' ');

  if (!tree?.node)
    return (
      <span style={{fontSize: '20px', marginTop: '1rem'}}>
        Type something to get Started!
      </span>
    );

  return (
    <>
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
      <h1>
        Encoded:{' '}
        {encoded?.map((value) => (
          <span>{`${value} `}</span>
        ))}
      </h1>
      <h1>Decoded: {decoded}</h1>
    </>
  );
};
