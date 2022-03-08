
import React, { Component } from "react";

class More extends Component {
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
            <a className="disabledHoverBC">
              <span class="fas fa-info"> </span> More
            </a>
          </li>
          <li></li>
        </ul>
        <div className="text-center introAbout">
          <h1>Tầm nhìn chiến lược và định hướng trong tương lai</h1>
          <p>
            Công ty TNHH bất động sản nhóm 2 không chỉ là nền tảng cung cấp
            tin tức về thị trường Bất động sản chính xác và nhanh chóng nhất
            Việt Nam, trong thời gian tới Công ty TNHH bất động sản nhóm 2 sẽ
            phát triển thêm nền tảng môi giới bất động sản, có nhiệm vụ kết nối
            các nhà đầu tư với nhau trên khắp mọi miền tổ quốc.
          </p>
        </div>
        <h3 className="text-center">
          ĐƯỢC TẠO RA TỪ 5 CON NGƯỜI
        </h3>
        <div id="chartdiv1"></div>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-12 mb-4 text-center">
              <h3>THIẾT KẾ RESPONSIVE TỐI ƯU CHO MOBILE</h3>
              <img id="responsive-mockup" src="media/responsive.png"></img>
            </div>
          </div>
        </div>
        <div className="container my-5 pb-5">
          <div className="row">
            <div className="col-lg-12 mb-4 text-center">
              <h4>TƯƠNG THÍCH VỚI MỌI TRÌNH DUYỆT</h4>
              <img style={{ width: "50%" }} src="media/multibrowser.png"></img>
            </div>
          </div>
        </div>

        
        {/* /////////// begin carousel ///////////////////////// */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 col-center m-auto">
              <h2>Phản hồi từ người dùng</h2>
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* Carousel indicators */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#myCarousel" data-slide-to={1} />
                  <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                {/* Wrapper for carousel items */}

                <div className="carousel-inner feedBack ">
                  <div className="item carousel-item active">
                    <div className="img-box">
                      <img src="media/dat.jpg" alt="" />
                    </div>
                    <p className="testimonial text-justify">
                      Tin tức cập nhật rất nhanh chóng, độ chính xác cao. Nội
                      dung bài viết chi tiết, cụ thể. Đây là nền tảng theo dõi
                      diễn biến thị trường BĐS tốt nhất Việt Nam.
                    </p>
                    <p className="overview">
                      <b>Lê Tiến Đạt</b>, khoa Công Nghệ Thông Tin
                      - Đại học Đông Á
                    </p>
                  </div>

                  <div className="item carousel-item">
                    <div className="img-box">
                      <img src="media/danh.jpg" alt="" />
                    </div>
                    <p className="testimonial text-justify">
                      Nền tảng cung cấp tin tức bất động sản giúp mọi người dễ
                      dàng kết nối với chủ đầu tư, nhiều lựa chọn và tìm được
                      những dự án nhà đất giá tốt.
                    </p>
                    <p className="overview">
                      <b>Nguyễn Hữu Danh </b>, khoa Công Nghệ Thông Tin
                    
                    </p>
                  </div>

                  <div className="item carousel-item">
                    <div className="img-box">
                      <img src="media/huan.jpg" alt="" />
                    </div>
                    <p className="testimonial text-justify">
                      Giao diện thân thiện với trải nghiệm người dùng, nền tảng
                      sở hữu nguồn data khổng lồ từ thị trường BĐS, rất phù hợp
                      để phát triển và mở rộng sau này.
                    </p>
                    <p className="overview">
                      <b>Lương Văn Huân</b>, khoa Công Nghệ Thông Tin - Đại học
                      Đông Á
                    </p>
                  </div>
                </div>

                {/* Carousel controls */}
                <a
                  className="carousel-control left carousel-control-prev"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" />
                </a>
                <a
                  className="carousel-control right carousel-control-next"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

        

        {/* ////////////////////start modal feedBack ///////////////////////////// */}

        <div className="container mb-5 pb-5">
          <div className="row">
            <div className="col-12  text-center">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@mdo">
                 Your feedback
                
              </button>
              
            </div>
          </div>
        </div>

        

        
      </div>
    );
  }
}

export default More;
