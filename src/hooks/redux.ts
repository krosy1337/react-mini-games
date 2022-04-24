import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {checkWinner, makeMove } from "store/slices/ticTacToeSlice";
import { RootState } from "store/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const actionCreators = {
    makeMove,
    checkWinner,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(actionCreators, dispatch)
}