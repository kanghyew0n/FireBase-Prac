import styled from "@emotion/styled";

const LoginButton = ({ onClick, text }: any) => {
    return <Button onClick={onClick}>{text}</Button>;
};

const Button = styled.button`
    padding: 17px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: none;
`;


export default LoginButton;
