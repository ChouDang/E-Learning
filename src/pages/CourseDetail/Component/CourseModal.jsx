import React, { useState } from 'react';
import { Fragment } from 'react'
import { Button, Modal } from 'antd';
export const CourseModal = (props) => {
  const { openModal, setOpenModal } = props;



  const showModal = () => {
    setOpenModal(true);
  };

  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };


  return (
    <Fragment >
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal open={openModal}
        onClose={() => setOpenModal(false)} title="Đăng ký thành công" visible={openModal} onOk={handleOk} onCancel={handleCancel}>
        <p>Một khóa học vừa được đăng ký thành công.</p>
      </Modal>
    </Fragment>
  )
}
