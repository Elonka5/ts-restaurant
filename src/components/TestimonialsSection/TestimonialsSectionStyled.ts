import styled from 'styled-components';
import commasvg from '../../assets/images/svg/comma.svg';

export const TestimSection = styled.section`
  padding-top: 118px;
  padding-bottom: 144px;
  background-image: url(${commasvg});
  background-repeat: no-repeat;
  background-position: top 118px right 255px;
`;

export const ContainerTestimonials = styled.div`
  padding-left: 112px;
  padding-right: 88px;
`;

export const QuoteText = styled.p`
  font-size: 48px;
  line-height: 64px;
  font-family: 'RufinaBold', sans-serif;
  width: 1262px;
  margin-bottom: 86px;
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 170px;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const WrapImgAndText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

export const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 47px;
  padding-bottom: 47px;
`;

export const Text = styled.p`
  font-size: 32px;
  line-height: 48px;
  font-family: 'RufinaBold', sans-serif;
`;

export const WrapperBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding-top: 60px;
  padding-bottom: 60px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const MainWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
