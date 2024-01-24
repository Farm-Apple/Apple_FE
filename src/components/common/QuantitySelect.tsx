import styled from 'styled-components';

type Props = {
  onClick: (number: number) => void;
  Counter: number;
};

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 85px;
  border: 1px solid #000;
  label {
    background-color: red;
  }
  input {
    width: 100%;
    height: 20px;
    color: #000;
    background-color: green;
    border: none;
    text-align: center;
    border: 1px solid #000;
  }
`;

const QuantitySelect: React.FC<Props> = ({ Counter, onClick }) => {
  return (
    <QuantityContainer>
      <button type='button' onClick={() => onClick(+1)}>
        +
      </button>
      <label>
        <input type='number' value={Counter} min={1} readOnly />
      </label>
      <button type='button' onClick={() => onClick(-1)}>
        -
      </button>
    </QuantityContainer>
  );
};

export default QuantitySelect;
