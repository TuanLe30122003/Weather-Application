"use client"
import React, { useContext } from "react"
import { createContext } from "react"

const globalContext = createContext();
const GlobalContextUpdate = createContext();

// globalContext được sử dụng để chia sẻ dữ liệu (state) giữa các component.
// GlobalContextUpdate được sử dụng để chia sẻ các hàm cập nhật trạng thái(state update functions).

export const GlobalContextProvider = ({ children }) => {

}

export const useGlobalContext = () => useContext(GlobalContext)

export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate)