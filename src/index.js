import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.jsx';


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" text={faker.lorem.sentences()} avatar={faker.image.avatar()}/>
      <CommentDetail author="Callipso" timeAgo="Today at 6:45PM" text={faker.lorem.sentences()} avatar={faker.image.avatar()}/>
      <CommentDetail author="Barbie" timeAgo="Today at 6:55PM" text={faker.lorem.sentences()} avatar={faker.image.avatar()}/>
      <CommentDetail author="Fred" timeAgo="Today at 7:45PM" text={faker.lorem.sentences()} avatar={faker.image.avatar()}/>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
