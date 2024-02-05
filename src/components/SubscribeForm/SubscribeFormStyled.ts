import { Form } from 'formik';
import styled from 'styled-components';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: row;
  gap: 28px;
  width: 792px;

  button {
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    border: none;
    color: ${({ theme }) => theme.colors.white};
    font-family: 'RufinaBold';
    padding: 20px 46px;
    width: 241px;
    height: 88px;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
  }
`;
