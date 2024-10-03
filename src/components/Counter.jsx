import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/features/CountSlice";

function Counter() {
  const counter = useSelector((state) => state.count);

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col h-screen bg-[#252525] text-[white] items-center justify-center gap-8">
      <Typography variant="h1">Count : {counter}</Typography>
      <div className="flex gap-2">
        <Button
          variant="filled"
          color="blue"
          className="hover:bg-orange-800"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          variant="filled"
          color="blue"
          className="hover:bg-orange-800"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default Counter;
