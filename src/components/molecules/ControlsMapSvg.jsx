import React from "react"
import ZoomInIcon from "../icons/ZoomInIcon"
import ZoomOutIcon from "../icons/ZoomOutIcon"
import ZoomResetIcon from "../icons/ZoomResetIcon"

const ControlsMapSvg = ({ zoomIn, zoomOut, zoomReset }) => {

    return (
        <div className='mapsWorldControl'>
            <button className='icon' ref={zoomIn}>
                <ZoomInIcon />
            </button>

            <button className='icon' ref={zoomOut}>
                <ZoomOutIcon />
            </button>

            <button className='icon' ref={zoomReset}>
                <ZoomResetIcon />
            </button>
        </div>)

}

export default ControlsMapSvg