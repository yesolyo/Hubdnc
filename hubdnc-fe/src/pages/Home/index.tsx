import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Counter from '../../components/Home/Counter';
import { useNavigate } from 'react-router-dom';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
  height: 100%;

  .counter-box {
    display: flex;
    gap: 20px;
  }
  .total-box {
    display: flex;
    padding: 70px;
    border: 1px solid #000;
    width: 50vw;
    justify-content: center;
    background: green;
    color: white;
    font-size: 50px;
  }
  .button {
    width: 100px;
    height: 50px;
  }
`;
const Home = () => {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const counterList = new Array(5).fill(1).map((_, i) => i);

  const handleSaveTotalPrice = useCallback((price: number) => {
    setPrice((prev) => prev + price);
  }, []);

  const handleClickExit = () => {
    navigate('/exit');
  };

  useEffect(() => {
    if (isMounted.current)
      return () => alert('창구에 있는 합산된 정보는 사라집니다');
    else isMounted.current = true;
  }, []);

  return (
    <Layout>
      <div className="counter-box">
        {counterList.map((c) => (
          <Counter key={c} onSaveTotalPrice={handleSaveTotalPrice} />
        ))}
      </div>
      <div className="total-box">총합: {price.toLocaleString()}원</div>
      <button type="button" className="button" onClick={handleClickExit}>
        나가기
      </button>
    </Layout>
  );
};

export default Home;
