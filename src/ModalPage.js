import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }
    return (
        <div>
            <Button primary onClick={handleClick}>Open Model</Button>
            {isOpen && <Modal onClose={onClose} actionBar={<Button primary onClick={onClose}>I Accept Regardless</Button>}>
                <p>This is some really important terms and conditions that you really should agree to.</p>
            </Modal>
            }
        </div>
    )
}

export default ModalPage