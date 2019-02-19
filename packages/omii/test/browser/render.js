/*
 * @Author: kinsonpeng
 * @Date: 2018-12-19 15:50:55
 * @Last Modified by: kinsonpeng
 * @Last Modified time: 2018-12-20 16:11:35
 */
import { define, render, WeElement } from '../../src/omix';
import { relative } from 'path';

function getAttributes(node) {
    let attrs = {};
    // console.log(node.attributes)
    Object.keys(node.attributes).forEach(function (item) {
        attrs[node.attributes[item].name] = node.attributes[item].value;
    })
    return attrs;
}

describe('render()', () => {
    let scratch;

    before(() => {
        scratch = document.createElement('div');
        (document.body || document.documentElement).appendChild(scratch);
    });

    beforeEach(() => {
        scratch.innerHTML = '';
    });

    after(() => {
        scratch.parentNode.removeChild(scratch);
        scratch = null;
    });

    it('should render a empty text node', () => {
        render(null, scratch);
        let node = scratch.childNodes;
        expect(node).to.have.length(1);
        // console.log(node[0].nodeName)
        expect(node[0].data).to.equal('');
        expect(node[0].nodeName).to.equal('#text');
    })

    it('shuold create empty nodes (<* />)', () => {
        render(<div />, scratch);
        expect(scratch.childNodes).to.have.length(1);
        expect(scratch.childNodes[0].nodeName).to.equal('DIV');

        scratch.innerHTML = '';

        render(<my-render />, scratch);
        expect(scratch.childNodes).to.have.length(1);
        expect(scratch.childNodes[0].nodeName).to.equal('MY-RENDER');

        scratch.innerHTML = '';

        render(<my-render />, scratch);
        render(<my-view />, scratch);
        expect(scratch.childNodes).to.have.length(2);
        expect(scratch.childNodes[0].nodeName).to.equal('MY-RENDER');
        expect(scratch.childNodes[1].nodeName).to.equal('MY-VIEW');

    });

    it('should node list', () => {
        render(<div><span></span></div>, scratch);
        expect(scratch.childNodes).to.have.length(1);
        expect(scratch.childNodes[0].nodeName).to.equal('DIV');
        expect(scratch.childNodes[0].childNodes[0].nodeName).to.equal('SPAN');

        scratch.innerHTML = '';

        render(<div><my-render /></div>, scratch);
        expect(scratch.childNodes).to.have.length(1);
        expect(scratch.childNodes[0].nodeName).to.equal('DIV');
        expect(scratch.childNodes[0].childNodes[0].nodeName).to.equal('MY-RENDER');


        scratch.innerHTML = '';

        render(<div>
            <my-render />
            <my-view />
            <my-list />
        </div>, scratch);
        let p = scratch.childNodes[0];
        expect(p.childNodes[0].nodeName).to.equal('MY-RENDER');
        expect(p.childNodes[1].nodeName).to.equal('MY-VIEW');
        expect(p.childNodes[2].nodeName).to.equal('MY-LIST');
    })

    it('should not render false value', () => {
        render(<div>
            {null}, {undefined}, {0}, {NaN}
        </div>, scratch);
        // console.log(scratch.childNodes.property)
        expect(scratch.firstChild).to.have.property('innerHTML', ', , 0, NaN');
    })

    it('should not render null', () => {
        render(null, scratch);
        expect(scratch.innerHTML).to.equal('');
    })

    it('should not render undefined', () => {
        render(undefined, scratch);
        expect(scratch.innerHTML).to.equal('');
    })

    it('should not render boolean', () => {
        render(true, scratch);
        // console.log(scratch.innerHTML)
        expect(scratch.innerHTML).to.equal('');

        scratch.innerHTML = '';

        render(false, scratch);
        expect(scratch.innerHTML).to.equal('');
    })

    it('should render NaN', () => {
        render(NaN, scratch);
        expect(scratch.innerHTML).to.equal('NaN');
    })

    it('sholud render 0', () => {
        render(0, scratch);
        expect(scratch.innerHTML).to.equal('0');
    })

    it('should render number', () => {
        render(1, scratch);
        expect(scratch.innerHTML).to.equal('1');
    })

    it('should render string', () => {
        render('I am string', scratch);
        expect(scratch.innerHTML).to.equal('I am string');
    })

    it('should render attributes to string', () => {
        render(<div anull={null} aundefined={undefined} a0={0} aNaN={NaN} afalse={false}></div>, scratch);
        expect(getAttributes(scratch.firstChild)).to.eql({
            a0: '0',
            anan: 'NaN'
        });

        scratch.innerHTML = '';

        render(<my-render anull={null} aundefined={undefined} a0={0} aNaN={NaN} afalse={false} />, scratch);
        expect(getAttributes(scratch.firstChild)).to.eql({
            a0: '0',
            anan: 'NaN'
        });
    })

    it('should render input value', () => {
        render(<div>
            <input value={0} />
            <input value={null} />
            <input value={undefined} />
            <input value={NaN} />
            <input value={false} />
        </div>, scratch);
        let child = scratch.firstChild;
        expect(child.children[0].value).to.equal('0');
        expect(child.children[1].value).to.equal('');
        expect(child.children[2].value).to.equal('');
        expect(child.children[3].value).to.equal('NaN');
        expect(child.children[4].value).to.equal('false');
    })

    it('should apply dom attributes', () => {
        render(<div my-attrs="myattrs" name="dl"></div>, scratch);

        let node = scratch.firstChild

        expect(node.attributes[0].name).to.equal('my-attrs');
        expect(node.attributes[0].value).to.equal('myattrs');

        expect(node.attributes[1].name).to.equal('name');
        expect(node.attributes[1].value).to.equal('dl');

    })

    it('should render className', () => {
        render(<div class="name"></div>, scratch);
        expect(scratch.childNodes[0]).to.have.property('className', 'name');
    })

    it('should not render function props as attributes', () => {
        render(<div
            onClick={function a() { }}
            onTouch={function b() { }}
        ></div>, scratch);

        let node = scratch.firstChild;

        expect(node.attributes).to.have.length(0);

    })

    it('should render object', () => {
        render(<div data={{ name: 'dl' }}></div>, scratch);

        let node = scratch.firstChild;

        expect(node.attributes).to.have.length(1);
        expect(node.attributes[0].name).to.equal('data');
        expect(node.attributes[0].value).to.equal('[object Object]');
    })

    it('should render style as string', () => {
        render(<div style="color: red; background: black;"></div>, scratch);
        expect(scratch.childNodes[0].style.cssText)
            .that.matches(/\s*color\s*:\s*red\s*/)
            .and.matches(/\s*background\s*:\s*black\s*/);
    })

    it('should only register on* event as handles', () => {
        let onclick = () => { };
        let click = () => { };

        let node = document.createElement('div').constructor.prototype;

        sinon.spy(node, 'addEventListener');

        render(<div click={click} onClick={onclick} />, scratch);

        expect(scratch.childNodes[0].attributes.length).to.equal(0);

        // console.log(sinon.match.func)

        // sinon.match.func 封装后的可执行的函数
        expect(node.addEventListener).to.have.been.calledOnce
            .and.to.have.been.calledWithExactly('click', sinon.match.func, false);

        // restore() 释放监听
        node.addEventListener.restore();

    })

    it('should add and remove event handles', () => {
        let click = sinon.spy();
        let mouseup = sinon.spy();
        let node = document.createElement('div').constructor.prototype;

        sinon.spy(node, 'addEventListener');
        sinon.spy(node, 'removeEventListener');

        function trigger(node, type) {
            let event = document.createEvent('Event');
            event.initEvent(type, true, true);
            node.dispatchEvent(event);
        }

        sinon.spy(click);

        render(<div onClick={() => click(1)} onMouseUp={mouseup}  ></div>, scratch);

        expect(node.addEventListener).to.have.been.calledTwice
            .and.to.have.been.calledWith('click');

        trigger(scratch.childNodes[0], 'click');

        expect(click).to.have.been.calledOnce
            .and.to.have.been.calledWith(1)

        // resetHistory()  重置存根的历史记录  =>  此为保留根的点击事件，并重置点击事件
        node.addEventListener.resetHistory();
        click.resetHistory();

        render(
            // 保留根的点击事件状态，使余下点击事件无法注册；
            <div onClick={() => click(2)} ></div>
            , scratch, null, null, scratch.firstChild);

        expect(node.addEventListener).to.not.have.been.called

        expect(node.removeEventListener).to.have.been.calledOnce
            .and.calledWith('mouseup');

        trigger(scratch.childNodes[0], 'click');
        expect(click).to.have.been.called
            .and.calledWith(2);

        trigger(scratch.childNodes[0], 'mouseup');
        expect(mouseup).to.not.have.been.called;

        node.removeEventListener.resetHistory();
        click.resetHistory();
        mouseup.resetHistory();

        render(<div />, scratch, null, null, scratch.firstChild);

        expect(node.removeEventListener).to.have.been.calledOnce
            .and.calledWith('click');

        trigger(scratch.childNodes[0], 'click');

        expect(click).to.not.have.been.called;

        node.addEventListener.restore();
        node.removeEventListener.restore();

    })

    it('should render  merge style', () => {
        render(<div style={
            {
                background: 'rgba(0, 0, 0, 1)',
                color: 'rgba(100, 100, 100, 1)',
                fontSize: '16px',
                textAlign: 'center',
                display: 'table-cell',
                verticalAlign: 'middle'
            }
        }></div>, scratch);

        let { style } = scratch.firstChild;

        expect(style).to.have.property('background').and.that.equals('rgb(0, 0, 0)');
        expect(style).to.have.property('color').and.that.equals('rgb(100, 100, 100)');
        expect(style).to.have.property('font-size').and.that.equals('16px');
        expect(style).to.have.property('textAlign', 'center');
        expect(style).to.have.property('display', 'table-cell');
        expect(style).to.have.property('verticalAlign', 'middle');

        render(<div style={
            {
                color: 'rgba(255, 255, 255, 1)'
            }
        } />, scratch, null, null, scratch.firstChild);

        // console.log(scratch)

        expect(style).to.have.property('color').and.that.not.equals('rgb(0, 0, 0)');

        render(<div style={
            {
                position: 'relative'
            }
        } />, scratch, null, null, scratch.firstChild);

        expect(style).to.have.property('position').and.that.equals('relative');

    })

    // it ('should void render xss', () => {
    //     let dom = '<div>I am <br /></div>'

    //     render(<div>
    //         {dom}
    //     </div>, scratch);

    //     console.log(scratch)
    // })

})
