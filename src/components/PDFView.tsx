import React, {useState} from "react";
import {Document, Page, pdfjs} from 'react-pdf';
import {useHistoryStore} from "../store/userHistory.ts";
import {PDFDocumentProxy} from "pdfjs-dist/types/src/display/api";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();


const PdfViewer: React.FC = () => {
  const {data} = useHistoryStore();
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({
     numPages: nextNumPages}: PDFDocumentProxy): void
  {
    setNumPages(nextNumPages);
  }

  return (
    <div className="border p-2 w-full h-96 overflow-auto shadow-md rounded">
      <Document
        file={data}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (_el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ))}
      </Document>
    </div>
  )
};

export default PdfViewer;