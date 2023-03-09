import api from "./axios";

// 회원가입
export const signUp = async (newUser) => {
  try {
    console.log(newUser);
    const response = await api.post("/users/signup", newUser);
    // console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
    alert("회원가입 실패");
  }
};

// 로그인
export const logIn = async (userInfo) => {
  // try {
  const response = await api.post(
    "/users/login",
    userInfo,

    { withCredentials: true }
  );


  console.log("api : ", response);
  const token = response.headers.authorization;
  const refresh_token = response.headers.refresh_token;
  const nickname = response.data.nickname;
  const tokenN = token.split(" ")[1];
  const re_tokenN = refresh_token.split(" ")[1];

  // 로컬 스토리지에 access_token과 refresh_token 저장
  localStorage.setItem("access_token", tokenN);
  localStorage.setItem("refresh_token", re_tokenN);
  localStorage.setItem("nickname", nickname);

  // localStorage.setItem("refresh_token", response.data.refresh_token);
  // axios
  //axios 인스턴스의 default header에 access_token 설정
  // api.defaults.headers.common[
  //   "Authorization"
  // ] = `Bearer ${response.data.access_token}`;
  return response;
  // } catch (error) {
  //   console.log(error.response.data);
  //   alert("로그인 실패");
  //   return new Error("로그인 실패");
  // }

};
