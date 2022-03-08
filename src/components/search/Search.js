
import React, { Component } from "react";
import $ from "jquery";
import data from "../../SIMULATION_DATABASE/data_BlockNews.json";
import "../../CSS/BreadCrumb.css";
import NewsResultforSerch from "./NewsResultforSerch.js";

class Search extends Component {
  getUserLocation = () => {
    $.getJSON("https://ipinfo.io?token=e4c3670fe0f797", function (data) {
      $("#ip").html(data.ip);
      $("#hostname").html(data.hostname);
      $("#country").html(data.country);
      $("#region").html(data.region);
      $("#city").html(data.city);
      $("#timezone").html(data.timezone);
      $("#loc").html(data.loc);
    });
  };
  render() {
    return (
      <div>
        <div id="align-top"></div>
        <ul id="breadcrumb">
          <li>
            <a href="/">
              <span class="fas fa-globe"> </span>
            </a>
          </li>
          <li>
            <a className="disabledHoverBC">Search</a>
          </li>
          <li></li>
        </ul>
        {/* ////// end breadcrumb /////////// */}

        <div className="container  my-3 pb-2">
          <div className="row">
            <div className="col-12">
              <form className="form-inline d-flex justify-content-center">
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    type="text"
                    className="form-search"
                    placeholder="                                                          What do you want to search ?"
                  />
                </div>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i className="fas fa-search"></i> Search
                </button>
              </form>
              <div className="collapse" id="collapseExample">
                <h5
                  className="justify-content-center text-center mt-4"
                  style={{ color: "gray" }}
                >
                  Found 3 posts that suits you
                </h5>
                <NewsResultforSerch
                  path={data[5].linkTopic}
                  linkImg={data[5].imgsrc}
                  title={data[5].title}
                  content={data[5].description}
                  date="08/03/2022"
                />
                <NewsResultforSerch
                  path={data[3].linkTopic}
                  linkImg={data[3].imgsrc}
                  title={data[3].title}
                  content={data[3].description}
                  date="08/03/2022"
                />
                <NewsResultforSerch
                  path={data[2].linkTopic}
                  linkImg={data[2].imgsrc}
                  title={data[2].title}
                  content={data[2].description}
                  date="08/03/2022"
                />
              </div>
            </div>
          </div>
        </div>

        {/* //////////bengin table ////////////////// */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 mb-12">
              <div className=" text-justify text-center ">
                {this.getUserLocation()}
                <h2 className="title">
                  <i className="fa fa-street-view"></i> Search by your location
                </h2>
                <table className="table table-bordered getUserLocationTable">
                  <thead className=" table-">
                    <tr>
                      <th scope="col" colSpan="2">
                        Your info
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th scope="row">Public IP</th>
                      <td id="ip"></td>
                    </tr>
                    <tr>
                      <th scope="row">ISP</th>
                      <td id="hostname"></td>
                    </tr>

                    <tr>
                      <th scope="row">Country</th>
                      <td id="country"></td>
                    </tr>

                    <tr>
                      <th scope="row">Area</th>
                      <td id="region"></td>
                    </tr>

                    <tr>
                      <th scope="row">City</th>
                      <td id="city"></td>
                    </tr>

                    <tr>
                      <th scope="row"> Timezone</th>
                      <td id="timezone"></td>
                    </tr>

                    <tr>
                      <th scope="row">Coordinates</th>
                      <td id="loc"></td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>


        <div className="container mt-4">
          <div className="justify-content-center text-justify text-center">
            
         
        <button
            className="btn btn-primary "
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            
            <i className="fas fa-search"></i> Search
                </button>
                </div>
          <div className="collapse" id="collapseExample">
            <h5
              className="justify-content-center text-center mt-4"
              style={{ color: "gray" }}
            >
              Found 2 posts that suits you
                </h5>
            <NewsResultforSerch
              path={data[4].linkTopic}
              linkImg={data[4].imgsrc}
              title={data[4].title}
              content={data[4].description}
              date="08/03/2022"
            />
            <NewsResultforSerch
              path={data[1].linkTopic}
              linkImg={data[1].imgsrc}
              title={data[1].title}
              content={data[1].description}
              date="08/03/2022"
            />
          </div>

        </div>

      </div>
    );
  }
}

export default Search;
