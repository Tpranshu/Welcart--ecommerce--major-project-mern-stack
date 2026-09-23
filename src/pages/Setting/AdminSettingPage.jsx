
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import AdminSideBar from "../../components/Admin/AdminSideBar";

import { getSetting, createSetting, updateSetting } from "../../redux/ActionCreators/SettingActionCreators";
import { ToastContainer, toast } from 'react-toastify';

import RichTextEditor from "../../rte/RichTextEditor"
import { createStructuredContent } from "../../rte/richTextEditorBridge"


const AdminSettingPage = () => {
  let editorRefPrivacyPolicy = useRef(null)
  let editorRefTermsAndConditions = useRef(null)
  let editorRefRefundPolicy = useRef(null)

  let [privacyPolicy, setPrivacyPolicy] = useState("")
  let [termsAndConditions, setTermsAndConditions] = useState("")
  let [refundPolicy, setRefundPolicy] = useState("")


  const [data, setData] = useState({
    siteName: "",
    map1: "",
    map2: "",
    address: "",
    email: "",
    phone: "",
    whatsapp: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  });

  const SettingStateData = useSelector(
    (state) => state.SettingStateData
  );

  let dispatch = useDispatch();

  useEffect(() => {

    dispatch(getSetting());

  }, [dispatch]);

  function getInputData(e) {
    let { name, value } = e.target
    setData({ ...data, [name]: value })

  }
  function postData(e) {
    e.preventDefault()
    let items = {
      ...data,
      privacyPolicy: privacyPolicy,
      termsAndConditions: termsAndConditions,
      refundPolicy: refundPolicy
    }
    if (SettingStateData.length)
      dispatch(updateSetting({ ...items }))
    else
      dispatch(createSetting({ ...items }))

    toast("Record Has Been Updated!!!")
  }


  function syncDocument(documentModel, nextHtml, option) {
    const resolvedHtml = nextHtml !== undefined ? nextHtml : renderHTML(documentModel);
    if (option === "privacyPolicy")
      setPrivacyPolicy(resolvedHtml)
    else if (option === "termsAndConditions")
      setTermsAndConditions(resolvedHtml)
    else
      setRefundPolicy(resolvedHtml)
  }

  useEffect(() => {
    (() => {
      dispatch(getSetting())
      if (SettingStateData.length) {
        setData({ ...data, ...SettingStateData[0] })
        setTimeout(() => {
          syncDocument(createStructuredContent(""), SettingStateData[0].privacyPolicy ?? "", "privacyPolicy");
          syncDocument(createStructuredContent(""), SettingStateData[0].termsAndConditions ?? "", "termsAndConditions");
          syncDocument(createStructuredContent(""), SettingStateData[0].refundPolicy ?? "", "refundPolicy");
        }, 500)
      }
    })()
  }, [SettingStateData.length])

  return (
    <>
      <ToastContainer />
      <div className="container-fluid my-3">
        <div className="row">

          <div className="col-md-3">
            <AdminSideBar />
          </div>

          <div className="col-md-9">

            <h2 className="bg-primary text-light text-center p-2">Setting</h2>
            <form onSubmit={postData} >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Site Name</label>
                  <input type="text" name="siteName" value={data.siteName} onChange={getInputData} placeholder="Site Name" className="form-control border-primary" />

                </div>

                <div className="col-md-6 mb-3">
                  <label>Email Address</label>
                  <input type="email" name="email" value={data.email} onChange={getInputData} placeholder="Email Address" className="form-control border-primary" />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Phone Number</label>
                  <input type="text" name="phone" value={data.phone} onChange={getInputData} placeholder="Phone Number" className="form-control border-primary" />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Whatsapp Number</label>
                  <input type="text" name="whatsapp" value={data.whatsapp} onChange={getInputData} placeholder="Whatsapp Number" className="form-control border-primary" />
                </div>

                <div className="col-md-12 mb-3">
                  <label>Address</label>
                  <input type="text" name="address" value={data.address} onChange={getInputData} placeholder="Address" className="form-control border-primary" />
                </div>

                <div className="col-md-12 mb-3">
                  <label>Map1</label>
                  <input type="url" name="map1" value={data.map1} onChange={getInputData} placeholder="Map1" className="form-control border-primary" />
                </div>

                <div className="col-md-12 mb-3">
                  <label>Map2</label>
                  <input type="url" name="map2" value={data.map2} onChange={getInputData} placeholder="Map2" className="form-control border-primary" />
                </div>

                <div className="col-md-12 mb-3">
                  <label>Facebook Profile URL</label>
                  <input type="url" name="facebook" value={data.facebook} onChange={getInputData} placeholder="Facebook Profile URL" className="form-control border-primary" />
                </div>

                <div className="col-md-12 mb-3">
                  <label>Twitter Profile URL</label>
                  <input type="url" name="twitter" value={data.twitter} onChange={getInputData} placeholder="Twitter Profile URL" className="form-control border-primary" />
                </div>


                <div className="col-md-12 mb-3">
                  <label>Instagram Profile URL</label>
                  <input type="url" name="instagram" value={data.instagram} onChange={getInputData} placeholder="Instagram Profile URL" className="form-control border-primary" />
                </div>


                <div className="col-md-12 mb-3">
                  <label>Linkedin Profile URL</label>
                  <input type="url" name="linkedin" value={data.linkedin} onChange={getInputData} placeholder="Linkedin Profile URL" className="form-control border-primary" />
                </div>

                <div className="col-md-12 mb-3">
                  <label>Youtube Profile URL</label>
                  <input type="url" name="youtube" value={data.youtube} onChange={getInputData} placeholder="Youtube Profile URL" className="form-control border-primary" />
                </div>

                <div className='col-12 mb-3'>
                  <label>Privacy Policy</label>
                  <RichTextEditor
                    ref={editorRefPrivacyPolicy}
                    className="editor-host border border-primary"
                    value={privacyPolicy}
                    onChange={(nextHtml, editor) => syncDocument(editor.getJSON(), nextHtml, "privacyPolicy")}
                    style={{ minHeight: 380 }}
                  />
                </div>

                <div className='col-12 mb-3'>
                  <label>Terms And Conditions</label>
                  <RichTextEditor
                    ref={editorRefTermsAndConditions}
                    className="editor-host border border-primary"
                    value={termsAndConditions}
                    onChange={(nextHtml, editor) => syncDocument(editor.getJSON(), nextHtml, "termsAndConditions")}
                    style={{ minHeight: 380 }}
                  />
                </div>

                <div className='col-12 mb-3'>
                  <label>Refund Policy</label>
                  <RichTextEditor
                    ref={editorRefPrivacyPolicy}
                    className="editor-host border border-primary"
                    value={refundPolicy}
                    onChange={(nextHtml, editor) => syncDocument(editor.getJSON(), nextHtml, "refundPolicy")}
                    style={{ minHeight: 380 }}
                  />
                </div>

                <div className="col-12 mb-3">
                  <button className="btn btn-primary w-100" >Submit</button>
                </div>


              </div>

            </form>


          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSettingPage;
