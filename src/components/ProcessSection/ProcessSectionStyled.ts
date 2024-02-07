import styled from 'styled-components';
import rosemarysvg from '../../assets/images/svg/rosemary.svg';
import rosemarysecondsvg from '../../assets/images/svg/rosemary_second.svg';

export const SectionProcess = styled.section`
  position: relative;
  padding-top: 167px;
  padding-bottom: 320px;
`;

export const BackgroundImage1 = styled.div`
  position: absolute;
  top: 7px;
  right: 0;
  width: 50%;
  height: 100%;
  background-image: url(${rosemarysvg});
  background-position: top right;
  background-repeat: no-repeat;
`;

export const BackgroundImage2 = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0;
  width: 50%;
  height: 100%;
  background-image: url(${rosemarysecondsvg});
  background-repeat: no-repeat;
  background-position: bottom left;
`;

export const ProcessContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 118px;
  z-index: 1;
`;

export const FirstProcWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 102px;
`;

export const SecondHeading = styled.h2`
  font-family: 'RufinaBold';
  font-weight: 700;
  font-size: 108px;
  line-height: 120px;
  text-align: center;
  margin-bottom: 174px;
`;

export const SliceWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 155px;

  p {
    width: 616px;
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const ThirdHeading = styled.h3`
  font-weight: 700;
  font-size: 88px;
  line-height: 120%;
`;

export const SecondWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 274px;
`;

export const BakeWrap = styled.div`
  padding-left: 71px;
  padding-top: 161px;

  h3 {
    margin-bottom: 21px;
  }

  p {
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: 46px;
  }
`;

export const PickledWrap = styled.div`
  h3 {
    margin-bottom: 28px;
  }

  p {
    color: ${({ theme }) => theme.colors.grey};
  }

  img {
    margin-bottom: 46px;
  }
`;
