import React from 'react'
import FullScreenIcon from '../../icons/components/fullScreen'
import './fullScreen.css'
const FullScreen = (props) =>(

<div 
className="FullScreen"
onClick={props.handleFullScreenClick}
>
    <FullScreenIcon
    size={25}
    color="white"
    
    />
</div>
)
export default FullScreen