import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDone, MdOutlineClose } from "react-icons/md";

function Delete({ accId }) {
  const [showDelete, setShowDelete] = useState(false);

  const deleteRequest = async () => {
    try {
      const req = await axios({
        method: "DELETE",
        url: `http://localhost:3000/api/delete/${accId}`,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="delete-option">
      <button onClick={() => setShowDelete(!showDelete)}>Close Account</button>
      {showDelete && (
        <div className="delete-option-text" id="box">
          <p>Are you sure?</p>
          <div className="delete-icons">
            <MdOutlineClose />
            <Link to="/">
              <MdOutlineDone onClick={deleteRequest} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Delete;
