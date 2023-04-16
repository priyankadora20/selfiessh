import React, { Component } from "react";
import Slider from "react-slick";
import './carousel.css';



function SampleNextArrow(props) {
  const  {arrow, className, style, onClick } = props;
  return (
    <div
      id={arrow}
      className={className}
      style={{ ...style, display: "block" ,backgroundColor:"black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const {arrowp, className, style, onClick } = props;
  return (
    <div
      id={arrowp}
      className={className}
      style={{ ...style, display: "block",backgroundColor:"black"  }}
      onClick={onClick}
      
    />
  );
}



export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

       let data =
    [
         
        {
        id: 1,
        img: `https://picsum.photos/200/300`,
        btn: "MAR 9,2020",
        h: "lorem que diam norlym pascu amet",
        p:"In K SPRING * By STEPHEN NGO"
        },
        
        {
        id: 2,
        img:`https://picsum.photos/200`,
        btn:"MAR 9,2020",
        h: "lorem que diam norlym pascu amet",
        p:"In K SPRING * By STEPHEN NGO"    
        },
        {
        id: 3,
        img:`https://picsum.photos/200/300`,
        btn:"MAR 9,2020",
        h: "lorem que diam norlym pascu amet",
        p:"In K SPRING * By STEPHEN NGO"
        },
        {
        id: 4,
        img:`https://picsum.photos/200`,
        btn:"MAR 9,2020",
        h: "lorem que diam norlym pascu amet",
        p:"In K SPRING * By STEPHEN NGO"
           },
          {
        id: 2,
        img:`https://picsum.photos/200/300`,
        btn:"MAR 9,2020",
        h: "lorem que diam norlym pascu amet",
        p:"In K SPRING * By STEPHEN NGO"    
        },
        {
        id: 3,
        img:`https://picsum.photos/200`,
        btn:"MAR 9,2020",
        h: "lorem que diam norlym pascu amet",
        p:"In K SPRING * By STEPHEN NGO"
        },
        {
        id: 4,
        img:`https://picsum.photos/200`,
        btn:"MAR 9,2020",
        h: "lorem que diam norlym pascu amet",
        p:"In K SPRING * By STEPHEN NGO"
        },


    ]



    return (
      <div id="slidercontainer">
        
        <Slider {...settings}>
          {data.map(({img,id,btn,h,p}) => {
            return (
            <div >
              <div id="sliderbox" key={id}>
                  <img src={img} alt="images" id="imgc"/>
                  <button id="btnc">{btn}</button>
                  <h4 id="hc">{h}</h4>
                  <p id="hp">{p}</p>
           </div>
            </div>
           
         )
       })}
        </Slider>
      </div>
    );
  }
}