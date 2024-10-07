export const CurrentStudentServices = {
  getData(id) {
    console.log(id);
    return fetch(
      `https://shiksha-sanjivani-admin.onrender.com/getSchoolWiseStudents?schoolId=${id}&status=3`
    )
      .then((res) => res.json())
      .then((res) => {
        return res.data;
      });
  },

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getCustomersXLarge(id) {
    return Promise.resolve(this.getData(id));
  },

  // getCustomers(params) {
  //   const queryParams = params
  //     ? Object.keys(params)
  //         .map(
  //           (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
  //         )
  //         .join("&")
  //     : "";

  //   return fetch("https://shiksha-sanjivani-admin.onrender.com/getSportsComplex" + queryParams).then(
  //     (res) => res.json()
  //   );
  // },
};
