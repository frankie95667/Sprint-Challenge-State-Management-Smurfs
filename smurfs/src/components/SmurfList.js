import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSmurf } from "../actions/smurfActions";

export default function SmurfList() {
  const smurfs = useSelector(state => state.smursReducer);
  const dispatch = useDispatch();

  return (
    <>
      {smurfs.map(smurf => {
        return (
          <div key={smurf.id}>
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <button onClick={() => dispatch(deleteSmurf(smurf.id))}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}
