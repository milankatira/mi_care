import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Clock from "../../../assets/icons/clock.svg";
import VerticalMenuDots from "../../../assets/icons/menu_dots.svg";

const ScheduleList = ({
    list = [],
    handleMenuClick = (item) => () => { },
    disableMenu = false,
}) => {

    const Item = (item, index) => {
        return (
            <li key={index} className='schedule-list-item'>
                <Container fluid className='p-0'>
                    <Row className='pb-2'>
                        <Col xs={!disableMenu ? 10 : 12} className='pl-3 pr-0'>
                            {
                                (item.day && item.date) ? (
                                    <div className='d-flex'>
                                        <div className='mr-1 text-center'>
                                            <p className='schedule-list-day'>{item.day}</p>
                                            <p className='schedule-list-date'>{item.date}</p>
                                        </div>
                                        <div className='ml-1 d-flex flex-column justify-content-around'>
                                            <div className='d-flex'>
                                                <p className='text-muted'>{item.title}</p>
                                                <p className='text-muted ml-2'>|&nbsp;{item.subTitle}</p>
                                            </div>
                                            <div className='d-flex align-self-end'>
                                                <img src={Clock} alt='clock_icon' width={14} />
                                                <p className='text-muted ml-1'>{item.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                        <>
                                            <div className='d-flex'>
                                                <p className='text-muted'>{item.title}</p>
                                                <p className='text-muted ml-2'>|&nbsp;{item.subTitle}</p>
                                            </div>
                                            <div className='d-flex mt-2'>
                                                <img src={Clock} alt='clock_icon' width={16} />
                                                <p className='text-muted ml-2'>{item.time}</p>
                                            </div>
                                        </>

                                    )
                            }

                        </Col>
                        {!disableMenu &&
                            <Col xs={2} className='pl-0 pr-2'>
                                <button onClick={handleMenuClick(item)}>
                                    <img src={VerticalMenuDots} alt='menu_icon' />
                                </button>
                            </Col>
                        }
                    </Row>
                    {index !== list.length - 1 && <hr className='schedule-list-item-separator' />}
                </Container>
            </li>
        )
    }

    return (
        <div className='schedule-list'>
            <ul>
                {list.map(Item)}
            </ul>
        </div>
    )
}

export default ScheduleList
