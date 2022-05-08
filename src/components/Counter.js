import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const toggle = useSelector(state => state.counter.isShow);
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(counterActions.increase())
  }

  const increaseBy5Handler = () => {
    dispatch(counterActions.increaseBy5(5))
  }

  const resetHandler = () => {
    dispatch(counterActions.reset())
  }

  const decreaseHandler = () => {
    dispatch(counterActions.decrease())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div className={classes.counterBtns}>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={increaseBy5Handler}>Increase by 5</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={decreaseHandler}>Decrease</button>
      </div>
      <button className={classes.toggleBtn} onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
