// SDK에서 필요한 기능 가져오기
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 사용하려는 Firebase 제품에 SDK 추가
// Firebase JS SDK v7.20.0 이상의 경우 measurementId는 옵션이다
const firebaseConfig = {
  apiKey: "AIzaSyDAsfG_Q9XJk8nHr4a6wydRMfPe506WeCw",
  authDomain: "test-200b1.firebaseapp.com",
  projectId: "test-200b1",
  storageBucket: "test-200b1.appspot.com",
  messagingSenderId: "324995575478",
  appId: "1:324995575478:web:e6ef1aac29fb29af674017",
  measurementId: "G-LG27L18F8W"
};

// 파이어베이스 초기화
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);