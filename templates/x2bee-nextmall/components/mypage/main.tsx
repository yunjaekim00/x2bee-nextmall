import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import styles from "./main.module.scss";
import MyPageDataType from "@/models/member/myPageDataType";
import MyInfoDataType from "@/models/member/myInfoDataType";
import * as Format from "@/utils/formatter";
// fetch api import
import apiMyPageMain from "@/pages/api/member/myPageMain";
import apiMemberInfo from "@/pages/api/member/memberInfo";

const Main = () => {
  // i18n Number Format
  const formatter = new Intl.NumberFormat("ko", {});

  // accessToken 가져오기
  const { loginResponse } = useSelector((state: RootState) => state.signIn);

  // data 저장
  const [myPageData, setMyPageData] = useState<MyPageDataType>({});
  const [myInfo, setMyInfo] = useState<MyInfoDataType>({});

  // myPageData 가져오기
  useEffect(() => {
    const fetchMyPageMain = async () => {
      const data = await apiMyPageMain(loginResponse.accessToken);
      setMyPageData(data);
    };
    const fetchMyInfo = async () => {
      const data = await apiMemberInfo(loginResponse.accessToken);
      setMyInfo(data);
    };

    fetchMyPageMain();
    fetchMyInfo();
  }, []);

  // console.log("INFO", myInfo);

  return (
    <div className={styles.mypage}>
      <div className={styles.mypage__title}>
        <h1>마이페이지</h1>
      </div>
      {/* -- 첫째 단락 --- */}
      <div className={styles.mypage__infowrapper}>
        <div className={styles.mypage__infowrapper__info}>
          <span>
            <h2>{myPageData.mbrNm}</h2>
          </span>
          <span>
            <h3>님</h3>
          </span>
        </div>
        <div className={styles.mypage__infowrapper__info}>
          <h3>e-money</h3>
          <span>
            <h2>
              {formatter.format(myPageData.benefitInfo?.emoneyAvalAmt || 0)}
            </h2>
          </span>
          <span>
            <h3>points</h3>
          </span>
        </div>
      </div>
      {/* -- 두째 단락 --- */}
      <div className={styles.mypage__membershipwrapper}>
        <div className={styles.mypage__membershipwrapper__info}>
          <h3>현재 {myPageData.mbrNm} 님의 회원 등급</h3>
          <span className={styles.border}>
            <h1>{myInfo.mbrGradeNm}</h1>
          </span>
          <h4>
            등급: {Format.StringToDate(myInfo.histStrDt || "00000000")}에서{" "}
            {Format.StringToDate(myInfo.histEndDt || "00000000")}까지
          </h4>
        </div>

        <div className={styles.mypage__membershipwrapper__info}>
          <h1>{myInfo.mbrMgrNm}</h1>
          <h4>Since {Format.StringToDate(myInfo.mbrJoinDt || "00000000")}</h4>
        </div>
      </div>
    </div>
  );
};

export default Main;
