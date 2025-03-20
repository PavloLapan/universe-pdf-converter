import { Layout } from "antd";
import React from "react";
import HistoryList from "./HistoryList.tsx";
const { Header } = Layout;

const AppHeader: React.FC = () => {

  return (
    <Header className="flex flex-row bg-white! items-center w-full justify-between">
        <HistoryList />
        <h1 className='ml-3'>Universe group pdf converter</h1>
    </Header>
  );
};
export default AppHeader;