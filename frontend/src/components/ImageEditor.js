import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DEFAULT_OPTIONS from "./DefaultOptions";
import Filters from "./Filters";
import "./Imageeditor.css";
// import "./imageeditor.css"
// import Navbar from "./Navbar"

const FilterSlider = ({ options, updateFilterOptions, index }) => {
  return (
    <div>
      <div
        className="p-3 fw-bold radius-curve"
        style={{ background: "#1a3847" }}
      >
        <label class="form-label text-white" for={options.property}>
          {options.name}
          {"   :   "}
          <span class="form-label-small">{options.value}</span>
        </label>
        <div class="range">
          <input
            onChange={(e) =>
              updateFilterOptions(index, parseInt(e.target.value))
            }
            value={options.value}
            type="range"
            class="form-range"
            min={options.range.min}
            max={options.range.max}
            id={options.property}
            style={{ backgoundColor: options.backgroundColor }}
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

const ImageEditor = () => {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [mainImg, setMainImg] = useState(
    "https://source.unsplash.com/EwKXn5CapA4"
  );
  const [filterName, setFilterName] = useState("");
  const [filterArray, setFilterArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let image = sessionStorage.getItem("mainImg");
    if (image) {
      setMainImg(image);
    }

    document.body.addEventListener("drop", (e) => e.preventDefault());
  }, []);

  const updateFilters = (index, val) => {
    let newOptions = [...options];
    newOptions[index]["value"] = val;
    setOptions([...newOptions]);
  };

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const getUserFilter = (values) => {
    setLoading(true);
    fetch("http://localhost:5000/filter/getbyuser/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilterArray(data);
        setLoading(false);
      });
  };

  const saveCustomFilter = () => {
    console.log(options);
    const values = currentUser._id;
    console.log(values);
    fetch("http://localhost:5000/filter/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: filterName,
        image: mainImg,
        values: options,
        createdBy: currentUser._id,
        createdAt: new Date(),
      }),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        getUserFilter();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Filter saved successfully",
        });
      }
    });
  };

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    // filters.push(`url(${mainImg})`);
    console.log({ filter: filters.join(" ") });
    console.log(`url(${mainImg})`);
    return { filter: filters.join(" "), backgroundImage: `url('${mainImg}')` };
  }

  const uploadImage = (e) => {
    const file = e.target.files[0];
    // setSelThumbnail(file.name)
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        console.log("uploaded");
        res.json().then((data) => {
          console.log(data);
          setMainImg(data.url);
          sessionStorage.setItem("mainImg", data.url);
        });
      }
    });
  };

  return (
    <div className="vh-100">
      {/* <Navbar/> */}
      <div className="editor-cont" style={{ background: "#1a3847" }}>
        <p
          className="page-title text-center"
          style={{ color: "white", fontSize: "50px" }}
        >
          Image Editor
        </p>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div className="card saved-filters">
                <div className="card-body" style={{ background: "EEDD82" }}>
                  <h5 className="text-center fw-bold">Available Filters</h5>
                  <hr />
                  <Filters
                    loading={loading}
                    getUserFilter={getUserFilter}
                    userid={currentUser._id}
                    setOptions={setOptions}
                    filterArray={filterArray}
                    setFilterArray={setFilterArray}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 ">
              <div className="card editor" style={{ background: "#EEDD82" }}>
                <div className="card-body">
                  <label
                    htmlFor="uploader"
                    className="drag-drop"
                    style={{ background: "#1a3847", color: "white" }}
                    onDrop={(e) => {
                      e.preventDefault();
                      console.log(e.type);
                    }}
                  >
                    <b>Select File</b>
                  </label>
                  <input
                    className=""
                    hidden
                    id="uploader"
                    type="file"
                    onChange={(e) => uploadImage(e)}
                  />
                  <div className="editor-image mt-2" style={getImageStyle()} />
                </div>
              </div>
            </div>
            <div className="col-md-3  ">
              <div className="card editor-toolbox">
                <div className="card-body " style={{ background: "#EEDD82" }}>
                  <div class="accordion" id="accordion-filter">
                    <div class="accordion-item filterlist">
                      <h2 class="accordion-header" id="heading-filter">
                        <button
                          class="accordion-button"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#collapse-filter"
                          aria-expanded="true"
                          aria-controls="collapse-filter"
                        >
                          Color Filters
                        </button>
                      </h2>
                      <div
                        id="collapse-filter"
                        class="accordion-collapse collapse show"
                        aria-labelledby="heading-filter"
                        data-mdb-parent="#accordion-filter"
                      >
                        <div class="mt-2">
                          {options.map((option, index) => (
                            <FilterSlider
                              options={option}
                              updateFilterOptions={updateFilters}
                              index={index}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="heading-save-filter">
                        <button
                          class="accordion-button"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#collapse-save-filter"
                          aria-expanded="true"
                          aria-controls="collapse-save-filter"
                        >
                          Save Filters
                        </button>
                      </h2>
                      <div
                        id="collapse-save-filter"
                        class="accordion-collapse collapse show"
                        aria-labelledby="heading-save-filter"
                        data-mdb-parent="#accordion-filter"
                      >
                        <div class="accordion-body">
                          <div className="input-group">
                            <input
                              className="form-control"
                              onChange={(e) => setFilterName(e.target.value)}
                            />

                            <button
                              className="btn btn-success input-group-append"
                              onClick={saveCustomFilter}
                            >
                              <i class="fas fa-save    "></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
