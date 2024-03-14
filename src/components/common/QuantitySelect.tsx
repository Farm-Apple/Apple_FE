import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type Props = {
  onClick: (number: number) => void;
  Counter: number;
};

const QuantityContainer = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 15rem;
  height: 5rem;
  border: 1px solid #c4c4c4;
  border-radius: 0.5rem;
  label {
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 100%;
  }
  input {
    text-align: center;
    width: 100%;
    height: 100%;
    color: #000;
    font-size: 1.5rem;
    padding-left: 12px;
    border: none;
  }
`;
const PlusButton = styled.button`
  height: 100%;
  border-left: 1px solid #c4c4c4;
  border-radius: 0 0.5rem 0.5rem 0;
  background-color: rgba(255, 255, 255, 1);
`;
const MinusButton = styled.button`
  height: 100%;
  border-right: 1px solid #c4c4c4;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: rgba(255, 255, 255, 1);
`;
const QuantitySelect: React.FC<Props> = ({ Counter, onClick }) => {
  return (
    <QuantityContainer>
      <MinusButton
        type="button"
        disabled={Counter === 1}
        onClick={() => onClick(-1)}
      >
        <RemoveIcon />
      </MinusButton>
      <label>
        <input type="number" value={Counter} min={1} readOnly />
      </label>
      <PlusButton
        type="button"
        disabled={Counter > 9}
        onClick={() => onClick(+1)}
      >
        <AddIcon />
      </PlusButton>
    </QuantityContainer>
  );
};

export default QuantitySelect;
