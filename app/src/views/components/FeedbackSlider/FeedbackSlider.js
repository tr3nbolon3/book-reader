import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import cn from 'classnames';
import 'swiper/dist/css/swiper.min.css';

import styles from './FeedbackSlider.module.scss';
import $propTypes from '@prop-types';

import FeedbackItem from './FeedbackItem';

class FeedbackSlider extends React.Component {
  static propTypes = {
    feedbacks: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.shape($propTypes.user).isRequired,
        text: PropTypes.string.isRequired,
      }),
    ),
    user: PropTypes.object, // temp prop
  };

  static defaultProps = {
    feedbacks: [],
  };

  constructor() {
    super();
    this.swiper = null;

    this.containerRef = React.createRef();
    this.paginationRef = React.createRef();

    this.nextRef = React.createRef();
    this.prevRef = React.createRef();
  }

  componentDidMount() {
    if (this.containerRef.current) {
      this.swiper = new Swiper(this.containerRef.current, {
        loop: true,
        pagination: {
          el: this.paginationRef.current,
        },

        navigation: {
          nextEl: this.nextRef.current,
          prevEl: this.prevRef.current,
        },
        slidesPerView: 1,
        spaceBetween: 30,
      });
    }
  }

  render() {
    // const { feedbacks } = this.props;
    const { user } = this.props;

    return (
      <div ref={this.containerRef} className={cn('swiper-container', styles.container)}>
        <div className="swiper-wrapper">
          {/* {feedbacks.map(() => (
            <div key="key" className="swiper-slide">
              Slide 2
            </div>
          ))} */}
          <div className={cn('swiper-slide', styles.slide)}>
            <FeedbackItem
              author={user}
              text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum"
            />
          </div>
          <div className={cn('swiper-slide', styles.slide)}>
            <FeedbackItem
              author={user}
              text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum"
            />
          </div>
          <div className={cn('swiper-slide', styles.slide)}>
            <FeedbackItem
              author={user}
              text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum"
            />
          </div>
          <div className={cn('swiper-slide', styles.slide)}>
            <FeedbackItem
              author={user}
              text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum"
            />
          </div>
        </div>
        <div ref={this.paginationRef} className="swiper-pagination" />

        <div ref={this.prevRef} className="swiper-button-prev" />
        <div ref={this.nextRef} className="swiper-button-next" />
      </div>
    );
  }
}

export default FeedbackSlider;
