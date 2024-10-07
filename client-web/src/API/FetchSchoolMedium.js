const FetchSchoolMedium = async () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    "https://shiksha-sanjivani-admin.onrender.com/getSchoolType",
    requestOptions
  );
  const result = await response.json();
  return result.data || [];
};

export default FetchSchoolMedium;
