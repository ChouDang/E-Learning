
import React, { useState, useEffect, Fragment } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { actCourseDetailGet } from '../../redux/actions/KhoaHocActions'
import { CourseContent } from "./Component/CourseContent"
import { CourseModal } from "./Component/CourseModal"


const CourseDetail = (props) => {
    const dispatch = useDispatch()

    const courseDetailData = useSelector(
        (state) => state.chiTietKhoaHocReducer.courseDetailData
    );
    console.log(courseDetailData);

    useEffect(() => {
        const { maKhoaHoc } = props.match.params;
        dispatch(actCourseDetailGet(maKhoaHoc));
        console.log(maKhoaHoc);
    }, [])

    const [openModal, setOpenModal] = useState(false)

    return (
        console.log("detail component"), (

            <Fragment >
                {courseDetailData && (<CourseContent
                    courseDetailData={courseDetailData}
                    setOpenModal={setOpenModal}
                />)}
                <CourseModal openModal={openModal} setOpenModal={setOpenModal} />
            </Fragment>
        )
    )
}

export default CourseDetail