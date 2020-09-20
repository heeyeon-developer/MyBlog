import { Collection } from 'mongoose'
import React from 'react'
import {Row, Col} from 'reactstrap'

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear()
        return year
    }
    //Row 다음에는 무조건 Col을 사용해야 함 - Row는 한 줄을 12개의 Col로 나누어서 사용하기 때문에
    return (
        <div id='main-footer' className='text-center p-2'>
            <Row>
                <Col>
                    <p>Blog continue &copy; <span>{thisYear()}</span></p>
                </Col>
            </Row>
        </div>

    )
}

export default Footer