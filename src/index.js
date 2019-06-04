import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.jsx';
import ApprovalCard from './ApprovalCard.jsx';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning</h4>
        <p>Are you sure you want to do this?</p>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          text={faker.lorem.sentences()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Callipso"
          timeAgo="Today at 6:45PM"
          text={faker.lorem.sentences()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Barbie"
          timeAgo="Today at 6:55PM"
          text={faker.lorem.sentences()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Fred"
          timeAgo="Today at 7:45PM"
          text={faker.lorem.sentences()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
