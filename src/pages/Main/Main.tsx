import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";

const Main: FC = () => {

  const [backData, setBackData] = useState({})

  useEffect(() => {
    if (Object.keys(backData).length < 1) {
      const response = axios.get("")
      setBackData(response)
    }

  }, [backData])
  return (
    !backData ? "...loading" :
      <div>
        <Dropdown />

      </div>
  )
}

export default Main