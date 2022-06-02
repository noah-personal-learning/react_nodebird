import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import ImageZoom from './ImagesZoom/index'

const PostImage = ({ images }) => {

  // 이미지 줌 관련 부분
  const [showImageZoom, setShowImageZoom] = useState(false);

  const onZoom = useCallback(
    () => {
      setShowImageZoom(true);
    }, []
  )

  // close 이벤트 설정, 이미지 이외 부분 클릭시 닫기 처리 가능
  const onClose = useCallback(
    () => {
      setShowImageZoom(false);
    }, []
  )

  if (images.length === 1) {
    return (
      <>
        <img role="presentation" style={{maxHeight : '250px' }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
        {showImageZoom && <ImageZoom images={images} onClose={onClose} />}
      </>
    )
  }

  if (images.length === 2) {
    return (
      <>
        <img role="presentation" style={{width : '50%', maxHeight : '250px', display : 'inline-block' }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <img role="presentation" style={{width : '50%', maxHeight : '250px', display : 'inline-block' }} src={images[1].src} alt={images[1].src} onClick={onZoom} />
        {showImageZoom && <ImageZoom images={images} onClose={onClose} />}
      </>
    )
  }

  return (
    <div>
      <img role="presentation" style={{width : '50%' }} src={[images[0].src]} alt={images[0].src} onZoom={onZoom} />
      <div
        role="presentation"
        style={{ display : 'inline-block', width : '50%', maxHeight : '250px', textAlign : 'center', verticalAlign : 'middle'}}
        onClick={onZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1} 개의 사진 더보기
      </div>
      {showImageZoom && <ImageZoom images={images} onClose={onClose} />}
    </div>
  )
}

PostImage.propTypes = {
  images : PropTypes.arrayOf(PropTypes.object),
}

export default PostImage;