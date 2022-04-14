import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Clock from "../../../assets/icons/clock.svg";
import CardHeading from '../../commons/Heading/CardHeading';

const Visitors = () => {

    const visitorList = [
        {
            title: 'Amy Johnson',
            subTitle: 'nurse',
            time: '9:00 am - 11:30 am',
            image: 'https://i0.wp.com/www.engage-innovate.com/wp-content/uploads/2019/01/Jolene-Foo-Profile-Square.jpg?ssl=1'
        },
        {
            title: 'Rev. Makie',
            subTitle: 'priest',
            time: '11:30 am - 12:45 pm',
            image: 'https://profoundleadership.com.au/wp-content/uploads/2017/10/Martin-Probst-Profile-picture-square.png'
        },
        {
            title: 'Dave Qakie',
            subTitle: 'Developer',
            time: '01:30 pm - 02:45 pm',
            image: 'https://i1.wp.com/www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/square-profile-pic-2.jpg'
        },
    ]


    const Item = (item, index) => {
        return (
            <li key={index} className='schedule-list-item'>
                <Container fluid className='p-0'>
                    <Row className='py-2'>
                        <Col xs={12} className='pl-3 pr-0'>
                            <div className='d-flex'>
                                <img src={item.image} alt='avatar' className='avatar' />
                                <div className='ml-1'>
                                    <div className='d-flex'>
                                        <p className='text-muted'>{item.title}</p>
                                        <p className='text-muted ml-2'>|&nbsp;{item.subTitle}</p>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <img src={Clock} alt='clock_icon' width={16} />
                                        <p className='text-muted ml-1'>{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {index !== visitorList.length - 1 && <hr className='schedule-list-item-separator' />}
                </Container>
            </li>
        )
    }

    return (
        <div className='visitors'>
            <CardHeading title='Visitors' />
            <ul>
                {visitorList.map(Item)}
            </ul>
        </div>
    )
}

export default Visitors
