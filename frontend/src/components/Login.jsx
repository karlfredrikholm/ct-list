/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import user from 'reducers/user';
import { BASE_URL } from 'utils/utils';
import { Form } from './styled/Forms';
import { Input } from './styled/elements/Input';
import { FilledBtn } from './styled/Buttons.styled';
import { Label } from './styled/elements/Label';
import { H2, H6 } from './styled/elements/Headings.styled';
import { LoginWrapper } from './styled/Wrappers.styled';
import { HR } from './styled/elements/HR';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  const errorMessage = useSelector((store) => store.user.error);

  useEffect(() => {
    if (accessToken) {
      navigate('/add');
    }
  }, [accessToken, navigate]);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    };

    fetch((`${BASE_URL}/login`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setError(data.response));
        }
      });
  };

  return (
    <LoginWrapper>
      <H2>Admin login</H2>
      <div>
        <HR />
      </div>
      <Form onSubmit={onFormSubmit}>
        <Label htmlFor="username">Username
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your Username"
            required />
        </Label>
        <Label htmlFor="password">Password
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
            required />
        </Label>
        <FilledBtn type="submit">Log in</FilledBtn>
        {errorMessage && <H6>{errorMessage}</H6>}
      </Form>
      <div>
        <HR />
      </div>
    </LoginWrapper>
  );
};

export default Login;