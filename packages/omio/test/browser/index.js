import { define, render, Component }  from '../../src/omi';


describe('install()', () => {
 let scratch;
 const Empty = () => null;

 before( () => {
  scratch = document.createElement('div');
  (document.body || document.documentElement).appendChild(scratch);
 });

 beforeEach( () => {
  let c = scratch.firstElementChild;
  if (c) render(<Empty />, scratch, {merge:c});
  scratch.innerHTML = '';
 });

 after( () => {
  scratch.parentNode.removeChild(scratch);
  scratch = null;
 });
 
 it('should render render()', () => {
  class M1 extends Component {
   render () {
    return <div>M1</div>;
   }
   install () {
    console.log(123);
   }
  }
  // let instance = new M1();
  sinon.spy(M1.prototype, 'render');
  render(<m1 />, scratch);

  expect(M1.prototype.render)
   .to.have.been.calledOnce
   .and.to.have.been.calledWithMatch({}, {})
   .and.to.have.returned(sinon.match({ nodeName:'div' }));

  expect(scratch.innerHTML).to.equal('<div>M1</div>');
    })
})