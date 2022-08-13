// React
import { useEffect, useState } from "react"

export default function Modal({ children, IsOpen, SetIsOpen }) {

    const [Display, SetDisplay] = useState(IsOpen === true ? "block": "none")

    useEffect(() => {
        SetDisplay(IsOpen === true ? "block": "none")
    }, [IsOpen])

    return(
        <div id="myModal" className="modal" style={{display: Display}}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={() => SetIsOpen(!IsOpen)}>&times;</span>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    )
}