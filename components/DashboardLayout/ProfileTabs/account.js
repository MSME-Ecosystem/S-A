import React from "react";

export function AccountTab() {
  return (
    <div id="accountTab" className="tab-pane fade">
      <div className="my-post-content pt-3">
        <div className="post-input">
          <textarea
            name="textarea"
            id="textarea"
            cols={30}
            rows={5}
            className="form-control bg-transparent"
            placeholder="Please type what you want...."
            defaultValue={""}
          />
          <a
            href="javascript:void(0);"
            className="btn btn-primary light me-1 px-3"
            data-bs-toggle="modal"
            data-bs-target="#linkModal"
          >
            <i className="fa fa-link m-0" />{" "}
          </a>
          {/* Modal */}
          <div className="modal fade" id="linkModal">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Social Links</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <a className="btn-social facebook" href="javascript:void(0)">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn-social google-plus"
                    href="javascript:void(0)"
                  >
                    <i className="fab fa-google-plus-g" />
                  </a>
                  <a className="btn-social linkedin" href="javascript:void(0)">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a className="btn-social instagram" href="javascript:void(0)">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn-social twitter" href="javascript:void(0)">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn-social youtube" href="javascript:void(0)">
                    <i className="fab fa-youtube" />
                  </a>
                  <a className="btn-social whatsapp" href="javascript:void(0)">
                    <i className="fab fa-whatsapp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            href="javascript:void(0);"
            className="btn btn-primary light me-1 px-3"
            data-bs-toggle="modal"
            data-bs-target="#cameraModal"
          >
            <i className="fa fa-camera m-0" />{" "}
          </a>
          {/* Modal */}
          <div className="modal fade" id="cameraModal">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Upload images</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Upload</span>
                    <div className="form-file">
                      <input
                        type="file"
                        className="form-file-input form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="javascript:void(0);"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#postModal"
          >
            Post
          </a>
          {/* Modal */}
          <div className="modal fade" id="postModal">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Post</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <textarea
                    name="textarea"
                    id="textarea2"
                    cols={30}
                    rows={5}
                    className="form-control bg-transparent"
                    placeholder="Please type what you want...."
                    defaultValue={""}
                  />
                  <a
                    className="btn btn-primary btn-rounded"
                    href="javascript:void(0)"
                  >
                    Post
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-uoloaded-post border-bottom-1 pb-5">
          <img
            src="images/profile/8.jpg"
            alt=""
            className="img-fluid w-100 rounded"
          />
          <a className="post-title" href="post-details.html">
            <h3 className="text-black">
              Collection of textile samples lay spread
            </h3>
          </a>
          <p>
            A wonderful serenity has take possession of my entire soul like
            these sweet morning of spare which enjoy whole heart.A wonderful
            serenity has take possession of my entire soul like these sweet
            morning of spare which enjoy whole heart.
          </p>
          <button className="btn btn-primary me-2">
            <span className="me-2">
              <i className="fa fa-heart" />
            </span>
            Like
          </button>
          <button
            className="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#replyModal"
          >
            <span className="me-2">
              <i className="fa fa-reply" />
            </span>
            Reply
          </button>
        </div>
        <div className="profile-uoloaded-post border-bottom-1 pb-5">
          <img
            src="images/profile/9.jpg"
            alt=""
            className="img-fluid w-100 rounded"
          />
          <a className="post-title" href="post-details.html">
            <h3 className="text-black">
              Collection of textile samples lay spread
            </h3>
          </a>
          <p>
            A wonderful serenity has take possession of my entire soul like
            these sweet morning of spare which enjoy whole heart.A wonderful
            serenity has take possession of my entire soul like these sweet
            morning of spare which enjoy whole heart.
          </p>
          <button className="btn btn-primary me-2">
            <span className="me-2">
              <i className="fa fa-heart" />
            </span>
            Like
          </button>
          <button
            className="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#replyModal"
          >
            <span className="me-2">
              <i className="fa fa-reply" />
            </span>
            Reply
          </button>
        </div>
        <div className="profile-uoloaded-post pb-3">
          <img
            src="images/profile/8.jpg"
            alt=""
            className="img-fluid w-100 rounded"
          />
          <a className="post-title" href="post-details.html">
            <h3 className="text-black">
              Collection of textile samples lay spread
            </h3>
          </a>
          <p>
            A wonderful serenity has take possession of my entire soul like
            these sweet morning of spare which enjoy whole heart.A wonderful
            serenity has take possession of my entire soul like these sweet
            morning of spare which enjoy whole heart.
          </p>
          <button className="btn btn-primary me-2">
            <span className="me-2">
              <i className="fa fa-heart" />
            </span>
            Like
          </button>
          <button
            className="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#replyModal"
          >
            <span className="me-2">
              <i className="fa fa-reply" />
            </span>
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}
