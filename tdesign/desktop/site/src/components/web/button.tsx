import { define, OmiProps, h, render, WeElement } from 'omi'
import "../../../../src/button/index"
import { ButtonShape, ButtonTheme, ButtonVariant } from '@src/button/types';
import { SizeEnum } from '@src/common';

define('page-button', class extends WeElement {
  block: boolean = false;
  loading: boolean = false;
  disabled: boolean = false;
  ghost: boolean = false;
  theme: ButtonTheme;
  variant: ButtonVariant;
  size: SizeEnum;
  shape: ButtonShape

  render(props: {} | OmiProps<{}, any>, store: any) {
    return (
      <div style="padding:24px">
        <div style="display:flex;">

          <div style="width:500px;margin:auto;text-align:center;">
            <t-button
              block={this.block}
              loading={this.loading}
              disabled={this.disabled}
              ghost={this.ghost}
              theme={this.theme}
              variant={this.variant}
              size={this.size}
              shape={this.shape}
            >
              Button
            </t-button>
          </div>

          <div>
            <h2>基础选项</h2>
            <label>
              <input type="checkbox" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                this.block = target.checked;
                this.update()
              }} />block
            </label>
            <label>
              <input type="checkbox" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                this.loading = target.checked;
                this.update()
              }} />loading
            </label>
            <label>
              <input type="checkbox" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                this.disabled = target.checked;
                this.update()
              }} />disabled
            </label>
            <label>
              <input id="loading" type="checkbox" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                this.ghost = target.checked;
                this.update()
              }} />ghost
            </label>

            <h2>按钮颜色</h2>

            <label>
              <input name='theme' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.theme = "default"
                }
                this.update()
              }} /> default
            </label>

            <label>
              <input name='theme' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.theme = "primary"
                }
                this.update()
              }} /> primary
            </label>

            <label>
              <input name='theme' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.theme = "danger"
                }
                this.update()
              }} /> danger
            </label>

            <label>
              <input name='theme' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.theme = "warning"
                }
                this.update()
              }} /> warning
            </label>

            <label>
              <input name='theme' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.theme = "success"
                }
                this.update()
              }} /> success
            </label>

            <h2>按钮风格</h2>

            <label>
              <input name='variant' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.variant = 'base'
                }
                this.update()
              }} /> 基本按钮
            </label>

            <label>
              <input name='variant' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.variant = 'outline'
                }
                this.update()
              }} /> 填充按钮

            </label>

            <label>
              <input name='variant' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.variant = 'dashed'
                }
                this.update()
              }} /> 虚线按钮

            </label>

            <label>
              <input name='variant' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.variant = 'text'
                }
                this.update()
              }} /> 文本按钮

            </label>

            <h2>不同大小</h2>

            <label>
              <input name='size' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.size = 'small'
                }
                this.update()
              }} /> 小按钮
            </label>

            <label>
              <input name='size' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.size = 'medium'
                }
                this.update()
              }} /> 中按钮
            </label>

            <label>
              <input name='size' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.size = 'large'
                }
                this.update()
              }} /> 大按钮
            </label>

            <h2>不同形状按钮</h2>

            <label>
              <input name='shape' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.shape = 'rectangle'
                }
                this.update()
              }} /> 正常
            </label>

            <label>
              <input name='shape' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.shape = 'square'
                }
                this.update()
              }} /> 方形
            </label>

            <label>
              <input name='shape' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.shape = 'round'
                }
                this.update()
              }} /> 椭圆
            </label>

            <label>
              <input name='shape' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  this.shape = 'circle'
                }
                this.update()
              }} /> 圆形
            </label>

          </div>

        </div>



      </div>


    );
  }
})