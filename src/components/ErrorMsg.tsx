import styled from 'styled-components';
interface Props {
  msg: string;
}
const ErrorMsgWrapper = styled.div`
font-size: 1.6rem;
font-weight: bold;
color: #e01e5a;
`;

const ErrorMsg: React.FC<Props> = ({ msg }) => {
  return <ErrorMsgWrapper>{msg}</ErrorMsgWrapper>;
};

export default ErrorMsg;
