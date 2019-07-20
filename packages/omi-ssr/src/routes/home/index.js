import './my-home';

async function action({ client, data }) {
  if (client) {
    return {
      title: 'Omi SSR',
      chunks: ['home'],
      component: (
        <div>
          <my-home title='Home'/>
        </div>
      ),
      data: window.__data
    }
  } else {
    const resp = await mock()

    const { data } = await resp.json();
    return {
      title: 'Omi SSR!',
      chunks: ['home'],
      component: (
        <div>
          <my-home title='Home'/>
        </div>
      ),
      data: data
    };
  }

}

function mock(){
    return new Promise(function (resolve, reject) {
      //query db
      setTimeout(() => {
        resolve({
          json: function () {
            return {
              data: {
                name: 'Like'
              }
            }
          }
        })
      }, 1000)
    })
  
}
export default action;
