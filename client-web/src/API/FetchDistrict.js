const FetchDistrict = async (state) => {
  console.log(state);
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    `https://shiksha-sanjivani-admin.onrender.com/getDistricts?state=${state || null}`,
    requestOptions
  );
  const result = await response.json();
  return result.data || [];
};

export default FetchDistrict;
