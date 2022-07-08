import React from 'react'
import { useDispatch } from 'react-redux';
import { actGetKeyword } from '../../redux/actions/UserAction';

import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Fragment } from 'react';
const { Search } = Input;

const SearchCourse = () => {

  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    const { value } = event.target;
    console.log('event', value);
  }
  const handleOnSearch = (value) => {
    dispatch(actGetKeyword(value))
    console.log('value', value);
  }

  return (
    <Fragment>
      <Search
        className="mt-3 mb-3"
        placeholder="Tìm kiếm khóa học"
        allowClear
        enterButton="Tìm kiếm"
        size="default"
        onChange={handleOnChange}
        onSearch={handleOnSearch}
      />
    </Fragment>
  )
}

export default SearchCourse