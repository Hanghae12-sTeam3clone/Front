import { useEffect, useState } from "react";

export function useInfiniteScroll() {
  const [page, setPage] = useState(0);
  function handleScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
    // if (
    //   document.documentElement.scrollTop + window.innerHeight + 300 >=
    //   document.documentElement.scrollHeight
    // ) {
    //   setPage((p) => p + 1);
    // }
  }
  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () =>
      // 끝나면 scroll event listener 제거해서 계~속 더 못 내리게
      {
        window.removeEventListener("scroll", handleScroll);
      };
  });
  return page;
}
