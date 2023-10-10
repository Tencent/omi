import React from 'react';
import { Button, TooltipLite, Space } from 'tdesign-react';

export default function BasicUsage() {
  return (
    <Space direction="vertical">
      <Space>
        <TooltipLite
          content="文字提示仅展示文本内容"
          placement="bottom"
          triggerElement={<Button variant="outline">下方文字提示</Button>}
        ></TooltipLite>
        <TooltipLite content="提示" placement="top">
          <Button variant="outline">上方文字提示</Button>
        </TooltipLite>
        <TooltipLite content="提示" placement="mouse">
          <Button variant="outline">鼠标位置显示提示</Button>
        </TooltipLite>
        <TooltipLite content="提示" showArrow={false}>
          <Button variant="outline">无箭头文字提示</Button>
        </TooltipLite>
        <TooltipLite content="提示" showShadow={false}>
          <Button variant="outline">无投影文字提示</Button>
        </TooltipLite>
      </Space>
      <Space>
        <TooltipLite content="浅色提示" theme="light">
          <Button variant="outline">浅色模式</Button>
        </TooltipLite>
        <TooltipLite content="浅色提示" theme="light" showArrow={false} showShadow={true}>
          <Button variant="outline">无箭头浅色模式</Button>
        </TooltipLite>
        <TooltipLite content="不可用提示">
          <Button disabled variant="outline">
            不可用状态下提示
          </Button>
        </TooltipLite>
      </Space>
    </Space>
  );
}
