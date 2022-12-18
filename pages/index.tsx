import Layout from "../components/Layout";
import styled from "@emotion/styled";
import Link from "next/link";
import { auth } from "../firebase/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Home() {
    const googleLogin = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential:any = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log("result", result);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
      
    };

    return (
        <Layout>
            <LoginContainer>
                <LoginTop>
                    <h2>Trip Buddy</h2>
                    <span>간편한 여행 가이드</span>
                </LoginTop>
                <LoginBottom>
                    <div>
                        <button className="kakao">카카오톡 로그인</button>
                        <button className="face">페이스북 로그인</button>
                        <button className="naver" onClick={googleLogin}>
                            구글 로그인
                        </button>
                    </div>
                    <div>
                        <Link href={"/main"}>
                            <button className="test">
                                테스트 계정으로 로그인
                            </button>
                        </Link>
                    </div>
                </LoginBottom>
            </LoginContainer>
        </Layout>
    );
}

const LoginContainer = styled.div`
    max-width: 720px;
    margin: 0 auto;
    background-color: #2864ff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const LoginTop = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: GmarketSans;
    & h2 {
        font-size: 42px;
        font-weight: 700;
    }
    & span {
        margin-top: 15px;
        font-weight: 500;
    }
`;
const LoginBottom = styled.div`
    flex: 1;
    background-color: #fff;
    border-radius: 40px 40px 0 0;
    padding: 30px;
    & div {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        & a > button {
            width: 100%;
        }
        & button {
            padding: 17px;
            margin-bottom: 15px;
            border-radius: 5px;
            border: none;
        }
        .kakao {
            background-color: #fde03d;
            color: black;
        }
        .face {
            background-color: #006dea;
            color: #fff;
        }
        .naver {
            background-color: #00cb31;
            color: #fff;
        }
        .test {
            background-color: #fff;
            border: 1px solid #006dea;
            color: #006dea;
        }
    }
`;
