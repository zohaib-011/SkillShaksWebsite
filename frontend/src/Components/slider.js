import React, { Component } from 'react';
import '../App.css'; 

class Slider extends Component {
  constructor(props) {
    super(props);
    this.tabListRef = React.createRef();
    this.tabsRef = [];
  }

  componentDidMount() {
    const tabs = this.tabsRef;
    const tabList = this.tabListRef.current;
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');

    const removeAllActiveClasses = () => {
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        removeAllActiveClasses();
        tab.classList.add('active');
      });
    });

    rightArrow.addEventListener('click', () => {
      console.log(" Right Arrow clicked . ");
      if (tabList) {
        tabList.scrollLeft += 200;
      }
    });

    leftArrow.addEventListener('click', () => {
      if (tabList) {
        tabList.scrollLeft -= 200;
      }
    });
  }

  componentWillUnmount() {
    // Cleanup event listeners on unmount
    const tabs = this.tabsRef;
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');

    tabs.forEach((tab) => {
      tab.removeEventListener('click', () => {});
    });
    rightArrow.removeEventListener('click', () => {});
    leftArrow.removeEventListener('click', () => {});
  }

  render() {
    return (
      <div className="scrollable-tab-container">
        <div className="left-arrow">
          <img src="/images/left.svg" width="20px" alt=""/>
        </div>   
        <ul className='sliderList' ref={this.tabListRef}>
          <li><a href="#" className="active" ref={(el) => this.tabsRef[0] = el}>All</a></li>  
          <li><a href="#" ref={(el) => this.tabsRef[1] = el}>Web Development</a></li>
          <li><a href="#" ref={(el) => this.tabsRef[2] = el}>Graphic Designing</a></li> 
          <li><a href="#" ref={(el) => this.tabsRef[3] = el}>App Development</a></li> 
          <li><a href="#" ref={(el) => this.tabsRef[4] = el}>Artificial Intelligence</a></li>
          <li><a href="#" ref={(el) => this.tabsRef[5] = el}>Designing</a></li>        
          <li><a href="#" ref={(el) => this.tabsRef[6] = el}>Business Development</a></li>  
          <li><a href="#" ref={(el) => this.tabsRef[7] = el}>E Commerce</a></li>
          <li><a href="#" ref={(el) => this.tabsRef[8] = el}>Wordpress</a></li>    
        </ul>
        <div className="right-arrow">
          <img src="/images/right.svg" width="20px" alt=""/>
        </div>
      </div>
    );
  }
}

export default Slider;
