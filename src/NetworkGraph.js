import React from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from "three"

const NetworkGraph = () => {
  // Generate nodes and links
  const numNodes = 10000;
  const numLinks = 14000;
  const nodes = [...Array(numNodes)].map((_, i) => ({ id: i }));
  const links = [...Array(numLinks)].map((_, i) => ({
    source: Math.floor(Math.random() * numNodes),
    target: Math.floor(Math.random() * numNodes)
  }));

  return (
    <ForceGraph3D
      graphData={{ nodes, links }}
      width={1900}
      height={900}

      // nodeThreeObject={()=>{
      //   const geometry = new THREE.BoxGeometry( 30, 45, 5 );
			// 	const material = new THREE.MeshBasicMaterial();

			// 	const mesh = new THREE.Mesh( geometry, material );
      //   return mesh
      // }}

    nodeThreeObject={() => {
      const map = new THREE.TextureLoader().load( './router.png' );
      const material = new THREE.SpriteMaterial( { map: map } );
      const sprite = new THREE.Sprite( material );
      sprite.scale.set(5,5);
      return sprite;
    }}
      linkColor='rgba(255,255,255, 0.5)'
    />
  );
};

export default React.memo(NetworkGraph);
