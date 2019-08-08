import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { Container, Row, Col } from 'reactstrap';

import { AuthUserContext, withAuthorization } from '../Session';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import ImageUpload from '../ImageUpload';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Container>
        <Row>
          <Col>
            <h3>Welecome: {authUser.username}</h3>
            <h3>email: {authUser.email}</h3>
            <PasswordForgetForm />
            <PasswordChangeForm />
            <ImageUpload />
          </Col>
        </Row>
      </Container>
    )}
  </AuthUserContext.Consumer>
);
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

const authCondition = authUser => !!authUser;

export default compose(
  connect(mapStateToProps),
  withAuthorization(authCondition),
)(AccountPage);
