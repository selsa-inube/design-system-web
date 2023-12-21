import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  width: 200px;
  height: 250px;
  padding: 10px 20px;
  text-decoration: none;
  overflow: hidden;
  border-radius: 10px;
  background-color: #f2f2f2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
`;
