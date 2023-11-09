import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  onSaveTotalPrice: (value: number) => void;
}

const Layout = styled.div`
  padding: 50px;
  border: 1px solid #000;
`;
const Counter = ({ onSaveTotalPrice }: Props) => {
  const [price, setPrice] = useState(0);
  //각 창구에 돈을 설정하기위해서 랜덤숫자를 얻을 수 있는 함수를 구현하였으며,
  //얻은 랜덤 숫자를 setState에 저장하여 창구에 숫자가 표시되게 설정하였습니다.
  //첫번째 useEffect에서는 창구에 표시되는 숫자를 저장하며, 두번째 useEffect는 총합에 저장되게하는 하는 기능을 수행하였습니다.
  //서로 의존성이 없어서 두 개의 useEffect를 사용하였습니다.
  useEffect(() => {
    const getRandomNumber = () => {
      const numberList = new Array(6).fill(0);
      numberList.forEach(
        (_, i) => (numberList[i] = Math.floor(Math.random() * 10)),
      );
      return Number(numberList.join(''));
    };
    const randomPrice = getRandomNumber();
    setPrice(randomPrice);
  }, []);

  useEffect(() => {
    onSaveTotalPrice(price);
  }, [onSaveTotalPrice, price]);

  return <Layout>{price.toLocaleString()}원</Layout>;
};

export default Counter;
