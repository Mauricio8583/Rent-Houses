import styled from "styled-components";

export const LoginContainer = styled.div`


`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;