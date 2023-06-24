import './App.css';
import { useModalContext } from './hook/useModal';
import Modal from './component/Modal';

function MyTestModal() {
  const content = (
    <div><b>てすと</b><br/><br/>てすとてすと</div>
  );
  const params = {
    content: content,
    closeLabel: "閉じる",
    backdropClickToClose: true
  };
  return (
    <Modal params={params} />
  );
}

function App() {
  const { showModal } = useModalContext();
  return (
    <div className="App">
      <button onClick={showModal}>モーダルを表示</button>
      <MyTestModal />
    </div>
  );
}

export default App;
