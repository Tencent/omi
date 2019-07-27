// https://github.com/Flipboard/react-canvas

/**
Copyright (c) 2015, Flipboard
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of Flipboard nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

import  computeLayout  from './layout';

/**
 * This computes the CSS layout for a RenderLayer tree and mutates the frame
 * objects at each node.
 *
 * @param {Renderlayer} root
 * @return {Object}
 */
function layoutNode (root) {
  var rootNode = createNode(root);
  computeLayout(rootNode);
  walkNode(rootNode);
  return rootNode;
}

function createNode (layer) {
  return {
    layer: layer,
    layout: {
      width: undefined, // computeLayout will mutate
      height: undefined, // computeLayout will mutate
      top: 0,
      left: 0,
    },
    style: layer.style || (layer.attributes && layer.attributes.style) || {},
    children: (layer.children || []).map(createNode)
  };
}

function walkNode (node, parentLeft, parentTop) {
  node.layer.frame.x = node.layout.left + (parentLeft || 0);
  node.layer.frame.y = node.layout.top + (parentTop || 0);
  node.layer.frame.width = node.layout.width;
  node.layer.frame.height = node.layout.height;
  if (node.children && node.children.length > 0) {
    node.children.forEach(function (child) {
      walkNode(child, node.layer.frame.x, node.layer.frame.y);
    });
  }
}

export default layoutNode;