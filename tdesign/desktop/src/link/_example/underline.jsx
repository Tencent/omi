import React from 'react';
import { Space, Link } from 'tdesign-react';

export default function LinkExample() {
  return (
    <Space>
      <Link theme="default" underline>
        跳转链接
      </Link>
      <Link theme="primary" underline>
        跳转链接
      </Link>
      <Link theme="danger" underline>
        跳转链接
      </Link>
      <Link theme="warning" underline>
        跳转链接
      </Link>
      <Link theme="success" underline>
        跳转链接
      </Link>
    </Space>
  );
}
