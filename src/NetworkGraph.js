import React from 'react';
import ForceGraph3D from 'react-force-graph-3d';

const NetworkGraph = () => {
  // Generate nodes and links
  const numNodes = 10000;
  const numLinks = 140000;
  const nodes = [...Array(numNodes)].map((_, i) => ({ id: i }));
  const links = [...Array(numLinks)].map((_, i) => ({
    source: Math.floor(Math.random() * numNodes),
    target: Math.floor(Math.random() * numNodes)
  }));

  return (
    <ForceGraph3D
      graphData={{ nodes, links }}
      width={1900}
      height={1000}
      linkColor={() => 'rgba(255, 255, 255, 0.2)'}
    />
  );
};

export default React.memo(NetworkGraph);
