import React from 'react';
import './App.css'; // App.css를 import (필요한 경우)
import SignupForm from './SignupForm'; // SignupForm 컴포넌트를 import

const App = () => {
  return (
    <div className="App"> {/* .App 클래스 적용 */}
      <SignupForm /> {/* SignupForm 컴포넌트 추가 */}
    </div>
  );
};

export default App;

