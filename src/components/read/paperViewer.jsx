import React, {useState} from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import PDFToolbar from "./pdfToolbar";
import Container from '@material-ui/core/Container'


const PaperViewer = (props) => {
    const [numPages, setNumPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);
    const paperUrl = "http://localhost:3001/pubstore/" +props.paper.pdf_path
    if(props.paper.pdf_path=="" || props.paper.pdf_path==undefined) return false

    function onDocumentLoadSuccess({ numPages }) {
        setNumPage(numPages)
    }

    function handlePageChange (e) {
        const page = parseInt(e.target.value)
        if(page>numPages || page<1 || isNaN(page)) return
        setPageNumber(parseInt(e.target.value))
    }



    return (
        <Container className="paper-container container-md">
            {/*<PDFToolbar />*/}
            <div>
                <div><p>Page <input type="text" value={pageNumber} size="1" onChange={handlePageChange}/> of {numPages}</p></div>
                <Document
                    file={paperUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber}/>

                </Document>


            </div>
        </Container>
    )

}

export default PaperViewer