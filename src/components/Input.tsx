import React, {useState} from "react";
import TextArea from "antd/es/input/TextArea";
import {Button} from "antd";
import {useHistoryStore} from "../store/userHistory.ts";

const TextInput: React.FC = () => {
const [text, setText] = useState<string>('')
  const {convertPDF} =
    useHistoryStore();

  const handleConvertPdf = () => {
    text.length > 0 &&
    convertPDF(text)
  }

    return (
      <div className='flex flex-col'>
        <TextArea rows={10}  placeholder="Введіть текст для генерації PDF файлу" onChange={(e) => setText(e.target.value)}/>

        <Button color="cyan" variant="solid" className='mt-2' onClick={handleConvertPdf} disabled={!text.length}>
          Згенерувати
        </Button>

      </div>
    )
  }
;

export default TextInput;