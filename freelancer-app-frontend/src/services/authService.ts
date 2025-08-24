import app from "./httpService";

export function getOtp(data) {
  return app.post("/user/get-otp", data).then(({ data }) => data.data);
  // then callback function for : res.data => data.data
}
