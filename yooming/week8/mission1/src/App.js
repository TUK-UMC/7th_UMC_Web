import { TodoProvider } from './components/TodoContext';
import AppContent from './components/AppContent';
import { createGlobalStyle } from 'styled-components';

// 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f8ff;
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle /> {/* 전역 스타일 적용 */}
      <TodoProvider>
        <AppContent />
      </TodoProvider>
    </>
  );
}

export default App;
