import styles from "./mypage.module.scss";
import type { ReactElement, ReactNode } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import MyPageLayout from "@/components/mypage/layout";

// for dynamic components
import dynamic from "next/dynamic";
// let componentName: string = "main";

// 밑에 3줄은 없어도 되지만 그냥 있어도 됨
type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const MyPage: NextPageWithLayout = () => {
  const router = useRouter();
  let { slug } = router.query;
  // const slug = router.query.slug;
  if (slug === undefined) {
    // page refresh 했을 때 에러 수정
    slug = "main";
  }
  // console.log("Slug", router.query);

  const DynamicComponent = dynamic(
    () => import(`@/components/mypage/${slug}`)
    // {
    // ssr: false,
    // loading: () => <p>Loading Content...</p>,
    // }
  );

  return (
    <MyPageLayout>
      <DynamicComponent />
    </MyPageLayout>
  );
};

export default MyPage;
