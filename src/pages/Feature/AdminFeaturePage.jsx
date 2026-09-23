
import React, { useEffect, useState } from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DataTable from "datatables.net-dt";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeature,
  deleteFeature,
} from "../../redux/ActionCreators/FeatureActionCreators";

const AdminFeaturePage = () => {
  const [data, setData] = useState([]);

  const FeatureStateData = useSelector(
    (state) => state.FeatureStateData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeature());
  }, [dispatch]);

  useEffect(() => {
    if (FeatureStateData) {
      setData(FeatureStateData);
    }
  }, [FeatureStateData]);

  useEffect(() => {
    if (data.length === 0) return;

    const timer = setTimeout(() => {
      const table = new DataTable("#myTable");

      return table;
    }, 100);

    return () => {
      clearTimeout(timer);

      const tableElement = document.querySelector("#myTable");

      if (tableElement && DataTable.isDataTable("#myTable")) {
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
          const tableElement = document.querySelector("#myTable");

          if (
            tableElement &&
            DataTable.isDataTable("#myTable")
          ) {
            new DataTable("#myTable").destroy();
          }

          dispatch(deleteFeature({ id }));

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
              Feature

              <Link to="/admin/feature/create">
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
                    <th>ID</th>
                    <th>Name</th>
                    <th>Icon</th>
                    <th>Short Description</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id || index}>

                      <td>{item.id}</td>

                      <td>{item.name}</td>

                      <td>
                        <span
                          className="fs-1"
                          dangerouslySetInnerHTML={{
                            __html: item.icon,
                          }}
                        />
                      </td>

                      <td>{item.shortDescription}</td>

                      <td>
                        {item.status ? "Active" : "Inactive"}
                      </td>

                      <td>
                        <Link
                          to={`/admin/feature/update/${item.id}`}
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

export default AdminFeaturePage;
