import React from 'react';
import { useAppDispatch } from '../../hook';
import { sendUserSubscribe } from '../../redux/User/UserThunk';
import { validationSubscribe } from '../../helpers/schemas';
import { Formik } from 'formik';
import {
  StyledError,
  WrapperInput,
} from '../ReservationForm/ReservationFormStyled';
import Input from '../Input/Input';
import { FooterTitle } from '../Footer/FooterStyled';
import { FormWrapper, SubscribeText } from './SubscribeFormStyled';

interface SubscribeFormValues {
  email: string;
}
const initialValues = {
  email: '',
};

const SubscribeForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: SubscribeFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const userSubscribe = {
      email: values.email,
    };
    dispatch(sendUserSubscribe(userSubscribe));
    resetForm();
  };

  return (
    <div>
      <FooterTitle>Never Miss a Recipe</FooterTitle>

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSubscribe}
      >
        {({ errors, touched }) => {
          return (
            <FormWrapper>
              <WrapperInput>
                <Input
                  variant="subscribe"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  $error={errors.email && touched.email ? 'true' : ''}
                />

                <StyledError name="email" component="span" />
              </WrapperInput>
              <button type="submit">Subscribe</button>
            </FormWrapper>
          );
        }}
      </Formik>
      <SubscribeText>
        Join our subscribers and get best recipe delivered each week!
      </SubscribeText>
    </div>
  );
};

export default SubscribeForm;
