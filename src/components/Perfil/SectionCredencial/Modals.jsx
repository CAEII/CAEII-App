// React
import { useEffect, useState } from "react"

export default function Modal({ children, IsOpen, SetIsOpen }) {

    const [Display, SetDisplay] = useState(IsOpen === true ? "block": "none")

    useEffect(() => {
        SetDisplay(IsOpen === true ? "block": "none")
    }, [IsOpen])

    return(
        <div id="myModal" class="modal" style={{display: Display}}>
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={() => SetIsOpen(!IsOpen)}>&times;</span>
                </div>
                <div class="modal-body">
                    {children}
                </div>
            </div>
        </div>
    )
}