import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Slick from 'react-slick';
import { Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator, Global } from './styles';

// 자바스크립트 함수 호출 문법
// ` (back tic?)
// styled.div`` == styled.div()

// npm i react-slick
const index = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
        <Global/>
        <Header>
            <h1>상세 이미지</h1>
            <CloseBtn onClick={onClose}>X</CloseBtn>
        </Header>
        <SlickWrapper>
            <div>
                <Slick
                    initialSlide={0}
                    // afterChange = { (slide) => setCurrentSlide (slide) }
                    beforeChange = { (slide) => setCurrentSlide (slide) }
                    infinite
                    arrows = {false}
                    slidesToShow = {1}
                    slidesToScroll = {1}
                >
                {images.map((v) => (
                    <ImgWrapper key={v.src}>
                        <img src={v.src} alt={v.src}/>
                    </ImgWrapper>
                ))}
                </Slick>
                <Indicator>
                    <div>
                        {currentSlide + 1}
                        {' '}
                        /
                        {' '}
                        {images.length}

                    </div>
                </Indicator>
            </div>
        </SlickWrapper>
    </Overlay>
  );
}

index.propTypes = {
    images : PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose : PropTypes.func.isRequired
}

export default index