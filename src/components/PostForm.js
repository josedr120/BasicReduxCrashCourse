import React, { Component, Fragment } from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newPost } from '../actions/postActions';

class PostForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: '',
         body: ''
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
   }

   onSubmit(e) {
      e.preventDefault();

      const post = {
         title: this.state.title,
         body: this.state.body
      };

      // Call Action
      this.props.newPost(post);
   }

   render() {
      return (
         <Fragment>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
               <MDBInput label='Title' name='title' onChange={this.onChange} value={this.state.title} />
               <MDBInput type='textarea' name='body' onChange={this.onChange} value={this.state.body} label='Body' rows='5' />
               <MDBBtn color='danger' type='submit'>
                  Submit
               </MDBBtn>
            </form>
         </Fragment>
      );
   }
}

PostForm.propTypes = {
   newPost: PropTypes.func.isRequired
};

export default connect(null, { newPost })(PostForm);
