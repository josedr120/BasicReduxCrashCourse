import { FETCH_POSTS, NEW_POSTS } from './types';

export const fetchPosts = () => dispatch => {
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts =>
         dispatch({
            type: FETCH_POSTS,
            posts: posts
         })
      )
      .catch(err => console.log(err));
};

export const newPost = postData => dispatch => {
   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
   })
      .then(res => res.json())
      .then(post =>
         dispatch({
            type: NEW_POSTS,
            posts: post
         })
      );
};
