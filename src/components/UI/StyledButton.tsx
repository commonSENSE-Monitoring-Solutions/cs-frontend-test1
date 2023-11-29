import { styled } from "styled-components";

export const StyledButton = styled.button<{
  animateintro: string;
}>`
  display: inline-block;
  padding: 15px 30px;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #3C5B74;
  border: 1px solid #519DB8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: color 0.7s, background 1s, transform 0.5s, opacity 2s ease-in-out;

  opacity: ${({ animateintro }) => (animateintro === 'true'? 1 : 0)};
  transform: ${({ animateintro }) => (animateintro === 'true' ? 'scale(1)' : 'scale(0.5)')};

  &:hover {
    background: linear-gradient(to bottom, #2980b9, #3498db);
    transform: scale(1.05);
    color: #fff;
  }
` 