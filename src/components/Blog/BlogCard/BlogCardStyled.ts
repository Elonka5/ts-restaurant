import styled from 'styled-components';

export const CardBlog = styled.li`
  width: 792px;
  height: 1325px;
`;

export const CategoryText = styled.p`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 10px 30px;
  width: 203px;
  height: 62px;
  background-color: #5e6600;
  box-shadow: 1px 1px 12px 0 rgba(0, 0, 0, 0.08);
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
`;

export const Thumb = styled.div`
  position: relative;

  img {
    height: 792px;
    object-fit: cover;
  }
`;

export const DescriptionWrap = styled.div`
  padding: 68px 75px 82px 72px;
`;

export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #5e6600;
  }
`;

export const TitleBlogWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 46px;

  h2 {
    font-size: 48px;
    line-height: 64px;
  }

  p {
    color: #4d4d4d;
  }
`;
