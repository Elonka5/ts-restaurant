import * as yup from 'yup';

export const validationBooking = yup.object().shape({
  firstName: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+\s[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+$/,
      'First Name is required.'
    )
    .required('First Name is required'),
  lastName: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+\s[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+$/,
      'Last Name is required.'
    )
    .required('Last Name is required'),
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9.~+_-]+@[^\s@]+\.[^\s@]+$/, 'This is an ERROR email')
    .required('email is required'),
  phone: yup
    .string()
    .required('phone is required')
    .matches(
      /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
      'Phone number must be in format +38(XXX)XXX-XX-XX'
    ),
});

export const validationSubscribe = yup.object().shape({
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9.~+_-]+@[^\s@]+\.[^\s@]+$/, 'This is an ERROR email')
    .required('email is required'),
});
