import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const data = [
    {
      index: "1",
      name: "Emily",
      position: "CEO",
      des: "I liked his work. He delivers the exact description you provide.",
      image:
        "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress$cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      index: "2",
      name: "Michele",
      position: "Product Manager",
      des: "I liked his work. He delivers the exact description you provided.",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      index: "3",
      name: "Samantha",
      position: "Software Engineer",
      des: "I liked his work. He delivers the exact description you provided.",
      image:
        "https://images.pexels.com/photos/2776582/pexels-photo-2776582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      index: "4",
      name: "Evangeline",
      position: "Front End Designer",
      des: "I liked his work. He delivers the exact description you provided.",
      image:
        "https://images.pexels.com/photos/4498876/pexels-photo-4498876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      index: "5",
      name: "Jennilyn",
      position: "WordPress Theme Designer",
      des: "I liked his work. He delivers the exact description you provided.",
      image:
        "https://images.pexels.com/photos/4498876/pexels-photo-4498876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      index: "6",
      name: "Farah",
      position: "Marketing Manager",
      des: "I liked his work. He delivers the exact description you provided.",
      image:
        "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      index: "7",
      name: "Shirley",
      position: "IOT Consultant",
      des: "I liked his work. He delivers the exact description you provided.",
      image:
        "https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      index: "8",
      name: "Ashley",
      position: "HR Manager",
      des: "I liked his work. He delivers the exact description you provided.",
      image:
        "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      index: "9",
      name: "Brad Greene",
      position: "Digital Marketing",
      des: "I liked his work. He delivers the exact description you provided.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      index: "10",
      name: "James Oswald",
      position: "Network Planner",
      des: "I liked his work. He delivers the exact description you provided.",
      image:
        "https://images.pexels.com/photos/997505/pexels-photo-997505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      index: "11",
      name: "Edward Smith",
      position: "Full Stack Developer",
      des: "I liked his work. He delivers the exact description you provided.",
      image:
        "https://images.pexels.com/photos/4067753/pexels-photo-4067753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      index: "12",
      name: "Brandon Tell",
      position: "MERN Stack Developer",
      des: "I liked his work. He delivers the exact description you provided.",
      image:
        "https://images.pexels.com/photos/4064834/pexels-photo-4064834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      index: "13",
      name: "Michael Staunton",
      position: "UI/UX Designer",
      des: "I liked his work. He delivers the exact description you provided.",
      image:
        "https://images.pexels.com/photos/4064841/pexels-photo-4064841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container testimonial-section">
      <div className="section-title py-5">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="content-slider-main">
              <div className="content-slider" key={index}>
                <img
                  src={item.image}
                  alt="testimonial image"
                  className="center-image"
                />
                <p>{item.des}</p>
                <p>{item.name}</p>
                <p>{item.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Testimonial;
