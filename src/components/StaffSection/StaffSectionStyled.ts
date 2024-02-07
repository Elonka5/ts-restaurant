import styled from 'styled-components';

export const SectionStaff = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 162px;
  padding-bottom: 299px;
`;

export const StaffContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 121px;
`;

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;

  p {
    color: #4d4d4d;
    width: 143px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FirstWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 726px;
  gap: 449px;
`;

export const ThirdHeading = styled.h3`
  font-weight: 700;
  font-size: 68px;
  line-height: 84px;
`;
