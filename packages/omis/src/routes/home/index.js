import './my-home';

async function action({ fetch, client, data }) {
  if (client) {
    return {
      title: 'Omi SSR',
      chunks: ['home'],
      component: (
        <div>
          <my-home />
        </div>
      ),
      data: window.__data
    }
  } else {
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{news{title,link,content}}',
      }),
    });

    const { data } = await resp.json();
    return {
      title: 'Omi SSR!',
      chunks: ['home'],
      component: (
        <div>
          <my-home />
        </div>
      ),
      data: data
    };
  }

}

export default action;
