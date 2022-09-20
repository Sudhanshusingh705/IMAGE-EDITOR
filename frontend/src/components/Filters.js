import React, { useEffect, useState } from "react";
// import "./css/filters.css"

const Filters = ({
  userid,
  setOptions,
  filterArray,
  setFilterArray,
  getUserFilter,
  loading,
}) => {
  const url = "http://localhost:5000";

  useEffect(() => {
    getUserFilter();
  }, []);

  const deleteFilter = (id) => {
    fetch(`${url}/filter/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getUserFilter();
      });
  };

  const showFilters = () => {
    if (!loading)
      return filterArray.map((filter) => (
        <div className="card">
          <i
            onClick={(e) => deleteFilter(filter._id)}
            class=" fa-solid fa-circle-xmark del-btn"
            style={{
              position: "absolute",
              zIndex: "5",
              right: "-15px",
              top: "10px",
            }}
          ></i>

          <div
            class="bg-image hover-zoom ripple shadow-1-strong rounded mt-4"
            onClick={(e) => setOptions([...filter.values])}
          >
            <img src={filter.image} class="w-100" alt="" />
            <a href="#!">
              <div
                class="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div class="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span class="badge bg-light pt-2 ms-3 mt-3 text-dark">
                      {filter.name}
                    </span>
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div
                  class="mask"
                  style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                ></div>
              </div>
            </a>
          </div>
        </div>
      ));
  };

  return <div>{showFilters()}</div>;
};

export default Filters;
