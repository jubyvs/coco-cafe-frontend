import React from 'react';
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const data = [
    {cover: 'http://thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg', title: 'Image 1'},
    {cover: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-image.jpg', title: 'Image 2'},
    {cover: 'http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg', title: 'Image 3'}
];

function ResponsiveCarousel() {
    const ref = React.useRef();
    return (
        <div style={{ width: '100%', position: 'relative' }}>
            {/* ResponsiveContainer will have the same width as its parent element */}
            <ResponsiveContainer carouselRef={ref} render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 3;
                if (parentWidth <= 1440) currentVisibleSlide = 3;
                else if (parentWidth <= 1080) currentVisibleSlide = 1;
                return (
                    <StackedCarousel
                        ref={carouselRef}
                        data={data}
                        carouselWidth={parentWidth}
                        slideWidth={750}
                        slideComponent={Card}
                        maxVisibleSlide={5}
                        currentVisibleSlide={currentVisibleSlide}
                        useGrabCursor={true}
                    />
                )}}
            />
            <div className="d-flex justify-content-between">
                <FontAwesomeIcon icon={faAngleLeft} className="carousal-icon-left" onClick={() => ref.current.goBack()} />
                <FontAwesomeIcon icon={faAngleRight} className="carousal-icon-right" onClick={() => ref.current.goNext()} />
            </div>
       </div>
                  
    );
}

// Very important to memoize your component!!!
const Card = React.memo(
    function (props) {
        const { data, dataIndex } = props;
        const { cover } = data[dataIndex];
        const { title } = data[dataIndex];
        return (
            <div style={{width: '100%', height: 300}}>
                <img
                    style={{height: '100%', width: '100%', objectFit: 'cover', borderRadius: 10}}
                    draggable={false}
                    alt={title}
                    src={cover}
                />
            </div>
        );
    },
    function (prev, next) {
      return prev.dataIndex === next.dataIndex;
    }
);

export default ResponsiveCarousel;