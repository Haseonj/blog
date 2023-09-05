import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Destructing 문법 : 배열의 형태맞춤으로 [a, b] = [1, 2] -> a = 1, b = 2
// let [get(state), set(state변경함수)] = useState(초기값) : 바뀌면 자동으로 재랜더링이 됨, 변수는 직접 바꿔줘야 함
// useState 에서 get 값을 바꿀수는 없음, set 값을 바꿔서 get 값으로 적용시켜야함

/*
  컴포넌트로 만들면 좋은 케이스
    - 반복적으로 나오는 html 형식
    - 자주 변경되는 html UI들
    - 다른 페이지 만들 때도 컴포넌트로 만듦
*/

/*
  컴포넌트를 많이 만들면 생기는 단점
    - state 쓸 때 복잡해짐(상위 컴포넌트에서 만든 state 쓰려면 props 문법을 사용해야함)

*/

// 이것도 일종의 컴포넌트
function App() {

  let [post, setPost] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [like, setLike] = useState(0);

  // function ModifyPost() {
  //   var newArray = [...post];    // [...post] : deep copy, 그냥 post만 쓰면 값을 공유한다. 라는 의미임
  //   newArray[0] = '여자코트 추천';
  //   setPost(newArray);
  // }

  // function SortPost() {
  //   var newArray = [...post];
  //   newArray.sort();
  //   setPost(newArray);
  // }
  

  return (

    <div className="App">

      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{post[0]} <button onClick={ () => {setLike(like + 1)} }>👍</button> {like} </h4>
        <p>9월 5일 발행</p>
      </div>
      <div className='list'>
        <h4>{post[1]}</h4>
        <p>9월 5일 발행</p>
      </div>
      <div className='list'>
        <h4>{post[2]}</h4>
        <p>9월 5일 발행</p>
      </div>

      <Modal/>

    </div>
  );
}

// Component : html 형식을 작성한 뒤 함수 이름을 태그로 사용함
// 태그를 명시해두면 해당 함수에 있던 마크업 언어를 불러오는 방식
// 컴포넌트 시작이름은 대문자로
// return 안에 반드시 태그 하나로 묶어야 함
function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )


}

export default App;
