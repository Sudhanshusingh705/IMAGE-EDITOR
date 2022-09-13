import React from "react";
import "./ImageEditor.css";


const ImageEditor = () => {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PHOTO EDITOR</title>
        <link rel="stylesheet" href="style.css" />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        <div className="main">
          <div className="Tools">
            <ul>
              <li>
                <i className="bx bxs-brightness-half" />
                <p>BrightNess</p>
              </li>
              <li>
                <i className="bx bxs-brush" />
                <p>Blur</p>
              </li>
              <li>
                <i className="bx bxs-collection" />
                <p>GreyScale</p>
              </li>
              <li>
                <i className="bx bxs-color-fill" />
                <p>Hue Rotate</p>
              </li>
              <li>
                <i className="bx bxs-magic-wand" />
                <p>Saturation</p>
              </li>
              <li onclick="Download_btn()">
                <i className="bx bx-export" />
                <p>Export</p>
              </li>
            </ul>
          </div>
          <div className="content">
            <p id="logo">Image Editor</p>
            <div className="choose_image">
              <div className="upload_img_box">
                <i className="bx bxs-image-add" />
                <br />
                <input
                  type="file"
                  name="selectedImage"
                  id="selectedImage"
                  accept="image/jpeg, image/png"
                />
                <p id="hint">choose Image from folder</p>
              </div>
            </div>
            <canvas id="image_canvas" />
            <div className="image_holder">
              <button id="remove_img_btn">
                <i className="bx bxs-message-square-x" />
              </button>
              <img src="" alt="img" id="image" />
            </div>
            <div className="options">
              <div className="option">
                <input
                  type="range"
                  max={200}
                  min={0}
                  defaultValue={100}
                  id="brightness"
                  className="slider"
                />
                <p id="brightVal" className="show_value">
                  100
                </p>
              </div>
              <div className="option">
                <input
                  type="range"
                  max={40}
                  min={0}
                  defaultValue={0}
                  id="blur"
                  className="slider"
                />
                <p id="blurVal" className="show_value">
                  0
                </p>
              </div>
              <div className="option">
                <input
                  type="range"
                  max={100}
                  min={0}
                  defaultValue={0}
                  id="greyScale"
                  className="slider"
                />
                <p id="greyVal" className="show_value">
                  0
                </p>
              </div>
              <div className="option">
                <input
                  type="range"
                  max={100}
                  min={0}
                  defaultValue={0}
                  id="hue"
                  className="slider"
                />
                <p id="hueVal" className="show_value">
                  0
                </p>
              </div>
              <div className="option">
                <input
                  type="range"
                  max={100}
                  min={1}
                  defaultValue={1}
                  id="saturation"
                  className="slider"
                />
                <p id="saturationVal" className="show_value">
                  1
                </p>
              </div>
            </div>
            <button id="clearAll">
              <span>Reset</span>
              <i className="bx bx-reset" />
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default ImageEditor;
