import React, { Component } from "react";
import topAd from "./assets/topAd.PNG";
import "./App.css";

class App extends Component {
  componentDidMount() {
    var Swiper = window.Swiper;
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });
  }
  render() {
    return (
      <div className="App">
        <div className="row m-0 p-0">
          <a class="w-100" href="#">
            <img
              style={{
                height: 80,
              }}
              className="w-100"
              src={topAd}
            />
          </a>
        </div>

        <div
          className="row justify-content-between pl-5 pr-5 m-0"
          style={{
            height: 34,
            background: "#303030",
          }}
        >
          <div className="row w-50">
            <a className="d-flex align-content-center m-1 low-white">
              <span className="material-icons low-white">add_location</span>
              select your address
            </a>
          </div>
          <div className="row align-content-center justify-content-center w-50">
            <a class="d-flex align-content-center mr-4 low-white">
              <span class="material-icons low-white">directions_car</span>
              delivery
            </a>
            <a class="d-flex align-content-center mr-4 low-white">
              <span class="material-icons low-white">add_location</span>
              selec
            </a>
            <a class="d-flex align-content-center mr-4 low-white">
              <span class="material-icons low-white">person</span>
              Register or sign in
            </a>
          </div>
        </div>
        <div
          style={{
            background: "#fbfbfb",
          }}
          class="row justify-content-between pt-3 pl-5 pr-5 m-0   "
        >
          <div>
            <span
              style={{
                fontSize: 32,
              }}
            >
              LOGO
            </span>
          </div>{" "}
          <div class="row">
            <span>
              a best price to connect <br />
              with top sellers{" "}
            </span>
            <input
              placeholder="search"
              class="p-3 ml-3"
              style={{
                borderRadius: 28,
                borderColor: "#f6f6f6",
                borderStyle: "solid",
                borderWidth: 1,
                width: 440,
                height: 46,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 999,
                marginLeft: "calc(100% - 118px)",
                marginTop: -48,
                background: "#212b46",
                width: 60,
                height: 46,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                borderRadius: "0 28px 28px 0px",
              }}
            >
              <span class="material-icons low-white">search</span>
            </div>
          </div>
          <div>
            <span
              style={{
                fontSize: 34,
              }}
              class="material-icons low-white"
            >
              chat_bubble
            </span>
            <span
              style={{
                color: "#fff",
                display: "inline-block",
                background: "#000",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                fontSize: "12px",
                position: "relative",
                top: "-26px",
                right: "11px",
                textAlign: "center",
              }}
            >
              4
            </span>
            <span
              style={{
                fontSize: 34,
              }}
              class="material-icons low-white"
            >
              favorite
            </span>
            <span
              style={{
                color: "#fff",
                display: "inline-block",
                background: "#000",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                fontSize: "12px",
                position: "relative",
                top: "-26px",
                right: "11px",
                textAlign: "center",
              }}
            >
              4
            </span>
            <span
              style={{
                fontSize: 34,
              }}
              class="material-icons low-white"
            >
              shopping_cart
            </span>
            <span
              style={{
                color: "#fff",
                display: "inline-block",
                background: "#000",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                fontSize: "12px",
                position: "relative",
                top: "-26px",
                right: "11px",
                textAlign: "center",
              }}
            >
              0
            </span>
            <div
              style={{
                display: "inline-block",
              }}
            >
              <div>my cart</div>
              <div>$0.00</div>
            </div>
          </div>
          <div class="container mt-4  ">
            <div
              class="row"
              style={{
                border: "0px solid #eee",
                borderTopWidth: 1,
              }}
            >
              <div
                class="p-3 row align-content-center m-0"
                style={{
                  background: "#212b46",
                  textAlign: "center",
                  width: 235,
                }}
              >
                <span class="material-icons low-white pr-3">list</span>
                <span class="text-white">All Categories</span>
              </div>
              <div
                class="p-2 row align-content-center m-0"
                style={{
                  textAlign: "center",
                  width: 140,
                }}
              >
                <span class="text-black">All Categories</span>
              </div>
              <div
                class="p-2 row align-content-center m-0"
                style={{
                  textAlign: "center",
                  width: 250,
                }}
              >
                <span class="text-black">person protective equipments</span>
              </div>
              <div
                class="p-2 row align-content-center m-0"
                style={{
                  textAlign: "center",
                  width: 150,
                }}
              >
                <span class="text-black">partner program</span>
              </div>
              <div
                class="p-2 row align-content-center m-0"
                style={{
                  textAlign: "center",
                  width: 120,
                }}
              >
                <span class="text-black">sall on dun</span>
              </div>
              <div
                class="p-2 row align-content-center m-0 ml-4"
                style={{
                  textAlign: "center",
                  width: 220,
                }}
              >
                <span class="text-black">Get the app | English -USD</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-100"
          style={{
            height: "100vh",
          }}
        >
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  src={require("./assets/105922_2.jpg")}
                  class="w-100 h-100 p-0 m-0"
                />
              </div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div
          class="container p-0 "
          style={{
            height: 0,
          }}
        >
          <div
            style={{
              width: 235,
              minHeight: 60,
              background: "#f6f6f6",
              position: "relative",
              top: "-100vh",
              zIndex: 999,
            }}
          >
            <div class=" dropright">
              <div
                style={{
                  cursor: "pointer",
                }}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="text-center p-3 row justify-content-around "
              >
                tooltool <span class="material-icons">chevron_right</span>
              </div>
              <div
                style={{
                  width: "185px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 10px",
                }}
                 class="dropdown-menu "
              >
                <ul class="p-0">
                  <li
                    style={{
                      border: "0px solid #f6f6f6",

                      borderWidth: "1px 0px 1px 0px",
                      padding: "8px 16px",
                      margin: 4,
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <a>text of link </a>
                  </li>
                  <li
                    style={{
                      border: "0px solid #f6f6f6",

                      borderWidth: "1px 0px 1px 0px",
                      padding: 8,
                      margin: 4,
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <a>text of link </a>
                  </li>
                  <li
                    style={{
                      border: "0px solid #f6f6f6",

                      borderWidth: "1px 0px 1px 0px",
                      padding: 8,
                      margin: 4,
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <a>text of link </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-center p-3 row justify-content-around">
              tooltool <span class="material-icons">chevron_right</span>
            </div>
            <div class="text-center p-3 row justify-content-around">
              tooltool <span class="material-icons">chevron_right</span>
            </div>
            <div class="text-center p-3 row justify-content-around">
              tooltool <span class="material-icons">chevron_right</span>
            </div>
            <div class="text-center p-3 row justify-content-around">
              tooltool <span class="material-icons">chevron_right</span>
            </div>
            <div class="text-center p-3 row justify-content-around">
              tooltool <span class="material-icons">chevron_right</span>
            </div>
            <div class="text-center p-3 row justify-content-around">
              tooltool <span class="material-icons">chevron_right</span>
            </div>{" "}
            <div class="text-center p-3 row justify-content-around">
              tooltool <span class="material-icons">chevron_right</span>
            </div>{" "}
            <div class="text-center p-3 row justify-content-around">
              tooltool <span class="material-icons">chevron_right</span>
            </div>{" "}
            <div class="text-center p-3 row justify-content-around">
              tooltool <span class="material-icons">chevron_right</span>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
