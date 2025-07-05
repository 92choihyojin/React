import "./App.css";
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';

function App() {
 

  return (
    <>
      <h1>오늘 할 일 앱</h1>
			<Header/>
			<Editor/>
			<List/>
    </>
  );
}

export default App;
