import { ErrorMessage, Form } from 'formik';
import styled, { createGlobalStyle } from 'styled-components';

export const StyledDateWrapper = styled.div`
  position: relative;
`;
export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 1644px;
`;

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 46px;
`;

export const WrapperInput = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(4.5)};
`;

export const StyledError = styled(ErrorMessage)`
  position: absolute;
  top: ${({ theme }) => theme.spacing(12.5)};
  left: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.red};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 18px;
  width: ${({ theme }) => theme.spacing(55)};
`;

export const StyledBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: 20px 46px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  color: ${({ theme }) => theme.colors.white};
  width: 327px;
  font-size: 32px;
  line-height: 48px;
`;

export const StyledSelect = styled.select`
  display: flex;
  padding: 30px 40px;
  min-width: 1644px;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  margin-bottom: 82px;
`;

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;
  }

  .react-datepicker__month-container{
    background-color: olive;
  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, -5%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    padding: 8px 12px;
    background-color: rgba(82, 59, 126, 0.8);
    border-radius: 12px;
  }
  .react-datepicker__header {
    position: relative;
    background-color: transparent;
    }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-size: .944rem;
    font-weight: 700;
    line-height: 24px;
    text-align: center;

  }
  .react-datepicker__day-name {
    margin: 0;
    padding: 8px 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;

  }
  .react-datepicker__navigation {
    margin-top: 24px;

  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;

    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 2px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 12px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;

  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
  }
  .react-datepicker__day--weekend {
    opacity: 70%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
  @media screen and (min-width: 1024px) {
    .react-datepicker {
      width: 300px;
      transform: translate(-10%, -3%);
      padding-block: 12px;
    }
    .react-datepicker__current-month {
      font-size: 1.1rem;
    }
    .react-datepicker__day-name {
      font-size: 18px;
    }
    .react-datepicker__day {
      width: 36px;
      height: 36px;
      font-size: 18px;
    }
    .react-datepicker__month {
      gap: 8px;
      padding-top: 16px;
    }
    .react-datepicker__day--selected {
      font-size: 18px;
    }
  }
`;
