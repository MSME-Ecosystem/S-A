import React, { useState, useEffect } from "react";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import Script from "next/script";
import DataTable from "@/components/utils/Table";
import { withSessionSsr } from "@/pages/api/auth/withSession";

export default function GetCustomers({ initialData }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/voucherpay/fetchCustomers");
      const newData = await res.json();
      setData(newData);
    }
    fetchData();
  }, []);

  let sn = 0;
  const tableData = [];

  if (data) {
    data.forEach((val) => {
      const res = [
        (sn += 1),
        `${val.customer_id}`,
        `${val.first_name}`,
        `${val.mobile_number}`,
        `${val.email}`,
        `${val.address}`,
        `${val.bvn}`,
        `${val.nin}`,
      ];
      tableData.push(res);
    });
  }

  let columns = [
    { title: "SN" },
    { title: "Customer ID" },
    { title: "First Name" },
    { title: "Last Name" },
    { title: "Mobile Number" },
    { title: "Email Address" },
    { title: "BVN" },
    { title: "NIN" },
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
                    <h4 className="fs-20 text-black">Recent Transactions</h4>
                  </div>
                  <div>
                    <h4 className="fs-20   btn btn-xs btn-primary light me-1">
                      All
                    </h4>
                    <h4 className="fs-20   btn btn-xs btn-primary light me-1">
                      <i className="fas fa-share fa-rotate-180"></i>
                    </h4>
                    <h4 className="fs-20   btn btn-xs btn-primary light me-1">
                      <i className="fa fa-share" />
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <DataTable data={tableData} columns={columns} key={tableData.sn} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

 


GetCustomers.getLayout = function getLayout(page) { 
  return (
    <>
      <DashboardLayout user={page.props.user} >{page}</DashboardLayout>
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
 
export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user;
  console.log("serversideuser", user)
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
