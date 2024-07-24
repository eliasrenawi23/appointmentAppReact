import styled from "styled-components";

export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.section`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
`;

export const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ServiceItem = styled.li`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  padding: 5px 0;
  &:before {
    content: "•";
    color: #ff6347;
    margin-right: 10px;
  }
`;
