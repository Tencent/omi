import './my-detail';

async function action({ client, query }) {
  if (client) {
    return {
      title: 'Omi SSR',
      chunks: ['detail'],
      component: (
        <div>
          <my-detail title='Detail' />
        </div>
      ),
      data: window.__data
    }
  } else {
    const res = queryById(query.id)
    
    return {
      title: 'Omi SSR!',
      chunks: ['detail'],
      component: (
        <div>
          <my-detail title='Detail' />
        </div>
      ),
      data: res
    };
  }

}

function queryById(id) {
  return { id: id, detail: 'I love omi.' }
}

export default action;
