import React, {useState} from 'react'
import './style.scss'

export default function ConvoDock(props) {



    const [collapsed,setCollapsed] = useState(true)
    const [dockHeight,setDockHeight] = useState(300)
    let isDragging=false



    const toggleDock = () => {
        setCollapsed(!collapsed)
        isDragging=false
    }

    const dragStart = (e) => {
        isDragging=true
    }

    const dragging = (e) => {if(!isDragging) return
        let height = window.innerHeight - e.clientY
        e.preventDefault()
        if(height<100) height=100
        if(height>window.innerHeight-100) height=window.innerHeight-100
        setDockHeight(height)

    }

    const dragEnd = (e) => {
        if(isDragging) isDragging=false

    }
    window.addEventListener("mouseup",dragEnd)
    window.addEventListener("mousemove",dragging)

    return (
        <div className="convoDockContainer">
            <div className="convoDock bg-light fixed-bottom">
                <div className={"resize-handle collapsed-" + collapsed} onMouseDown={dragStart}  onMouseUpCapture={dragEnd}></div>
                <div className="bar-top bg-dark" onClick={toggleDock}>Toggle</div>
                <div className={"convoContainer collapsed-"+collapsed}  style={{maxHeight:dockHeight}}>
                    {props.children}
                </div>
            </div>
        </div>

    )
}