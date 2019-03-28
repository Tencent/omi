import './not-found';

const title = 'Page Not Found';

function action() {
  return {
    chunks: ['not-found'],
    title,
    component: (
      <div>
        <not-found title={title} />
      </div>
    ),
    status: 404,
  };
}

export default action;
