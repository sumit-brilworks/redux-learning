import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../store/features/CountSlice";
import {
  incrementAction,
  decrementAction,
  incrementByCount,
} from "../store/features/counterReducer";

function Counter() {
  const counter = useSelector((state) => {
    console.log("state", state);
    return state.counter;
  });

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col h-screen bg-[#252525] text-[white] items-center justify-center gap-8">
      <Typography variant="h1">Count : {counter}</Typography>
      <div className="flex gap-2">
        <Button
          variant="filled"
          color="blue"
          className="hover:bg-orange-800"
          onClick={() => dispatch(incrementAction())}
        >
          Increment
        </Button>
        <Button
          variant="filled"
          color="blue"
          className="hover:bg-orange-800"
          onClick={() => dispatch(decrementAction())}
        >
          Decrement
        </Button>
        <Button
          variant="filled"
          color="blue"
          className="hover:bg-orange-800"
          onClick={() => dispatch(incrementByCount(30))}
        >
          Increment By 20
        </Button>
      </div>
    </div>
  );
}

export default Counter;
