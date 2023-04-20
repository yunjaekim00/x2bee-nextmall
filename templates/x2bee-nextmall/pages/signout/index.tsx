import styles from "./logout.module.scss";
import { useRouter } from "next/router";
// login Redux
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setLogin } from "@/store/auth/signInInfoSlice";
import { setTokenInfo } from "@/store/auth/signInSlice";
import apiSignOut from "../api/member/apiSignOut";

const Logout = () => {
  const router = useRouter();
  const { loginResponse } = useSelector((state: RootState) => state.signIn);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogoutInfo = () => {
    const signOut = async () => {
      const data = await apiSignOut(
        loginResponse.accessToken,
        loginResponse.refreshToken
      );
      // console.log("SignOutRes", data);
      if (data === "success") {
        dispatch(setLogin(false));
        dispatch(setTokenInfo({}));
        router.push({ pathname: "/" });
      } else {
        console.log("error", data);
      }
    };
    signOut();
  };

  return (
    <div className={styles.logout}>
      <h2 className={styles.logout__header}>로그아웃</h2>
      <h2 className={styles.logout__text}>로그아웃 하시겠습니까?</h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={styles.logout__form}
      >
        <div></div>

        <div />
        <button
          className="btn_primary"
          type="button"
          onClick={handleLogoutInfo}
        >
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default Logout;
