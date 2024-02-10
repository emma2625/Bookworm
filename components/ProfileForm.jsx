"use client";
import { Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import React from "react";

const ProfileForm = () => {
  const { data: session, status } = useSession();

  return (
    <>
      {status == "loading" ? (
        <h3> Loading... </h3>
      ) : (
        <section>
          <Formik>
            {({ isSubmitting }) => {
              return (
                <Form className="grid grid-cols-1 md:grid-cols-2">
                  <div className="mb-3">
                    <Field type="text" className="border" />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </section>
      )}
    </>
  );
};

export default ProfileForm;
