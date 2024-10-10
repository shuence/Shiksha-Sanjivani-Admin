const FetchReasons = async (id) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    `https://shiksha-sanjivani-admin.onrender.com/getReason` + (id ? `?reason=${id}` : ""),
    requestOptions
  );
  const result = await response.json();
  return result.data || [];
};

export default FetchReasons;
