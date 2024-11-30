import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { IoIosWater } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { SiCanvas } from "react-icons/si";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaCircleArrowDown } from "react-icons/fa6";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const images = [
    "/images/image3.jpg",
    "/images/image8.jpg",
    "/images/image5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const [slider, setSlider] = useState([
    {
      img: "/images/image1.jpg",
      title: "Rihan",
    },
    {
      img: "/images/image2.jpg",
      title: "Rihan",
    },
    {
      img: "/images/image3.jpg",
    },
    {
      img: "/images/image4.jpg",
    },
    {
      img: "/images/image5.jpg",
    },
    {
      img: "/images/image6.jpg",
    },
    {
      img: "/images/image12.jpg",
    },
    {
      img: "/images/image8.jpg",
    },
    {
      img: "/images/image9.jpg",
    },
    {
      img: "/images/image10.jpg",
    },
  
  ]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 w-full h-12 bg-yellow-300 z-10 flex justify-between">
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        <h1
          style={{
            marginLeft: "40px",
            marginTop: "5px",
            display: "flex",
            fontSize: "25px",
            cursor: "pointer",
            fontFamily: "Orbitron",
          }}
        >
          <span style={{ fontSize: "35px" }}>
            <GiPerspectiveDiceSixFacesOne />
          </span>
          <span
            style={{ color: "white", cursor: "pointer", fontWeight: "bold" }}
          >
            Moon
          </span>
          Boxes
        </h1>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            gap: "20px",
            paddingTop: "15px",
            marginRight: "100px",
          }}
        >
          <li style={{ fontSize: "24px", cursor: "pointer" }}>
            <MdOutlineArrowCircleLeft />
          </li>
          <li style={{ fontSize: "24px", cursor: "pointer" }}>
            <IoIosWater />
          </li>
          <li style={{ fontSize: "24px", cursor: "pointer" }}>
            <FaWallet />
          </li>
          <li style={{ fontSize: "24px", cursor: "pointer" }}>
            <IoTimer />
          </li>
          <li style={{ fontSize: "24px", cursor: "pointer" }}>
            <IoMdInformationCircleOutline />
          </li>
          <li style={{ fontSize: "22px", cursor: "pointer" }}>
            <SiCanvas />
          </li>
        </ul>
        <button style={{ marginRight: "60px" }}>
          <ImCross />
        </button>
      </div>

      {/* Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full h-12 bg-yellow-300 z-10">
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "100px",
            paddingTop: "15px",
          }}
        >
          <li>
            <a href="">TIER</a>
          </li>
          <li>
            <a href="">MOONSHOT BALANCE</a>
          </li>
          <li>
            <a href="">TOTAL NFTs</a>
          </li>
        </ul>
      </div>

      {/* Left Sidebar */}
      <div className="fixed top-12 bottom-12 left-0 w-12 bg-yellow-300 z-10"></div>

      {/* Right Sidebar */}
      <div className="fixed top-12 bottom-12 right-0 w-12 bg-yellow-300 z-10"></div>

      <div style={{ backgroundImage: "url('/public/images/backgroundImg.png')" }}>
        <div className="flex items-center justify-center h-screen  p-5">
          {/* Left Side Content */}
          <div className="flex-1 max-w-[30%] text-left">
            <h4 className="text-3xl font-bold text-gray-800 mb-4 text-yellow font-family-Orbitron">
              <span
                style={{
                  color: "white",
                  fontFamily: "Orbitron",
                  paddingLeft: "30px",
                }}
              >
                Buy MoonBoxes <br />
              </span>
              <span
                style={{
                  color: "rgb(255, 255, 100)",
                  fontFamily: "Orbitron",
                  paddingLeft: "30px",
                }}
              >
                and expand your <br />{" "}
                <span style={{ paddingLeft: "30px" }}> NFT Collection</span>
              </span>
            </h4>
            <p className="text-lg text-yellow-300 mb-6 px-8">
              Buying MoonBoxes is a unique
              <br />
              way to acquire NFTs and build <br />
              your collection. It is built on the <br />
              Binance Smart Chain, <br />
              MoonRiver, Polygon, Ethereum <br />
              and DogeChain. Only available <br />
              on <span className="font-bold text-white">MoonBoxes.io</span>
            </p>
            <div style={{ display: "flex" }}>
              {" "}
              <button className="px-5 py-2 bg-yellow-300 text-black rounded-full hover:bg-yellow-400 transition mx-8">
                Buy A MoonBox
              </button>
              <FaCircleArrowDown className="text-yellow-300 hover:text-yellow-400  mt-[5px] text-[30px] cursor-pointer" />
            </div>
          </div>

          {/* Right Side Auto Image Changer */}
          <div className="flex-1 max-w-[40%] h-[400px] relative overflow-hidden flex items-center justify-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`absolute w-3/4 object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Slider >>>>>>>>>>>>>>>>>>*/}
        <div
          className="slider-container"
          style={{ width: "80%", margin: "auto", cursor: "pointer" }}
        >
          <Slider {...settings}>
            {slider.map((slide) => (
              <div key={slide}>
                <img
                  src={slide.img}
                  alt=""
                  style={{
                    height: "180px",
                    width: "180px",
                    gap: "70px",
                    marginTop: "40px",
                    border: "3px solid yellow",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
            margin: "50px",
          }}
        >
          <div>
            <h1
              style={{
                height: "200px",
                width: "250px",

                color: "yellow",

                fontSize: "25px",
                marginRight: "50px",
                fontFamily: "Orbitron",
                fontWeight: "bold",
              }}
            >
              <span style={{ color: "white", fontFamily: "Orbitron" }}>
                MoonBoxes.io
              </span>
              {/* MonoBoxes.io */}
              <br />
              your base to Purchase NFTs
            </h1>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <p style={{ height: "220px", width: "250px", color: "yellow" }}>
              <span style={{ color: "white" }}> MoonBoxes.io</span> offers you a
              complete overview of upcoming, active and recent NFT drops.
              <br />
              <br />
              <span style={{ color: "white" }}>MoonBoxes.io </span> will be home
              to collectors and amazing NFTartists.
              <button className="h-[35px] w-[150px] bg-yellow-300 hover:bg-yellow-400 text-black rounded-[30px] mt-[30px]">
                Explore
              </button>
            </p>
          </div>
        </div>

        {/* third page >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

        <div
          style={{
            height: "100vh",
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            paddingTop: "50px",
            margin: "50px",
          }}
        >
          <div
            id="first-div"
            style={{ height: "350px", width: "300px", fontSize: "30px" }}
          >
            <h1 style={{ color: "yellow" }}>
              <span
                style={{
                  fontFamily: "Orbitron",
                  fontWeight: "bold",
                  color: "rgb(255, 255, 100)",
                }}
              >
                {" "}
                Call for artists!
              </span>{" "}
              <br />
              <span
                style={{
                  fontFamily: "Orbitron",
                  fontWeight: "bold",
                  color: "rgb(255, 255, 100)",
                }}
              >
                Applications are open for all artists & creator
              </span>
            </h1>
            <button
              style={{
                height: "35px",
                width: "180px",
                border: "1px solid yellow",
                borderRadius: "50px",
                marginTop: "50px",
                color: "yellow",
                fontSize: "20px",
              }}
            >
              Contact Us
            </button>
            <button className="h-[35px] w-[180px] bg-yellow-300 hover:bg-yellow-400 border border-black rounded-full mt-[10px] text-[20px]  font-sans">
              Application Form
            </button>
          </div>
          <div
            id="second-div"
            style={{
              height: "330px",
              width: "307px",
              display: "flex",
              justifyItems: "center",
              fontSize: "30px",
              fontFamily: "Orbitron",
            }}
          >
            <img
              src="/images/astro_painter.png"
              alt="Example"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AutoPlay;
