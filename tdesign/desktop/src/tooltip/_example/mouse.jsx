import React from 'react';
import { TooltipLite } from 'tdesign-react';

export default function MouseTitle() {
  return (
    <TooltipLite content="文案确实很长很长很长很长很长" placement="mouse">
      <a id="testa" href="#">
        文案比较长...
      </a>
    </TooltipLite>
  );
}
