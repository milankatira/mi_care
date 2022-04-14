import React from 'react';
import { Modal } from 'react-bootstrap';
import Cube from "../../../assets/icons/cube.svg";
import { ReactComponent as PhoneOutlineRight } from "../../../assets/icons/phone-outline-right.svg";
import Ringtone from '../../../assets/music/calling.mp3';

const CallResidentModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} dialogClassName="modal-size" centered>
            <Modal.Body dialogClassName="modal-content" style={{
                boxSizing: 'inherit'
            }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                    }}>
                </div>
                <div className="h-100 d-flex align-items-center">
                    <div className="w-100">
                        <div className="d-flex justify-content-around align-items-center w-100 px-5">
                            <PhoneOutlineRight className='call-resident-btn end-call' onClick={handleClose} />
                            <div class="wave">
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                            </div>
                            <img src={Cube} width={60} alt='icon' />
                        </div>
                        <div className='text-center mt-4'>
                            <h6 className='font-weight-light'>Calling resident</h6>
                            <h6 className="loading font-weight-light">please wait...</h6>
                        </div>
                    </div>
                </div>
                <audio loop autoPlay src={Ringtone}>
                </audio>
            </Modal.Body>
        </Modal>
    )
}

export default CallResidentModal
