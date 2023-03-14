import React, { useState, useEffect } from "react";

import DashboardLayout from "../../../components/DashboardLayout/DashboardLayout";
import Script from "next/script";
import DataTable from "../../../components/utils/Table";
import { useForm } from "react-hook-form";
import { withSessionSsr } from "@/pages/api/auth/withSession";

export default function GetHistory() {
  const [data, setData] = useState([]);

  const [activeTab, setActiveTab] = useState(1);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("/api/voucherpay/fetchhistory");
  //     const newData = await res.json();
  //     setData(newData);
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        let menu = localStorage.getItem("asgard");
        if (menu != null) {
          let obj = JSON.parse(menu);
          
          let d = obj.vID;
    
          const data = {
            customer_id: d,
          };
          console.log(data)

          try {
            const response = await fetch("/api/voucherpay/fetchhistory", {
              method: "POST",
              headers: {
                token: process.env.VOUCHER_PAY_PK_LIVE,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({  data }),
            });
            const resp = await response.json();

            setData(resp);
         
          } catch (error) {
            console.error(error.response);
          }
        } else {
          Router.push("../login");
        }
      }
    };

    fetchData();
  }, []);

  const tableData = [];
 

  if (data.length > 0) {
    data.forEach((val) => {
      const res = [
        `${val.trans_type} `,
        `${val.transaction_id}`,
        `${val.source_acct}`,
        `${val.destination_acct}`,
        `${val.transaction_amount}`,
        `${val.initial_balance}`,
        `${val.current_balance}`,
        `${val.created}`        
      ];
      tableData.push(res);
    });
  }
 

  function fetchUser(user_id) {
    console.log(user_id)
  }

  let columns = [
    { title: "Transaction Type" },
    { title: "Transaction ID" },
    { title: "Source" },
    { title: "Destination" },
    { title: "Amount" },
    { title: "Initial Balance" },
    { title: "Current Balance" },
    { title: "Date" },
    {
      title: "Action",
      render: (data, type, row) => {
        
        return `           
        <a href="#0"  
        data-id="${row[2]}"  
         class="btn btn-primary test"
         data-bs-toggle="offcanvas"
         data-bs-target="#area-detail"
         aria-controls="area-detail">
        Details
     </a>       
        `;
      },
    },
  ];

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header d-sm-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="fs-20 text-black">Transaction History</h4>
                  </div>
                  <div>
                    <button
                      onClick={() => setActiveTab(1)}
                      className="fs-20   btn btn-xs btn-primary light me-1"
                    >
                      All
                    </button>
                    <button
                      onClick={() => setActiveTab(2)}
                      className="fs-20   btn btn-xs btn-primary light me-1"
                    >
                      Single Customer
                    </button>
                  </div>
                </div>
                {activeTab === 1 ? (
                  <div className="card-body">
                    <div className="table-responsive">
                      <DataTable
                        data={tableData}
                        columns={columns}
                        key={tableData.sn}
                      />
                    </div>
                  </div>
                ) : (
                  <SingleCustomerForm />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SingleCustomerForm() {
  const [isLoading, setLoading] = useState(false);
  const [Resp, setResp] = useState([]);
  console.log(Resp);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await fetch("/api/voucherpay/fetchhistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    const resp = await response.json();

    if (resp.status === false) {
      setResp({
        respType: "Error",
        message: resp.message,
      });
    } else if (resp.status >= 400) {
      setResp({
        respType: "Error",
        message: resp.message,
      });
    } else if (!resp) {
      setResp({
        respType: "Error",
        message: "Undefined Error",
      });
    }
    setLoading(false);
  };
  return (
    <div className="card-body  ">
      <div className="basic-form">
        <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
          {Resp.respType === "Success" ? (
            <div className="alert alert-primary   fade show">
              <strong>Success!</strong> {Resp.message}
            </div>
          ) : Resp.respType === "Error" ? (
            <div className="alert alert-danger   fade show">
              <strong>Error!</strong> {Resp.message}
            </div>
          ) : (
            ""
          )}
          <div className="form-group">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <span className="input-group-text">Customer ID</span>
              </div>
              <input
                {...register("customer_id", {
                  required: "Email is required",
                })}
                type="text"
                placeholder="Voucher@voucherpay.io"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mt-4 align-items-center">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-end">
                {isLoading === true ? (
                  <button
                    className="fs-20 btn btn-xs btn-primary light me-1"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm mx-2"
                      role="status"
                      aria-hidden="true"
                    >
                      {" "}
                    </span>{" "}
                    Fetch
                  </button>
                ) : (
                  <button
                    href="javascript:void(0);"
                    className="fs-20 btn btn-xs btn-primary light me-1"
                  >
                    Fetch
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
 


GetHistory.getLayout = function getLayout(page) { 
  return (
    <>
      <DashboardLayout   >{page}</DashboardLayout>
      <Script src="/dashboard/vendor/global/global.min.js"></Script>
      <Script src="/dashboard/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></Script>
      <Script src="/dashboard/vendor/chart.js/Chart.bundle.min.js"></Script>
      <Script src="/dashboard/vendor/peity/jquery.peity.min.js"></Script>
      <Script src="/dashboard/vendor/apexchart/apexchart.js"></Script>
      <Script src="/dashboard/js/dashboard/dashboard-1.js"></Script>
      <Script src="/dashboard/vendor/owl-carousel/owl.carousel.js"></Script>
      <Script src="/dashboard/js/custom.js"></Script>
    </>
  );
};
 
// export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
//   const user = req.session.user;
  
//   if (!user) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       user: user,
//     },
//   };
// });
