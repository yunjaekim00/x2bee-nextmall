import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import getMyHeart from "@/pages/api/member/myHeart";

const Heart = () => {
  // accessToken 가져오기
  const { loginResponse } = useSelector((state: RootState) => state.signIn);

  // Fetch MyHeart 목록
  const [myHeartList, setMyHeartList] = useState({});
  useEffect(() => {
    const fetchMyHeart = async () => {
      const data = await getMyHeart(loginResponse.accessToken);
      setMyHeartList(data);
    };
    fetchMyHeart();
  }, []);

  // console.log("MyHearList", myHeartList);

  return (
    <div>
      <h1>My Heart</h1>
    </div>
  );
};

export default Heart;
