import React from "react";

export function ContactTab() {
  return (
    <div id="contactTab" className="tab-pane fade">
      <div className="profile-about-me">
        <div className="pt-4 border-bottom-1 pb-3">
          <h4 className="text-primary">About Me</h4>
          <p className="mb-2">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence was created for the bliss
            of souls like mine.I am so happy, my dear friend, so absorbed in the
            exquisite sense of mere tranquil existence, that I neglect my
            talents.
          </p>
          <p>
            A collection of textile samples lay spread out on the table - Samsa
            was a travelling salesman - and above it there hung a picture that
            he had recently cut out of an illustrated magazine and housed in a
            nice, gilded frame.
          </p>
        </div>
      </div>
      <div className="profile-skills mb-5">
        <h4 className="text-primary mb-2">Skills</h4>
        <a
          href="javascript:void(0);"
          className="btn btn-primary light btn-xs mb-1"
        >
          Admin
        </a>
        <a
          href="javascript:void(0);"
          className="btn btn-primary light btn-xs mb-1"
        >
          Dashboard
        </a>
        <a
          href="javascript:void(0);"
          className="btn btn-primary light btn-xs mb-1"
        >
          Photoshop
        </a>
        <a
          href="javascript:void(0);"
          className="btn btn-primary light btn-xs mb-1"
        >
          Bootstrap
        </a>
        <a
          href="javascript:void(0);"
          className="btn btn-primary light btn-xs mb-1"
        >
          Responsive
        </a>
        <a
          href="javascript:void(0);"
          className="btn btn-primary light btn-xs mb-1"
        >
          Crypto
        </a>
      </div>
      <div className="profile-lang  mb-5">
        <h4 className="text-primary mb-2">Language</h4>
        <a href="javascript:void(0);" className="text-muted pe-3 f-s-16">
          <i className="flag-icon flag-icon-us" /> English
        </a>
        <a href="javascript:void(0);" className="text-muted pe-3 f-s-16">
          <i className="flag-icon flag-icon-fr" /> French
        </a>
        <a href="javascript:void(0);" className="text-muted pe-3 f-s-16">
          <i className="flag-icon flag-icon-bd" /> Bangla
        </a>
      </div>
      <div className="profile-personal-info">
        <h4 className="text-primary mb-4">Personal Information</h4>
        <div className="row mb-2">
          <div className="col-sm-3 col-5">
            <h5 className="f-w-500">
              Name <span className="pull-end">:</span>
            </h5>
          </div>
          <div className="col-sm-9 col-7">
            <span>Mitchell C.Shay</span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 col-5">
            <h5 className="f-w-500">
              Email <span className="pull-end">:</span>
            </h5>
          </div>
          <div className="col-sm-9 col-7">
            <span>example@examplel.com</span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 col-5">
            <h5 className="f-w-500">
              Availability <span className="pull-end">:</span>
            </h5>
          </div>
          <div className="col-sm-9 col-7">
            <span>Full Time (Free Lancer)</span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 col-5">
            <h5 className="f-w-500">
              Age <span className="pull-end">:</span>
            </h5>
          </div>
          <div className="col-sm-9 col-7">
            <span>27</span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 col-5">
            <h5 className="f-w-500">
              Location <span className="pull-end">:</span>
            </h5>
          </div>
          <div className="col-sm-9 col-7">
            <span>Rosemont Avenue Melbourne, Florida</span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 col-5">
            <h5 className="f-w-500">
              Year Experience <span className="pull-end">:</span>
            </h5>
          </div>
          <div className="col-sm-9 col-7">
            <span>07 Year Experiences</span>
          </div>
        </div>
      </div>
    </div>
  );
}
