import React, { useEffect, useState } from "react";
import FetchState from "../../../API/FetchState";
import FetchDistrict from "../../../API/FetchDistrict";

const AddTaluka = () => {
  const [stateName, setStateName] = useState([]);
  const [DistrictName, setDistrictName] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [talukaName, setTalukaName] = useState("");

  useEffect(() => {
    FetchState().then((res) => {
      setStateName(res);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        state: selectedState,
        district: selectedDistrict,
        taluka: talukaName,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://localhost:9999/addTalukas",
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      if (result.rcode === 200) {
        console.log("Taluka added successfully");
        setSelectedState("");
        setSelectedDistrict("");
        setTalukaName("");
      } else {
        console.error("Failed to add taluka");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Add Taluka</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Select State:</span>
          <select
            className="mt-1 p-2 w-full border rounded-md"
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              FetchDistrict(e.target.value).then((res) => {
                setDistrictName(res);
              });
            }}
            required
          >
            <option value="">Select State</option>
            {stateName.map((item, index) => (
              <option key={index} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Select District:</span>
          <select
            className="mt-1 p-2 w-full border rounded-md"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            required
          >
            <option value="">Select District</option>
            {DistrictName.map((item, index) => (
              <option key={index} value={item._id}>
                {item.district}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Taluka Name:</span>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            value={talukaName}
            onChange={(e) => setTalukaName(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Add Taluka
        </button>
      </form>
    </div>
  );
};

export default AddTaluka;