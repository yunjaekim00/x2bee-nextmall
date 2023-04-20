import styles from "@/styles/Home.module.scss";
// import TasteBrandRecommend from "@/components/home/TasteBrandRecommend";
//* 갑자기 동작을 안 함. BO쪽에 Groobee 코드 때문으로 추정.
import RecentBuyRecommend from "@/components/home/RecentBuyRecommend";
import NewArrivalRecommend from "@/components/home/NewArrivalRecommend";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* <TasteBrandRecommend /> */}
      <RecentBuyRecommend />
      <NewArrivalRecommend />
    </div>
  );
}
