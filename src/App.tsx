import React from "react";
import './App.css'
import {Layout} from "antd";
import AppHeader from "./components/Header.tsx";
import TextInput from "./components/Input.tsx";
import {Content} from "antd/es/layout/layout";
import PdfViewer from "./components/PDFView.tsx";

const App: React.FC = () => {

  return (
    <>
      <Layout className="flex">
        <AppHeader/>
      </Layout>

      <Layout className="flex flex-row! h-screen m-4 rounded-xl ">
        <Content className='p-4 max-w-1/2'>
          <TextInput />
        </Content>

        <Content className='p-4 max-w-1/2'>
          <PdfViewer />
        </Content>
      </Layout>
    </>
  );
};

export default App;
