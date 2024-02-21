// import Image from "next/image";
import React from "react";
import styles from "./style.module.css";

const About = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <div className="">
            <img src="/images/1a.png" className="firstimg"></img>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
            <li>
              <a href="#" className="booknow">
                Book Now
              </a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>

        <div className="body">
          <div className="left-section">
            <div className="left-sectioncontents">
              <h1>We Wash & Service</h1>
              <br />
              <h1>Your Car</h1>
            </div>
            <div className="booknowshort">Book Now &rarr;</div>
            <div className="image-container">
              <img src="/images/1b.png" className="oneb" />
              <img src="/images/1d.png" className="oned" />
              <img src="/images/1c.png" className="onec" />
            </div>
          </div>

          <div className="right-section">
            <div className="forms">
              <div className="appointment-box">
                <div className="formshead">
                  <h2>Book your appointment</h2>
                  <h4>Get a callback to book your car wash or detailing</h4>
                </div>
                <form className="form2">
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    value="Enter your Name"
                  />
                  <input
                    type="tel"
                    id="no"
                    name="lname"
                    value="Enter your Phone No."
                  />
                  <input
                    type="text"
                    id="content"
                    name="content"
                    value="What you are looking for"
                  />
                  <button className="button button5">Get A Call Back</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="body2">
          <div className="left-section2">
            <div className="our2">Our work</div>
            <div className="content2">
              Lorem ipsum dolor sit amet. Nam excepturi omnis est sapiente quia
              non illo earum sed expedita adipisci qui fuga minima non inventore
              omnis a suscipit voluptatem. Rem dignissimos quasi qui consequatur
              error et laudantium ducimus ex dolorem odio et voluptates modi.
              Sit placeat deleniti eos recusandae explicabo id quia libero.
              <br />
            </div>
            <br />
            <div className="booknowshort">Book Now &rarr;</div>
          </div>
          <div className="right-section">
            <div className="form">
              <img src="/images/imasge21.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="body3">
          <div className="heading3">Cities Where We Are Available</div>
          <div className="cities">
            <div className="city">
              <img src="/images/chennai.png" alt="City" />
              <div>Chennai</div>
            </div>
            <div className="city">
              <img src="/images/hyderabad.png" alt="City" />
              <div>Hyderabad</div>
            </div>
            <div className="city">
              <img src="/images/mumbai.png" alt="City" />
              <div>Mumbai</div>
            </div>
            <div className="city">
              <img src="/images/bangalore.png" alt="City" />
              <div>Bangalore</div>
            </div>
            <div className="city">
              <img src="/images/delhi_ncr.png" alt="City" />
              <div>Delhi</div>
            </div>
            <div className="city">
              <img src="/images/kolkata.png" alt="City" />
              <div>Kolkata</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="body2">
          <div className="left-section2">
            <div className="form">
              <img src="/images/image41.png" alt="Image" />
            </div>
          </div>
          <div className="right-section">
            <div className="our2">We Wash Your Car</div>
            <div className="content2">
              Lorem ipsum dolor sit amet. Nam excepturi omnis est sapiente quia
              non illo earum sed expedita adipisci qui fuga minima non inventore
              omnis a suscipit voluptatem. Rem dignissimos quasi qui consequatur
              error et laudantium ducimus ex dolorem odio et voluptates modi.
              Sit placeat deleniti eos recusandae explicabo id quia libero.
              <br />
            </div>
            <br />
            <div className="booknowshort">Book Now &rarr;</div>
          </div>
        </div>
      </div>
      <div
        className={`container4 ${styles.div_sdd}`}
        style={{
          backgroundImage: 'url("/images/car-wash5.png")',
        }}
      >
        <div className="body4">
          <div className="left-section4">
            <div className="our4">Car Detailing</div>
            <div className="content4">
              Lorem ipsum dolor sit amet. Nam excepturi omnis est sapiente quia
              non illo earum sed expedita adipisci qui fuga minima non inventore
              omnis a suscipit voluptatem. Rem dignissimos quasi qui consequatur
              error et laudantium ducimus ex dolorem odio et voluptates modi.
              Sit placeat deleniti eos recusandae explicabo id quia libero.
            </div>
            <div className="booknowshort4">Book Now &rarr;</div>
          </div>
          <div className="right-section4">
            <div className="form4"></div>
          </div>
        </div>
      </div>
      <div className="container5">
        <div className="body5">
          <div className="our5">CAREASY Benefits</div>
          <div className="row">
            <div className="column">
              <div className="box">
                {" "}
                <img src="/images/51.png" className="icon"></img>
                <div className="content">
                  <div className="title">UNMATCHED SERVICE WARRANTY</div>
                  <hr></hr>Lorem ipsum dolor sit amet. Nam excepturi omnis est
                  sapiente quia non illo earum sed expedita adipisci qui fuga
                  minima non inventore omnis a suscipit voluptatem. Rem
                  dignissimos quasi
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <img src="/images/52.png" className="icon"></img>
                <div className="content">
                  <div className="title">
                    BEST SERVICES AT<br></br>BEST PRICES
                  </div>
                  <hr></hr>
                  Lorem ipsum dolor sit amet. Nam excepturi omnis est sapiente
                  quia non illo earum sed expedita adipisci qui fuga minima non
                  inventore omnis a suscipit voluptatem. Rem dignissimos quasi .
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <img src="/images/53.png" className="icon"></img>
                <div className="content">
                  <div className="title">
                    COMPREHENSIVE 90<br></br>POINTS CHECK
                  </div>
                  <hr></hr>
                  Lorem ipsum dolor sit amet. Nam excepturi omnis est sapiente
                  quia non illo earum sed expedita adipisci qui fuga minima non
                  inventore omnis a suscipit voluptatem. Rem dignissimos quasi .
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="box">
                <img src="/images/54.png" className="icon"></img>
                <div className="container">
                  <div className="title">
                    CONVENIENT<br></br>CAR CARE
                  </div>
                  <hr></hr>
                  Lorem ipsum dolor sit amet. Nam excepturi omnis est sapiente
                  quia non illo earum sed expedita adipisci qui fuga minima non
                  inventore omnis a suscipit voluptatem. Rem dignissimos quasi .
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <img src="/images/55.png" className="icon"></img>
                <div className="container">
                  <div className="title">
                    GENUINE OEM/OES<br></br>SPARES
                  </div>
                  <hr></hr>
                  Lorem ipsum dolor sit amet. Nam excepturi omnis est sapiente
                  quia non illo earum sed expedita adipisci qui fuga minima non
                  inventore omnis a suscipit voluptatem. Rem dignissimos quasi .
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <img src="/images/56.png" className="icon"></img>
                <div className="content">
                  <div className="title">
                    FREE PICKUP AND<br></br> DROP SERVICE
                  </div>
                  <hr></hr>Lorem ipsum dolor sit amet. Nam excepturi omnis est
                  sapiente quia non illo earum sed expedita adipisci qui fuga
                  minima non inventore omnis a suscipit voluptatem. Rem
                  dignissimos quasi .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container6">
        <div className="body6">
          <div className="our6">Download Our App</div>
          <div className="contents6">
            <div className="left-section6">
              <div className="image-wrapper6">
                <img src="/images/61new.png" className="image61"></img>
              </div>
            </div>
            <div className="central-section">
              <img src="/images/62new.png" className="image62"></img>

              <div className="booknowshort6">Book Now &rarr;</div>
            </div>
            <div className="right-section6">
              <img src="/images/63new.png" className="image63"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container7">
        <div className="body7">
          <div className="our7">Our Satisfied Customers</div>
          <div className="contents7">
            <div className="left-section7">
              <img
                src="/images/71a.png"
                alt="Customer Image 1"
                style={{
                  width: "486px",
                  height: "223px",
                  top: "5890px",
                  left: "387px",
                }}
              />
            </div>
            <div className="central-section7">
              <div
                className="testimonial7"
                style={{
                  backgroundImage: 'url("/images/72a.png")',
                  width: "654px",
                  height: "399px",
                }}
              >
                {" "}
                <img
                  src="/images/71b.png"
                  alt="Customer Image 2"
                  style={{
                    width: "57px",
                    height: "57px",
                    top: "6173px",
                    left: "303px",
                  }}
                />
                <div className="test7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
                  rhoncus urna facilisis quisque orci lectus sed nulla. amet,
                  consectetur adipiscing Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. In eu rhoncus urna facilisis quisque orci
                  lectus sed nulla. amet, consectetur adipiscing
                </div>
              </div>
            </div>
            <div className="right-section7">
              <img
                src="/images/73a.png"
                className="sign7"
                alt="Customer Image 3"
                style={{
                  width: "57px",
                  height: "57px",
                }}
              />
              <img
                src="/images/73c.png"
                alt="Customer Image 4"
                style={{
                  width: "635px",
                  height: "278px",
                  top: "6212px",
                  left: "1065px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container8">
        <div className="body8">
          <div className="left-section8">
            <div className="form8">
              <img src="/images/81.png" alt="Image" />
            </div>
          </div>
          <div className="right-section8">
            <div className="our8">Frequently Asked questions</div>
            <hr className="new"></hr>
            <div className="content8">
              <div className="content8head">Where can I watch?</div>
              adgshyufhbvdgfffdddddddddddddddddddddddddddddddddddddd
              <hr className="new"></hr>
              <div className="content8head">sadddddddddds</div>
              <hr className="new"></hr>
              <div className="content8head">asdsadsadsadsadaaa</div>
              <hr className="new"></hr>{" "}
              <div className="content8head">asdsadsadsadsadaaa</div>
              <hr className="new"></hr>{" "}
              <div className="content8head">asdsadsadsadsadaaa</div>
              <hr className="new"></hr>{" "}
              <div className="content8head">asdsadsadsadsadaaa</div>
              <hr className="new"></hr>{" "}
              <div className="content8head">asdsadsadsadsadaaa</div>
              <hr className="new"></hr>
              <br />
            </div>
            <br />
          </div>
        </div>
      </div>
      <div className="container9">
        <div className="contactus9">Contact Us</div>
        <div className="body9">
          <div className="our9">Contact Us</div>
          <div className="center9">
            <div className="content9">
              <div className="leftcontent9">
                <div className="heading9">Get In Touch</div>
                <div className="subheading9">
                  We are here for you! How can we help?
                </div>
                <form className="form9">
                  <input
                    type="text"
                    id="fname9"
                    name="fname9"
                    value="Enter your name"
                  />
                  <input
                    type="email"
                    id="email9"
                    name="email9"
                    value="Enter your email address"
                  />
                  <input
                    type="text"
                    id="content9"
                    name="content9"
                    value="Your Message"
                  />
                  <button className="button9">Submit</button>
                </form>
              </div>
              <div className="rightcontent9">
                <img src="/images/91.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container10">
        <div className="body10">
          <div className="left101">
            <img src="/images/101.png" className="img10" />
            <div className="left101contents">
              Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
              diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
              muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
              inde.{" "}
            </div>
            <img src="/images/101a.png" />
          </div>
          <div className="left102">
            <div className="heading10">Pages</div>
            <div className="left102content2">
              <>
                <>Home it work</>
                <br></br>
                <>Pricing</>
                <br></br>
                <>Blog</>
                <br></br>
                <> demo</>
                <br></br>
              </>
            </div>
          </div>
          <div className="right102">
            <div className="heading10">Service</div>
            <div className="right102content2">
              <>Car wash</>
              <br></br>
              <>Car Service</>
              <br></br>
              Car Detailing<br></br>
            </div>
          </div>
          <div className="right101">
            <div className="heading10">Contact</div>
            <div className="right101content2">
              000000<br></br>
              Careasy@gmail.com<br></br>
              2972 Westheimer Rd.Santa<br></br> Ana, lllinois 85486<br></br>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container10 {
            background-color: #fec711;
          }
          .body10 {
            display: flex;
          }
          .img10 {
            margin-bottom: 20px;
          }
          .left101 {
            width: 480px;
            margin-left: 100px;
            color: black;
            margin-top: 30px;
          }
          .left101contents {
            font-family: Montserrat;
            font-size: 15px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0em;
            text-align: left;
          }
          .left102 {
            color: black;
            margin-top: 50px;
            margin-left: 200px;
          }
          .left102content2 {
            font-family: Montserrat;
            font-size: 15px;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 0em;
            margin-top: 10px;
          }
          .right102 {
            color: black;
            margin-left: 90px;
            margin-top: 50px;
          }
          .right102content2 {
            font-family: Montserrat;
            font-size: 15px;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 0em;
            margin-top: 10px;
          }
          .right101 {
            color: black;
            margin-top: 50px;
            margin-left: 90px;
          }
          .right101content2 {
            font-family: Montserrat;
            font-size: 15px;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 0em;
            margin-top: 10px;
          }
          .heading10 {
            font-family: Montserrat;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
          }
          .our9 {
            font-family: Montserrat;
            font-size: 48px;
            font-weight: 700;
            line-height: 59px;
            letter-spacing: 0em;
            text-align: center;
            color: #13040a;
          }

          .container9 {
            background-color: white;
          }
          .body9 {
            background-color: white;
          }
          .content9 {
            font-family: arial;
            font-size: 24px;
            margin: 25px auto; /* Center the box horizontally */
            max-width: 1113px; /* Limit maximum width */
            height: auto; /* Let the height adjust based on content */
            outline: solid 1px black;
            display: flex;
            justify-content: center; /* Center the content horizontally */
            align-items: center; /* Center the content vertically */
            border-radius: 15.82px;
          }

          .heading9 {
            font-family: Montserrat;
            font-size: 28px;
            font-weight: 600;
            line-height: 34px;
            letter-spacing: 0em;
            text-align: center;
            color: #13040a;
          }
          .subheading9 {
            font-family: Montserrat;
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
            color: #000000;
          }
          #fname9 {
            background-color: #f3f3f3;
            color: #9f9f9f;
            border-radius: 36px;
            background-color: #f0f0f0;
            padding: 20px;
            width: 402.49px;
            height: 56.5px;
          }
          #email9 {
            background-color: #f3f3f3;
            color: #9f9f9f;
            border-radius: 36px;
            background-color: #f0f0f0;
            padding: 20px;
            width: 402.49px;
            height: 56.5px;
          }
          #content9 {
            background-color: #f3f3f3;
            color: #9f9f9f;
            border-radius: 24px;
            background-color: #f0f0f0;
            padding: 20px;
            width: 402.49px;
            height: 169.49px;
          }
          .button9 {
            margin-top: 5px; /* Adjust vertical spacing between image and button */
            width: 485.88px;
            height: 56.5px;
            padding: 18px 31px;
            border-radius: 37px;
            background-color: black;
            color: yellow;
            border: none;
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            line-height: 200%; /* Center the button text */
            margin-inline: auto;
          }
          .rightcontent9 {
            margin-top: 10px;
          }
          .container8 {
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: normal;
          }
          .body8 {
            width: 100%;
            background-color: black;

            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px;
            line-height: normal;
          }

          .our8 {
            color: white;
            font-size: 32px;
            margin-bottom: 50px;
          }
          hr.new {
            border: 1px solid white;
          }
          .content8head {
            font-size: 20px;
            margin-bottom: 20px;
          }
          .left-section8 {
            line-height: normal;
          }
          .form8 {
            padding: 10px;
          }
          .right-section8 {
            text-align: center;
            margin-right: 100px;
          }
          .content8 {
            text-align: left;
            color: white;
            background-color: black;
            font-family: "Montserrat";
            margin-bottom: 0;
            line-height: 24.1px;
            line-height: normal;
          }
          .container7 {
            background-color: white;
            align-items: center;
            margin-top: 0px; /* Adjust margin as needed */
          }

          .body7 {
            width: 100%;
            /* Adjust max-width as needed */
            padding: 0px;
          }

          .our7 {
            text-align: center;
            color: black;
            font-size: 36px;
            font-family: "Montserrat", sans-serif;
            margin-bottom: 20px;
          }

          .contents7 {
            display: flex;
            justify-content: space-between;
          }

          .left-section7 {
            display: flex;
            flex-direction: column;
          }

          .left-section7 img,
          .right-section7 img {
            max-width: 100%;
            margin-bottom: 10px; /* Adjust margin as needed */
          }
          .right-section7 {
            display: flex;
            flex-direction: column;
            margin-top: 300px;
          }

          .central-section7 {
            flex: 1;
            padding: 0 0px;
            margin-top: 150px; /* Adjust padding as needed */
          }

          .testimonial7 {
            background-size: cover;
            background-position: center;
            padding: 10px;
            border: 1px; /* Add border as needed */
            border-radius: 10px; /* Add border radius as needed */
            color: #333; /* Adjust text color as needed */
            font-size: 18px;
            font-family: "Arial", sans-serif; /* Adjust font family as needed */
            line-height: 1.5;
            width: 654px;
            height: 399px;
            top: 6002px;
            left: 392px;
          }
          .test7 {
            width: 522px;
            height: 218px;
            top: 6064px;
            left: 468px;
            margin-left: 60px;
            margin-top: 50px;
          }
          .sign7 {
            margin-bottom: 200px;
          }
          .container6 {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .body6 {
            width: 100%;
            padding: 20px;
          }

          .our6 {
            text-align: center;
            color: black;
            font-size: 48px;
            font-family: "Montserrat";
            margin-bottom: 0;
            line-height: 58.51px;
            font-weight: 700;
            line-height: 200%; /* Added to remove extra space below the heading */
          }

          .contents6 {
            display: flex;
            justify-content: space-between;
            color: black;
          }
          .right-section6 {
            position: relative;
            margin-top: 50px;
          }
          .left-section6 {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
          }

          .image-wrapper6 {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .image61,
          .image62 {
            margin-right: 10px; /* Adjust spacing between images */
          }

          .booknowshort6 {
            margin-top: 5px; /* Adjust vertical spacing between image and button */
            width: 211px;
            height: 57px;
            padding: 18px 31px;
            border-radius: 37px;
            background-color: black;
            color: white;
            border: none;
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            line-height: 200%; /* Center the button text */
            margin-inline: auto;
          }

          .right-section6 img {
            max-width: 100%; /* Ensure the image does not exceed its container */
          }

          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .navbar {
            background-color: #000000;
            padding: 20px 0;
            font-family: "DM Sans", sans-serif;
            font-size: 18px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0.30000001192092896px;
            text-align: center;
            display: flex;
            width: 100%;
          }
          .firstimg {
            float: left;
            margin-left: 100px; /* Adjust this value as needed for spacing */
          }

          .navbar ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            text-align: right;
            margin-right: 10px;
            margin-left: 250px;
            margin-top: 15px;
          }

          .navbar ul li {
            display: inline;
            margin-left: 70px;
          }

          .navbar ul li a {
            color: white;
            text-decoration: none;
            font-family: DM Sans;
            font-size: 19px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0.30000001192092896px;
            text-align: center;
          }

          .navbar ul li a:hover {
            text-decoration: underline;
          }

          .navbar ul li a.booknow {
            background-color: #fec711;
            color: #000000;
            border-radius: 10px;
            padding: 5px;
            border: 3px solid #fec711;
            font-family: DM Sans;
            font-size: 14px;
            font-weight: 700;
            line-height: 18px;
            letter-spacing: 0px;
            text-align: center;
            width: 117px;
            height: 38px;
            top: 30px;
          }

          .body {
            width: 100%;
            background-color: #fec811;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 50px;
          }

          .left-section {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .image-container {
            position: relative;
          }

          .oneb {
            width: 654px;
            height: 299px;
            position: absolute;
            top: 0;
            left: -300px;
          }

          .oned {
            width: 740px;
            height: 324px;
            position: absolute;
            top: 0px; /* Adjust this value to overlap */
            left: 50px; /* Adjust this value to overlap */
          }
          .onec {
            width: 1005px;
            height: 250px;
            position: absolute;
            top: 50px; /* Adjust this value for vertical position */
            left: -270px; /* Adjust this value for horizontal position */
            z-index: 1; /* Ensure .onec is on top */
          }

          .left-sectioncontents {
            margin-bottom: 30px;
          }

          .right-section {
            text-align: center;
            z-index: 1;
          }

          .booknowshort {
            width: 211px;
            height: 57px;
            padding: 18px 31px;
            border-radius: 37px;
            background-color: black;
            color: white;
            border: none;
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            line-height: 200%;
          }

          .forms {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            padding: 0 20px;
          }
          .form2 {
            background-color: white;
          }

          .appointment-box {
            width: 473px;
            height: 610px;
            border-radius: 16px;
            border: 1px solid black;
            margin-right: 100px;
            background-color: white;
            box-shadow: 0px 22.598983764648438px 33.898475646972656px 0px
              #666af521;
          }

          .formshead {
            background-color: black;
            border-radius: 16px 16px 0px 0px;
            padding: 10px;
            color: white;
            height: 128px;
            font-family: "Montserrat";
          }

          h1 {
            text-align: left;
            color: black;
            font-size: 74px;
            font-family: "Montserrat";
            margin-bottom: 0; /* Added to remove extra space below the heading */
          }

          h2 {
            margin: 0;
            text-align: left;
            font-size: 22px;
            line-height: 26.82px;
            font-weight: 600;
            margin-left: 20px;
            margin-top: 30px;
          }

          h4 {
            text-align: left;
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 17.07px;
            font-weight: 400;
            margin-left: 20px;
            margin-top: 10px;
          }

          form {
            padding: 10px;
          }

          label {
            display: block;
            margin-bottom: 5px;
            font-size: 20px;
          }

          input {
            width: calc(100% - 22px);
            padding: 8px;
            border-radius: 5px;
            border: 1px solid #ccc;
            box-sizing: border-box;
            margin-top: 20px;
          }
          #fname {
            background-color: #f3f3f3;
            color: #9f9f9f;
            border-radius: 36px;
            background-color: #f0f0f0;
            padding: 20px;
            width: 402.49px;
            height: 56.5px;
          }
          #no {
            background-color: #f3f3f3;
            color: #9f9f9f;
            border-radius: 36px;
            background-color: #f0f0f0;
            padding: 20px;
            width: 402.49px;
            height: 56.5px;
          }
          #content {
            background-color: #f3f3f3;
            color: #9f9f9f;
            border-radius: 24px;
            background-color: #f0f0f0;
            padding: 20px;
            width: 402.49px;
            height: 169.49px;
          }
          .bottom-left-image {
            bottom: 0px;
            left: 1px;
          }
          button {
            background-color: #fecf33;
            color: black;
            border-radius: 50px;
            font-family: Montserrat;
            font-weight: 600;
            font-size: 18px;
            line-height: 21.49px;
            padding: 20px;
            width: 402.59px;
            height: 65px;
            margin-top: 30px;
          }
          /* this is the css for second page2222222*/

          .container2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: normal;
          }
          .body2 {
            width: 100%;
            background-color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 50px;
            line-height: normal;
          }
          .our2 {
            text-align: left;
            color: black;
            font-size: 48px;
            font-family: "Montserrat";
            margin-bottom: 0;
            line-height: 58.51px;
            font-weight: 700;
            line-height: 200%; /* Added to remove extra space below the heading */
          }
          .content2 {
            text-align: left;
            color: black;
            font-size: 18px;
            font-family: "Montserrat";
            margin-bottom: 0;
            line-height: 24.1px;
            font-weight: 400;
            line-height: normal;
            margin-bottom: 20px;
          }
          .left-section2 {
            line-height: normal;
          }
          .container3 {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .body3 {
            width: 100%;
            background-color: white;
            padding: 50px;
            background-image: linear-gradient(
              180deg,
              rgba(255, 211, 65, 0.35) -77.71%,
              rgba(255, 255, 255, 0) 89.04%
            );
          }

          .heading3 {
            font-family: "Montserrat";
            font-size: 48px;
            font-weight: 700;
            line-height: 58.51px;
            color: #0e0e0e;
            text-align: center;
          }

          .cities {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            color: #d9d9d9;
            text-align: center;
          }

          .city {
            margin: 10px;
            font-family: Montserrat;
            font-size: 24px;
            font-weight: 600;
            line-height: 29px;
            letter-spacing: 0em;
            text-align: center;
          }
          .container4 {
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            background-image: url("/images/car-wash5.png");
            width: 1440px;
            height: 658px;
          }
          .our4 {
            text-align: left;
            color: white;
            font-size: 48px;
            font-family: "Montserrat";
            margin-bottom: 0;
            line-height: 58.51px;
            font-weight: 700;
            line-height: 200%; /* Added to remove extra space below the heading */
          }
          .body4 {
            display: flex;
            flex: 1;
          }

          .left-section4 {
            flex: 1;
            padding: 10px;
            text-align: center;
          }

          .right-section4 {
            flex: 1;
            padding: 10px;
          }

          .content4 {
            padding: 10px;
            border: 1px;
            color: white;
          }

          .form4 {
            border: 1px;
            padding: 10px;
          }
          .booknowshort4 {
            width: 211px;
            height: 57px;
            padding: 18px 31px;
            border-radius: 37px;
            background-color: #fec711;
            color: #000000;
            border: none;
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            line-height: 200%;
          }
          .container5 {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
          }

          .body5 {
            width: 100%;
            max-width: 1200px; /* Adjust this value as needed */
            padding: 20px;
            backgroundcolor: white;
          }
          .our5 {
            text-align: center;
            color: black;
            font-size: 48px;
            font-family: "Montserrat";
            margin-bottom: 0;
            line-height: 58.51px;
            font-weight: 700;
            line-height: 200%; /* Added to remove extra space below the heading */
          }

          .row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }

          .column {
            flex: 1;
            margin-right: 20px;
          }

          .box {
            display: flex;
            align-items: center;
            padding: 20px;
            border-radius: 10px;
            background-color: yellow;
            color: black;
          }

          .icon {
            width: 50px; /* Adjust the width of the icon as needed */
            margin-right: 20px;
          }

          .content {
            flex: 1;
          }

          .title {
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 10px;
          }

          hr {
            margin: 10px 0;
            border: none;
            border-top: 1px solid black;
          }
          /* .our2 {
            text-align: center;
            color: black;
            font-size: 48px;
            font-family: "Montserrat";
            margin-bottom: 0;
            line-height: 58.51px;
            font-weight: 700;
            line-height: 200%;
          } */
          .body6 {
            background-color: white;
          }
        `}
      </style>
    </>
  );
};

export default About;
