import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  FormWrapper,
  StyledBtn,
  StyledDateWrapper,
  StyledError,
  StyledSelect,
  WrapperInput,
  WrapperInputs,
} from './ReservationFormStyled';
import 'react-datepicker/dist/react-datepicker.css';
import { validationBooking } from '../../helpers/schemas';
import { sendUserReservation } from '../../redux/User/UserThunk';
import { Formik } from 'formik';
import { useAppDispatch } from '../../hook';
import Input from '../Input/Input';

interface ReservationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  numberOfPeople: number;
}

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  date: new Date(),
  time: '',
  numberOfPeople: 1,
};

const ReservationForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: ReservationFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const userData = {
      ...values,
      date: selectedDate,
      time: selectedTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    dispatch(sendUserReservation(userData));
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationBooking}
    >
      {({ errors, touched }) => {
        return (
          <FormWrapper>
            <WrapperInputs>
              <WrapperInput>
                <Input
                  variant="primary"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  $error={errors.firstName && touched.firstName ? 'true' : ''}
                />
                <StyledError name="firstName" component="span" />
              </WrapperInput>
              <WrapperInput>
                <Input
                  variant="primary"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  $error={errors.lastName && touched.lastName ? 'true' : ''}
                />
                <StyledError name="lastName" component="span" />
              </WrapperInput>
            </WrapperInputs>

            <WrapperInput>
              <Input
                variant="secondary"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                $error={errors.email && touched.email ? 'true' : ''}
              />
              <StyledError name="email" component="span" />
            </WrapperInput>

            <WrapperInput>
              <Input
                variant="secondary"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                $error={errors.phone && touched.phone ? 'true' : ''}
              />
              <StyledError name="phone" component="span" />
            </WrapperInput>
            <WrapperInputs>
              <StyledDateWrapper>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date) => setSelectedDate(date)}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                />
                <CalendarGlobalStyles />
              </StyledDateWrapper>

              <DatePicker
                selected={selectedTime}
                onChange={(date: Date) => setSelectedTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                dateFormat="h:mm aa"
                timeCaption="Time"
                minTime={new Date()}
                maxTime={new Date(new Date().setHours(21, 0, 0, 0))}
              />
            </WrapperInputs>
            <StyledSelect id="numberOfPeople" name="numberOfPeople">
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </StyledSelect>

            <StyledBtn type="submit">Book now</StyledBtn>
          </FormWrapper>
        );
      }}
    </Formik>
  );
};

export default ReservationForm;
