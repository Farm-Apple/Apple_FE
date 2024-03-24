import {useDaumPostcodePopup} from "react-daum-postcode";
import {postcodeScriptUrl} from "react-daum-postcode/lib/loadPostcode";
import styled from "styled-components";
import {Dispatch, SetStateAction} from "react";

const DeliveryFormLabel = styled.label`
    display:flex;
    align-items:center;
    padding:1rem 0;
    border-bottom:1px solid #c4c4c4;
`

const InputDirectionColumnWrap = styled.label`
    display:flex;
    flex-direction:column;
    gap:1rem;
`
const DeliveryFormInputDefault = styled.input`
    width:350px;
    padding:1rem;
    border:1px solid #c4c4c4;
    outline:none;
`
const DeliveryFormInputLong = styled(DeliveryFormInputDefault)`
    width:700px;
`

const DeliveryFormText = styled.p`
    font-size:1.6rem;
    width:200px;
`

interface AddressSearchType{
    children:string;
    addressObj: {
        areaAddress: string;
        townAddress: string;
    };
    setAddressObj: Dispatch<SetStateAction<{areaAddress: string; townAddress: string; }>>;
}

function AddressSearch({addressObj, setAddressObj}: AddressSearchType){
    //클릭 시 수행될 팝업 생성 함수
    const open = useDaumPostcodePopup(postcodeScriptUrl);

    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = ''; //추가될 주소
        let localAddress = data.sido + ' ' + data.sigungu; //지역주소(시, 도 + 시, 군, 구)
        if (data.addressType === 'R') { //주소타입이 도로명주소일 경우
            if (data.bname !== '') {
                extraAddress += data.bname; //법정동, 법정리
            }
            if (data.buildingName !== '') { //건물명
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            //지역주소 제외 전체주소 치환
            fullAddress = fullAddress.replace(localAddress, '');
            //조건 판단 완료 후 지역 주소 및 상세주소 state 수정
            setAddressObj({
                areaAddress: localAddress,
                townAddress: fullAddress += (extraAddress !== '' ? `(${extraAddress})` : '')
            });
            //주소 검색이 완료된 후 결과를 매개변수로 전달
            // 다음에 수행할 작업을 명시
        }
    }
    //클릭 시 발생할 이벤트
    const handleClick = () => {
        //주소검색이 완료되고, 결과 주소를 클릭 시 해당 함수 수행
        open({onComplete: handleComplete});
    }
    return (
        <>
            <DeliveryFormLabel>
                <DeliveryFormText>주소찾기</DeliveryFormText>
                <InputDirectionColumnWrap>
                    <DeliveryFormInputLong onClick={handleClick} value={addressObj.areaAddress + addressObj.townAddress}></DeliveryFormInputLong>
                    <DeliveryFormInputLong placeholder="상세주소 입력"></DeliveryFormInputLong>
                </InputDirectionColumnWrap>
            </DeliveryFormLabel>
        </>

    )
}

export default AddressSearch;