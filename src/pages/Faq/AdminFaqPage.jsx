import React, { useEffect, useState } from "react";

import AdminSideBar from "../../components/Admin/AdminSideBar";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import DataTable from "datatables.net-dt";

import { useDispatch, useSelector } from "react-redux";

import {
  getFaq,
  deleteFaq,
} from "../../redux/ActionCreators/FaqActionCreators";

const AdminFaqPage = () => {
  const [data, setData] = useState([]);

  const FaqStatData = useSelector(
    (state) => state.FaqStateData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFaq());
  }, [dispatch]);

  useEffect(() => {
    if (FaqStatData) {
      setData(FaqStatData);
    }
  }, [FaqStatData]);

  useEffect(() => {
    if (data.length === 0) return;

    let timer = setTimeout(() => {
      if (!DataTable.isDataTable("#myTable")) {
        new DataTable("#myTable");
      }
    }, 100);

    return () => {
      clearTimeout(timer);

      if (DataTable.isDataTable("#myTable")) {
        new DataTable("#myTable").destroy();
      }
    };
  }, [data]);

  function deleteRecord(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ms-2",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure you want to delete that record?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (DataTable.isDataTable("#myTable")) {
            new DataTable("#myTable").destroy();
          }

          dispatch(deleteFaq({ id }));

          setData((prevData) =>
            prevData.filter((x) => x.id !== id)
          );

          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your data has been deleted.",
            icon: "success",
          });
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your data is safe :)",
            icon: "error",
          });
        }
      });
  }

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <AdminSideBar />
          </div>

          <div className="col-md-9">
            <h2 className="bg-primary text-light text-center p-2">
              Faq

              <Link to="/admin/faq/create">
                <i className="bi bi-plus text-light float-end"></i>
              </Link>
            </h2>

            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="myTable"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id || index}>
                      <td>{item.id}</td>

                      <td>{item.question}</td>

                      <td>{item.answer}</td>

                      <td>
                        {item.status ? "Active" : "Inactive"}
                      </td>

                      <td>
                        <Link
                          to={`/admin/faq/update/${item.id}`}
                          className="btn btn-primary"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </Link>
                      </td>

                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            deleteRecord(item.id)
                          }
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminFaqPage;
