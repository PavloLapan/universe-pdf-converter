import React, {useState} from "react";
import Sider from "antd/es/layout/Sider";
import { Button, Menu } from "antd";
import { styled } from "styled-components";
import { MenuUnfoldOutlined, MenuFoldOutlined  } from "@ant-design/icons";
import {useHistoryStore} from "../store/userHistory.ts";

interface HistoryListProps {
  history: string[];
  onSelect: (url: string) => void;
}

const StyledSider = styled(Sider)<{collapsed: boolean}>`
    position: fixed;
    left: ${({ collapsed }) => (collapsed ? "-250px" : "0")};
    top: 0;
    height: 100vh;
    z-index: 1000;
    background: white;
    transition: left 0.3s ease-in-out;
    box-shadow: ${({ collapsed }) => (collapsed ? "none" : "2px 0 8px rgba(0, 0, 0, 0.15)")};
`;


const HistoryList: React.FC<HistoryListProps> = () => {
  const [collapsed, setCollapsed ] = useState<boolean>(true)
  const { history, selectHistoryItem } = useHistoryStore();


  const handleClick = (file: File) => {
    selectHistoryItem(file)
    setCollapsed(true)
  }

  return (
    <>
      <div className='flex items-center '>
        <Button
          type="primary"
          icon={<MenuUnfoldOutlined style={{color: "white"}}/>}
          onClick={() => setCollapsed(false)}
        />
        <h2 className='ml-2'>Icторія</h2>
      </div>

      <StyledSider width={250} collapsed={collapsed}>
      <div className="flex items-center p-4 bg-gray-100 items-center">
        <Button
          type="primary"
          icon={<MenuFoldOutlined style={{ color: "white" }} />}
          onClick={() => setCollapsed(true)}
        />
        <h2 className={`text-lg ml-2 font-bold ${collapsed ? "hidden" : "block"}`}>Історія</h2>
      </div>

      <Menu mode="inline" className="border-r">
        {history.map((file, index) => (
          <Menu.Item key={index} onClick={() =>handleClick(file)}>
            Переглянути PDF {index + 1}
          </Menu.Item>
        ))}
      </Menu>
    </StyledSider>

    </>

  );
};

export default HistoryList;