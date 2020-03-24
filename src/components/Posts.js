import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MDBCard, MDBCardBody, MDBCol, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdbreact';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
   componentDidMount() {
      this.props.fetchPosts();
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.newPost) {
         this.props.posts.unshift(nextProps.newPost);
      }
   }

   render() {
      const { posts } = this.props;

      return (
         <Fragment>
            {posts.map(res => (
               <MDBCol key={res.id} md='4' className='mt-4'>
                  <MDBCard>
                     <MDBCardImage className='img-fluid' src='https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg' waves />
                     <MDBCardBody>
                        <MDBCardTitle>{res.title}</MDBCardTitle>
                        <MDBCardText>{res.body}</MDBCardText>
                     </MDBCardBody>
                  </MDBCard>
               </MDBCol>
            ))}
         </Fragment>
      );
   }
}

Posts.propTypes = {
   fetchPosts: PropTypes.func.isRequired,
   posts: PropTypes.array.isRequired,
   newPost: PropTypes.object
};

const mapStateToProps = state => ({
   posts: state.posts.items,
   newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
