// @ts-ignore
// * 이니시스 배포시 에러
import { ReactInicis } from "@hellojh/react-inicis";
import { useState } from "react";

const InicisPay = () => {
  const [isPurchase, setIsPurchase] = useState(0);

  let detail = {
    productName: "prdName",
    buyerName: "hellojh",
    buyerTel: "01011112222",
    buyerEmail: "test@test.com",
    productPrice: 1000,
    payStatus: 0,
    returnUrl: "http://localhost:3000/",
    /* 취소 안내 메시지 팝업
    closeUrl:"http://localhost:3000/",
     */
  };

  const [payData, setPayData] = useState(detail);

  const onChangePrice = (e: any) => {
    let newObj = payData;
    newObj.productPrice = e.target.value;
    setPayData({ ...newObj });
  };

  return (
    <span className="btn_primary" onClick={() => setIsPurchase(isPurchase + 1)}>
      바로 구매
      <ReactInicis payData={payData} isPurchase={isPurchase} isTest />
    </span>
  );
};

export default InicisPay;
