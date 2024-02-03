import './App.css'
import {useDispatch,useSelector} from "react-redux";
import {openCloseModal} from "./redux/slices/modalSlice";
import Modal from "./modal/modal";

const App = () => {
  const {isModalOpen} = useSelector((state) => state.modal)
    const dispatch = useDispatch()
  return (
      <div className="App">
          <button onClick={()=>{
              dispatch(openCloseModal())
          }}>Open</button>
          {isModalOpen &&
          <Modal/>
          }
      </div>
  );
};
export default App;
