import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';

import { StyledLink } from '~/components/StyledLink';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { CenteredTile } from '~/components/Tile';
import { Feedback } from '~/components/Input';

interface LoginFormData {
  identifier: string;
  password: string;
}

const LoginPage: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<LoginFormData>();
  const { errors } = formState;

  const submitHandler = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <CenteredTile header="Login">
        <Input
          label="Identifier"
          placeholder="Username or email"
          height={8}
          feedback={
            errors.identifier ? (
              <Feedback>Invalid length (min: 6)</Feedback>
            ) : (
              <>&nbsp;</>
            )
          }
          {...register('identifier', {
            required: true,
            minLength: 6,
          })}
        />
        <Input
          label="Password"
          placeholder="Your password"
          height={8}
          feedback={
            errors.password ? (
              <Feedback>Invalid length (min: 6)</Feedback>
            ) : (
              <>&nbsp;</>
            )
          }
          {...register('password', {
            required: true,
            minLength: 6,
          })}
        />
        <Button type="submit">Sign In</Button>
        <h3>
          <StyledLink underline href="/registration">
            Create an account
          </StyledLink>
        </h3>
      </CenteredTile>
    </form>
  );
};

export default LoginPage;
