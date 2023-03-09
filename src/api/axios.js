import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전 수행
    console.log("인터셉트 요청 성공!");
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // 오류 요청을 보내기 전 수행
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log("인터셉트 응답 받았어요!");
    // 정상 응답
    return response;
  },

  async (error) => {
    const originalRequest = error.config;
    console.log(error.response.status);

    //401에러 = 인증되지 않은 사용자 && error.config._retry가 앞에서 또 함수를 호출하지 않았는지?
    if (error.response.status === 401 && !originalRequest._retry) {
      console.log("인증되지 않은 사용자");
      originalRequest._retry = true;
      const refresh_token = localStorage.getItem("refresh_token");

      if (refresh_token) {
        try {
          console.log("재발급중...");
          const response = await axios.get(
            //재발급 토큰 api는 어떻게 됩니까?
            `${process.env.REACT_APP_SERVER_URL}/users/token`,
            {
              headers: {
                Refresh_Token: `Bearer ${refresh_token}`,
              },
            }
          );
          console.log("responce : : ", response);
          //back에서 어디서 refreshtoken을 줄꺼니? header에서 줄꺼니 body에서 줄꺼니?
          // const access_token = response.data.access_token;
          const access_token = response.headers.authorization.split(" ")[1];
          console.log("newaccess_token", access_token);
          localStorage.setItem("access_token", access_token);

          // originalRequest에 새로운 access_token 추가하여 다시 요청 보내기
          originalRequest.headers.Authorization = `Bearer ${access_token}`;
          console.log("발급완료 코드 재실행");
          console.log("originalRequest", originalRequest);
          return instance(originalRequest);
        } catch (error) {
          //refresh_token이 만료
          console.log("refresh 토큰 만료...");
          console.log(error);
          //토큰들 지워
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          localStorage.removeItem("nickname");

          alert("유효기간 만료 다시 로그인하세요!");
          window.location.href = "/";
          return Promise.reject(error);
        }
      } else {
        // refresh_token이 없는 경우
        console.log("모든 유효기간 완료 다시 로그인 하세요!");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("nickname");

        alert("유효기간만료! 다시 로그인 하세요!");
        window.location.href = "/"; // 로그인 페이지로 이동
        return Promise.reject(error);
      }
    }
  }
);

export default instance;
