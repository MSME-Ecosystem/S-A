import React from "react";
import DashboardLayout from "../../../components/DashboardLayout/DashboardLayout";
import Script from "next/script";
import { withSessionSsr } from "@/pages/api/auth/withSession";
import ImageUploadModal from "@/components/utils/UploadImageModal";
import {
  ProfileTab,
  ContactTab,
  AccountTab,
} from "@/components/DashboardLayout/ProfileTabs";

const Profile = ({ user }) => {
  async function checkIfFileExists(filePath) {
    try {
      const response = await fetch(filePath, { method: "HEAD" });
      return response.ok;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row page-titles mx-0">
          <div className="col-sm-6 p-md-0">
            <div className="welcome-text">
              <h4>Hi, welcome back!</h4>
              <p className="mb-0">Your business dashboard template</p>
            </div>
          </div>
        </div>
        {/* row */}

        <div className="row">
          <div className="col-xl-4">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <div className="my-profile">
                        <img
                          src= "/dashboard/images/profile/pic1.jpg"
                       
                          alt="profile-img"
                          className="rounded"
                        />

                        {/* Modal */}
                        <ImageUploadModal />
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#cameraModal"
                        >
                          <i className="fas fa-camera" aria-hidden="true" />
                        </a>
                      </div>
                      <h4 className="mt-3 font-w600 text-black mb-0 name-text">
                        {user.user}
                      </h4>
                      <span>{user.email}</span>
                      <p className="mb-0 mt-1">{user.loginID}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body">
                <div className="profile-tab">
                  <div className="custom-tab-1">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          href="#profileTab"
                          data-bs-toggle="tab"
                          className="nav-link active show"
                        >
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#contactTab"
                          data-bs-toggle="tab"
                          className="nav-link"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#accountTab"
                          data-bs-toggle="tab"
                          className="nav-link"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <ProfileTab />
                      <ContactTab />
                      <AccountTab />
                    </div>
                  </div>
                  {/* Modal */}
                  <div className="modal fade" id="replyModal">
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Post Reply</h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                          />
                        </div>
                        <div className="modal-body">
                          <form>
                            <textarea
                              className="form-control"
                              rows={4}
                              defaultValue={"Message"}
                            />
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger light"
                            data-bs-dismiss="modal"
                          >
                            close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Reply
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
  );
};

Profile.getLayout = function getLayout(page) {
  return (
    <>
      <DashboardLayout user={page.props.user}>{page}</DashboardLayout>
      <Script src="/dashboard/vendor/global/global.min.js"></Script>
      <Script src="/dashboard/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></Script>
      <Script src="/dashboard/vendor/chart.js/Chart.bundle.min.js"></Script>
      <Script src="/dashboard/vendor/peity/jquery.peity.min.js"></Script>
      <Script src="/dashboard/vendor/apexchart/apexchart.js"></Script>
      <Script src="/dashboard/js/dashboard/dashboard-1.js"></Script>
      <Script src="/dashboard/vendor/owl-carousel/owl.carousel.js"></Script>
      <Script src="/dashboard/js/custom.js"></Script>
      <Script src="/dashboard/js/deznav-init.js"></Script>
    </>
  );
};

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user;
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: user,
    },
  };
});

export default Profile;
