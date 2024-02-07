import styled from 'styled-components';
import orangesvg from '../../assets/images/svg/Orange.svg';

export const SectionLocation = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 272px;
  padding-bottom: 186px;
  background-image: url(${orangesvg});
  background-repeat: no-repeat;
  background-position: top 152px center;
`;

export const AddressWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 202px;
`;

export const LocationWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 145px;
`;

export const DivLocation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 60px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 44px;
    gap: 53px;
    width: 748px;

    a {
      border: 2px solid black;
      padding: 20px 46px;
      width: 294px;
      height: 88px;
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
    }
  }
`;

export const ContactContainer = styled.div`
  padding-top: 400px;
  width: 507px;
  p,
  a {
    display: inline;
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.olive};
  }
`;

export const LocationContainer = styled.div``;
