import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from 'antd';
import { Divider } from 'antd';
import UserSelector from "./UserSelector";
import UserWaiting from "./UserWaiting";
import UserJoined from "./UserJoined"
import { Skeleton } from 'antd';


const RegisterModal = (props) => {
    const { showRegisterModal, handleCloseRegisterModal } = props;

    const dataUserSelector = useSelector(
        (state) => state.dangKyModalReducer.dataUserSelector
    );
    const dataUserWaiting = useSelector(
        (state) => state.dangKyModalReducer.dataUserWaiting
    );
    const dataUserJoined = useSelector(
        (state) => state.dangKyModalReducer.dataUserJoined
    );
    let courseCode = useSelector((state) => state.dangKyModalReducer.courseCode);

    const [visible, setVisible] = useState(false);

    const titlecontent = () => {
        return (
            <Fragment ><div className="text-center">
                <h1>Ghi danh</h1>
            </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Modal
                title={titlecontent()}
                centered
                visible={showRegisterModal}
                onOk={handleCloseRegisterModal}
                onCancel={handleCloseRegisterModal}
                width={1000}
            >
                <section>
                    <UserSelector dataUserSelector={dataUserSelector} courseCode={courseCode} />
                    <Divider />
                    {dataUserWaiting ? <UserWaiting dataUserWaiting={dataUserWaiting} courseCode={courseCode} /> : <Skeleton />}
                    {/* <UserWaiting dataUserWaiting={dataUserWaiting} courseCode={courseCode} /> */}
                    <Divider />
                    {dataUserWaiting ? <UserJoined dataUserJoined={dataUserJoined} courseCode={courseCode} /> : <Skeleton />}
                    {/* <UserJoined dataUserJoined={dataUserJoined} courseCode={courseCode} /> */}
                </section>
            </Modal>
        </Fragment>
    )
}

export default RegisterModal