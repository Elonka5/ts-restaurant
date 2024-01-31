import React, { useState } from 'react';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  StyledDateWrapper,
} from './ReservationFormStyled';
import 'react-datepicker/dist/react-datepicker.css';

interface ReservationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  numberOfPeople: number;
}

const ReservationForm: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());

  const formik = useFormik<ReservationFormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: new Date(),
      time: '',
      numberOfPeople: 1,
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>

      <div>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
      </div>

      <StyledDateWrapper>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          minDate={new Date()}
        />
        <CalendarGlobalStyles />
      </StyledDateWrapper>

      <DatePicker
        selected={startDate}
        onChange={(date: Date | null) => {
          if (date) {
            setStartDate(date);
          }
        }}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        dateFormat="HH:mm"
        timeFormat="HH:mm"
        minTime={new Date(2024, 1, 1, 0, 0)}
        maxTime={new Date()}
      />

      <div>
        <select
          id="numberOfPeople"
          name="numberOfPeople"
          onChange={formik.handleChange}
          value={formik.values.numberOfPeople}
        >
          {[1, 2, 3, 4, 5, 6].map(num => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Book now</button>
    </form>
  );
};

export default ReservationForm;
