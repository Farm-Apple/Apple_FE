import { useEffect } from 'react';
import { getProductDetail } from '../../api/auth/product';

export default function DetailBoardPage() {
  const Detail = async () => {
    const data = await getProductDetail(2);
    console.log(data.data);
    return data;
  };
  useEffect(() => {
    Detail();
  }, []);
  return <p>DetailBoard Page</p>;
}
