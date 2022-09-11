
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions';
function App() {
  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch();
  return (
    <div className="App">
   <h1>Increment/Decrement Counter</h1>
   <h4>using React and Redux</h4>

<div className="quantity">
  <a href="#" className="quantity-_minus" title="decrement" onClick={()=>dispatch(decNumber(2))}><span>-</span></a>
  <input type="text" className="quantity_input" name="quantity" value={myState} />
  <a href="#" className="quantity_plus" title="increment" onClick={()=>dispatch(incNumber(5))}><span>+</span></a>
</div>
    </div>
  );
}
  // 3310540227889 2-9-2021 30-9  coronaVac-sinoVac

export default App;
