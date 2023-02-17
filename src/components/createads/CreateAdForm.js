import React from "react";
import { useParams } from "react-router-dom";
import CreateMediaAdForm from "./CreateMediaAdForm";
import CreateTextAdForm from "./CreateTextAdForm";

const CreateAdForm = () => {
  const params = useParams();
  return (
    <>
      {params.adType === "media" ? <CreateMediaAdForm /> : <CreateTextAdForm />}
    </>
  );
};

export default CreateAdForm;
