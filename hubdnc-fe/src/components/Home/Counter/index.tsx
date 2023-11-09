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

  useEffect(() => {
    const getRandomNumber = () => {
      let str = '';
      for (let i = 0; i < 6; i++) {
        str += Math.floor(Math.random() * 10);
      }
      return Number(str);
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
