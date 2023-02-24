import React, { useState, useEffect } from "react";

import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import Script from "next/script";
import DataTable from "../../components/utils/Table";

export default function Transfer() {
  const [isLoading, setLoading] = useState(false);

  const bankDetails = {
    accountNumber: "012345678909876",
    bankName: "Miracle Bank",
    beneficiary: "MSME Co-operative",
    referenceNum: "jserlk23343p4mvefopkp3TLMLER4IP3MFF",
  };

  let sn = 0;
  const data = [];

  let Resp = [
    [
      "Tiger Nixon",
      "System Architect",
      "Edinburgh",
      "5421",
      "2011/04/25",
      "$320,800",
    ],
    [
      "Garrett Winters",
      "Accountant",
      "Tokyo",
      "8422",
      "2011/07/25",
      "$170,750",
    ],
    [
      "Ashton Cox",
      "Junior Technical Author",
      "San Francisco",
      "1562",
      "2009/01/12",
      "$86,000",
    ],
    [
      "Cedric Kelly",
      "Senior Javascript Developer",
      "Edinburgh",
      "6224",
      "2012/03/29",
      "$433,060",
    ],
    ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
    [
      "Brielle Williamson",
      "Integration Specialist",
      "New York",
      "4804",
      "2012/12/02",
      "$372,000",
    ],
    [
      "Herrod Chandler",
      "Sales Assistant",
      "San Francisco",
      "9608",
      "2012/08/06",
      "$137,500",
    ],
    [
      "Rhona Davidson",
      "Integration Specialist",
      "Tokyo",
      "6200",
      "2010/10/14",
      "$327,900",
    ],
    [
      "Colleen Hurst",
      "Javascript Developer",
      "San Francisco",
      "2360",
      "2009/09/15",
      "$205,500",
    ],
    [
      "Sonya Frost",
      "Software Engineer",
      "Edinburgh",
      "1667",
      "2008/12/13",
      "$103,600",
    ],
    [
      "Jena Gaines",
      "Office Manager",
      "London",
      "3814",
      "2008/12/19",
      "$90,560",
    ],
    [
      "Quinn Flynn",
      "Support Lead",
      "Edinburgh",
      "9497",
      "2013/03/03",
      "$342,000",
    ],
    [
      "Charde Marshall",
      "Regional Director",
      "San Francisco",
      "6741",
      "2008/10/16",
      "$470,600",
    ],
    [
      "Haley Kennedy",
      "Senior Marketing Designer",
      "London",
      "3597",
      "2012/12/18",
      "$313,500",
    ],
    [
      "Tatyana Fitzpatrick",
      "Regional Director",
      "London",
      "1965",
      "2010/03/17",
      "$385,750",
    ],
    [
      "Michael Silva",
      "Marketing Designer",
      "London",
      "1581",
      "2012/11/27",
      "$198,500",
    ],
    [
      "Paul Byrd",
      "Chief Financial Officer (CFO)",
      "New York",
      "3059",
      "2010/06/09",
      "$725,000",
    ],
    [
      "Gloria Little",
      "Systems Administrator",
      "New York",
      "1721",
      "2009/04/10",
      "$237,500",
    ],
    [
      "Bradley Greer",
      "Software Engineer",
      "London",
      "2558",
      "2012/10/13",
      "$132,000",
    ],
    [
      "Dai Rios",
      "Personnel Lead",
      "Edinburgh",
      "2290",
      "2012/09/26",
      "$217,500",
    ],
    [
      "Jenette Caldwell",
      "Development Lead",
      "New York",
      "1937",
      "2011/09/03",
      "$345,000",
    ],
    [
      "Yuri Berry",
      "Chief Marketing Officer (CMO)",
      "New York",
      "6154",
      "2009/06/25",
      "$675,000",
    ],
    [
      "Caesar Vance",
      "Pre-Sales Support",
      "New York",
      "8330",
      "2011/12/12",
      "$106,450",
    ],
    [
      "Doris Wilder",
      "Sales Assistant",
      "Sidney",
      "3023",
      "2010/09/20",
      "$85,600",
    ],
    [
      "Angelica Ramos",
      "Chief Executive Officer (CEO)",
      "London",
      "5797",
      "2009/10/09",
      "$1,200,000",
    ],
    ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
    [
      "Jennifer Chang",
      "Regional Director",
      "Singapore",
      "9239",
      "2010/11/14",
      "$357,650",
    ],
    [
      "Brenden Wagner",
      "Software Engineer",
      "San Francisco",
      "1314",
      "2011/06/07",
      "$206,850",
    ],
    [
      "Fiona Green",
      "Chief Operating Officer (COO)",
      "San Francisco",
      "2947",
      "2010/03/11",
      "$850,000",
    ],
    [
      "Shou Itou",
      "Regional Marketing",
      "Tokyo",
      "8899",
      "2011/08/14",
      "$163,000",
    ],
    [
      "Michelle House",
      "Integration Specialist",
      "Sidney",
      "2769",
      "2011/06/02",
      "$95,400",
    ],
    ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
    [
      "Prescott Bartlett",
      "Technical Author",
      "London",
      "3606",
      "2011/05/07",
      "$145,000",
    ],
    [
      "Gavin Cortez",
      "Team Leader",
      "San Francisco",
      "2860",
      "2008/10/26",
      "$235,500",
    ],
    [
      "Martena Mccray",
      "Post-Sales support",
      "Edinburgh",
      "8240",
      "2011/03/09",
      "$324,050",
    ],
    [
      "Unity Butler",
      "Marketing Designer",
      "San Francisco",
      "5384",
      "2009/12/09",
      "$85,675",
    ],
  ];

  if (Resp.length > 0) {
    Resp.forEach((val) => {
      const res = [
        (sn += 1),
        `${val[0]}`,
        `${val[1]}`,
        `${val[2]}`,
        `${val[3]}`,
        `${val[4]}`,
        `${val[5]}`,
        `${val[6]}`,
        `${val[7]}`,
      ];
      data.push(res);
    });
  }

  let columns = [
    { title: "name" },
    { title: "position" },
    { title: "office" },
    { title: "extn" },
    { title: "start_date" },

    {
      title: "Action",
      render: (data, type, row) => {
        return `
           
        <a href="#0"
        data-id="${row[8]}"
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
                    <DataTable data={data} columns={columns} />
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

Transfer.getLayout = function getLayout(page) {
  return (
    <>
      <DashboardLayout>{page}</DashboardLayout>
      <Script src="/dashboard/vendor/global/global.min.js"></Script>
      <Script src="/dashboard/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></Script>
      <Script src="/dashboard/vendor/chart.js/Chart.bundle.min.js"></Script>
      <Script src="/dashboard/vendor/peity/jquery.peity.min.js"></Script>
      <Script src="/dashboard/vendor/apexchart/apexchart.js"></Script>
      <Script src="/dashboard/js/dashboard/dashboard-1.js"></Script>
      <Script src="/dashboard/vendor/owl-carousel/owl.carousel.js"></Script>
      <Script src="/dashboard/js/custom.js"></Script>
      <Script src="/dashboard/js/deznav-init.js"></Script>
      <Script src="/dashboard/js/demo.js"></Script>
      <Script src="/dashboard/js/styleSwitcher.js"></Script>
    </>
  );
};
