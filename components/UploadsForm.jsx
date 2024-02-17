"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const UploadValidationSchema = Yup.object().shape({
  type: Yup.string()
    .required("Please select a type")
    .oneOf(
      ["landscape", "portrait"],
      "Your type must be either landscape or portrait"
    ),
  title: Yup.string().required("Please enter a title"),
  file: Yup.mixed()
    .required("Please select a file")
    .test(
      "fileFormat",
      "Only jpg, png, jpeg, and gif files are allowed",
      (value) => {
        const supportedFormat = ["jpg", "png", "jpeg", "gif"];
        // const fileExtArray = value.name.split('.');
        // const ext = fileExtArray.pop();
        return supportedFormat.includes(value.name.split(".").pop());
      }
    )
    .test("fileSize", "File size must be less 3mb", (value) => {
      if (value) {
        return value.size <= 3242880;
        /*
            Size is calculated in bytes
            1028 bytes ==  1kb
            1028kb ==  1mb
            1242880bytes =  1mb
        */
      }
    }),
});
const UploadsForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          type: "",
          title: "",
          file: "",
        }}
        validationSchema={UploadValidationSchema}
        onSubmit={async (values, { setSubmiting, resetForm }) => {
          const storageRef = "";
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="md:grid  md;grid-cols-2 gap-5">
            <div className="mb-4">
              <label htmlFor="type"> Orientation </label>
              <Field
                as="select"
                name="type"
                className="border w-full py-1 px-3 rounded-lg text-sm"
              >
                <option value=""></option>
                <option value="landscape"> Landscape </option>
                <option value="portrait"> Portrait </option>
              </Field>
              <ErrorMessage
                name="type"
                className="text-center text-red-600 font-bold text-xs"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="type"> Title </label>
              <Field
                name="title"
                className="border w-full py-1 px-3 rounded-lg text-sm"
              />
              <ErrorMessage
                name="title"
                className="text-center text-red-600 font-bold text-xs"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="type"> File </label>
              <input
                type="file"
                name="file"
                className="border w-full py-1 px-3 rounded-lg text-sm"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  console.log(file);
                  setFieldValue("file", file);
                }}
              />
              <ErrorMessage
                name="file"
                className="text-center text-red-600 font-bold text-xs"
              />
            </div>

            <div className="col-span-2 text-center">
              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-blue-600 rounded-lg py-2 px-16 text-white"
              >
                Update Profile
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UploadsForm;
