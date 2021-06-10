import React, {useState} from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


const PDFToolbar = () => {
    return (
        <div className="toolbar">
            <div id="toolbarContainer">
                <div id="toolbarViewer">
                    <div id="toolbarViewerLeft">
                        <button id="sidebarToggle" className="toolbarButton" title="Toggle Sidebar" tabIndex="11"
                                data-l10n-id="toggle_sidebar" aria-expanded="false" aria-controls="sidebarContainer">
                            <span data-l10n-id="toggle_sidebar_label">Toggle Sidebar</span>
                        </button>
                        <div className="toolbarButtonSpacer"></div>
                        <button id="viewFind" className="toolbarButton" title="Find in Document" tabIndex="12"
                                data-l10n-id="findbar" aria-expanded="false" aria-controls="findbar">
                            <span data-l10n-id="findbar_label">Find</span>
                        </button>
                        <div className="splitToolbarButton hiddenSmallView">
                            <button className="toolbarButton pageUp" title="Previous Page" id="previous" tabIndex="13"
                                    data-l10n-id="previous">
                                <span data-l10n-id="previous_label">Previous</span>
                            </button>
                            <div className="splitToolbarButtonSeparator"></div>
                            <button className="toolbarButton pageDown" title="Next Page" id="next" tabIndex="14"
                                    data-l10n-id="next">
                                <span data-l10n-id="next_label">Next</span>
                            </button>
                        </div>
                        <input type="number" id="pageNumber" className="toolbarField pageNumber" title="Page"
                               defaultChecked="1" size="4"
                               min="1" tabIndex="15" data-l10n-id="page" autoComplete="off" max="14"/>
                        <span id="numPages" className="toolbarLabel">of 14</span>
                    </div>
                    <div id="toolbarViewerRight">
                        <button id="presentationMode" className="toolbarButton presentationMode hiddenLargeView"
                                title="Switch to Presentation Mode" tabIndex="31" data-l10n-id="presentation_mode">
                            <span data-l10n-id="presentation_mode_label">Presentation Mode</span>
                        </button>

                        <button id="openFile" className="toolbarButton openFile hiddenLargeView" title="Open File"
                                tabIndex="32"
                                data-l10n-id="open_file">
                            <span data-l10n-id="open_file_label">Open</span>
                        </button>

                        <button id="print" className="toolbarButton print hiddenMediumView" title="Print" tabIndex="33"
                                data-l10n-id="print">
                            <span data-l10n-id="print_label">Print</span>
                        </button>

                        <button id="download" className="toolbarButton download hiddenMediumView" title="Download"
                                tabIndex="34"
                                data-l10n-id="download">
                            <span data-l10n-id="download_label">Download</span>
                        </button>
                        <a href="#page=3&amp;zoom=auto,-73,789" id="viewBookmark"
                           className="toolbarButton bookmark hiddenSmallView"
                           title="Current view (copy or open in new window)"
                           tabIndex="35" data-l10n-id="bookmark">
                            <span data-l10n-id="bookmark_label">Current View</span>
                        </a>

                        <div className="verticalToolbarSeparator hiddenSmallView"></div>

                        <button id="secondaryToolbarToggle" className="toolbarButton" title="Tools" tabIndex="36"
                                data-l10n-id="tools" aria-expanded="false" aria-controls="secondaryToolbar">
                            <span data-l10n-id="tools_label">Tools</span>
                        </button>
                    </div>
                    <div id="toolbarViewerMiddle">
                        <div className="splitToolbarButton">
                            <button id="zoomOut" className="toolbarButton zoomOut" title="Zoom Out" tabIndex="21"
                                    data-l10n-id="zoom_out">
                                <span data-l10n-id="zoom_out_label">Zoom Out</span>
                            </button>
                            <div className="splitToolbarButtonSeparator"></div>
                            <button id="zoomIn" className="toolbarButton zoomIn" title="Zoom In" tabIndex="22"
                                    data-l10n-id="zoom_in">
                                <span data-l10n-id="zoom_in_label">Zoom In</span>
                            </button>
                        </div>
                        <span id="scaleSelectContainer" className="dropdownToolbarButton">
                  {/*<select id="scaleSelect" title="Zoom" tabIndex="23" data-l10n-id="zoom">*/}
                            {/*  <option id="pageAutoOption" title="" value="auto" selected="selected"*/}
                            {/*          data-l10n-id="page_scale_auto">Automatic Zoom</option>*/}
                            {/*  <option id="pageActualOption" title="" value="page-actual" data-l10n-id="page_scale_actual">Actual Size</option>*/}
                            {/*  <option id="pageFitOption" title="" value="page-fit" data-l10n-id="page_scale_fit">Page Fit</option>*/}
                            {/*  <option id="pageWidthOption" title="" value="page-width"*/}
                            {/*          data-l10n-id="page_scale_width">Page Width</option>*/}
                            {/*  <option id="customScaleOption" title="" value="custom" disabled="disabled" hidden="true"></option>*/}
                            {/*  <option title="" value="0.5" data-l10n-id="page_scale_percent"*/}
                            {/*          data-l10n-args="{ &quot;scale&quot;: 50 }">50%</option>*/}
                            {/*  <option title="" value="0.75" data-l10n-id="page_scale_percent"*/}
                            {/*          data-l10n-args="{ &quot;scale&quot;: 75 }">75%</option>*/}
                            {/*  <option title="" value="1" data-l10n-id="page_scale_percent"*/}
                            {/*          data-l10n-args="{ &quot;scale&quot;: 100 }">100%</option>*/}
                            {/*  <option title="" value="1.25" data-l10n-id="page_scale_percent"*/}
                            {/*          data-l10n-args="{ &quot;scale&quot;: 125 }">125%</option>*/}
                            {/*  <option title="" value="1.5" data-l10n-id="page_scale_percent"*/}
                            {/*          data-l10n-args="{ &quot;scale&quot;: 150 }">150%</option>*/}
                            {/*  <option title="" value="2" data-l10n-id="page_scale_percent"*/}
                            {/*          data-l10n-args="{ &quot;scale&quot;: 200 }">200%</option>*/}
                            {/*  <option title="" value="3" data-l10n-id="page_scale_percent"*/}
                            {/*          data-l10n-args="{ &quot;scale&quot;: 300 }">300%</option>*/}
                            {/*  <option title="" value="4" data-l10n-id="page_scale_percent"*/}
                            {/*          data-l10n-args="{ &quot;scale&quot;: 400 }">400%</option>*/}
                            {/*</select>*/}
                </span>
                    </div>
                </div>
                <div id="loadingBar" className="hidden">
                    <div className="progress" style={{height: "100%", width: "100%"}}>
                        <div className="glimmer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PDFToolbar




