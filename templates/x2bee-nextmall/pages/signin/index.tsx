import { useEffect, useState, CSSProperties } from "react";
import styles from "./login.module.scss";
import { useRouter } from "next/router";
// login Redux
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setLogin } from "@/store/auth/signInInfoSlice";
import { signingIn } from "@/store/auth/signInSlice";
import { setBasketCount } from "@/store/auth/signInInfoSlice";
// loading spinner
import { ClipLoader } from "react-spinners";
// api fetch
import getTotalBasketCount from "@/pages/api/order/getTotalBasketCount";

const Login = () => {
  // 패스워드 정규표현식으로 체크
  const passwordCheck1 = (pwd: string) => {
    let pwdReg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
    if (pwdReg.test(pwd)) return true;
    else return false;
  };

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { loginResponse, loading } = useSelector(
    (state: RootState) => state.signIn
  );
  // console.log("Token", loginResponse.accessToken);

  // 장바구니 개수 count 가져오기 위함
  const { isLogin, totalBasketCount } = useSelector(
    (state: RootState) => state.isLogin
  );

  // 로그인 실행되면 isLogin을 true로 놓기 & 장바구니 개수 가져오기
  useEffect(() => {
    if (loginResponse.accessToken) {
      const fetchTotalBasket = async () => {
        const data = await getTotalBasketCount(loginResponse.accessToken);
        dispatch(setBasketCount(data?.totBsketCnt));
      };
      fetchTotalBasket();
      dispatch(setLogin(true));
      router.push({ pathname: "/" });
    }
  }, [loginResponse]);

  // 빠른 로그인을 위해 하드코딩
  const [loginInfo, setLoginInfo] = useState({
    // loginId: "test001",
    // password: "asdqwe123!",
    loginId: "test001",
    password: "1111",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // input form의 controlled component
  const handleInputValue = (key: string) => (e: any) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLoginInfo = () => {
    const { loginId, password } = loginInfo;

    // * 잘 동작하는 정규식 유효성 검사인데 패스워드가 '1111'이어서 주석처리
    // 아이디 비번 정규식으로 유효성 검사
    // if (!loginId && !password) {
    //   setErrorMessage("아이디과 비밀번호를 입력하세요");
    //   return;
    // } else if (!loginId) {
    //   setErrorMessage("아이디을 입력하세요");
    //   return;
    // } else if (!password) {
    //   setErrorMessage("패스워드를 입력하세요");
    //   return;
    // } else if (!passwordCheck1(password)) {
    //   setErrorMessage(
    //     "비밀번호는 영문/숫자/특수문자로 이루어진 8~16자 사이입니다."
    //   );
    //   return;
    // }

    // 로그인 실행
    dispatch(signingIn({ loginId, password }));
  };

  // 로그인 loading시 spinner customization
  const spinnerStyle: CSSProperties = {
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className={styles.login}>
      {loading && (
        <div className={styles.loading}>
          <ClipLoader cssOverride={spinnerStyle} aria-label="Loading Spinner" />
          <div className={styles.loading__text}>로그인 진행중...</div>
        </div>
      )}
      <h2 className={styles.login__header}>로그인</h2>
      <form onSubmit={(e) => e.preventDefault()} className={styles.login__form}>
        <div>
          <input
            type="text"
            onChange={handleInputValue("loginId")}
            placeholder="아이디를 입력하세요."
            value={loginInfo.loginId}
          />
        </div>
        <div></div>
        <div>
          <input
            type="password"
            onChange={handleInputValue("password")}
            placeholder="비밀번호를 입력하세요."
            value={loginInfo.password}
          />
        </div>

        <div className={styles.login__errorMessage}>{errorMessage}</div>

        <div />
        <button className="btn_primary" type="button" onClick={handleLoginInfo}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
