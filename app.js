const { default: axios } = require("axios");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const BASE_URL =
    "https://putatoeapp-k3snqinenq-uc.a.run.app/v1/api/getbanner";
  const data = {
    subservice_id: null,
    service_id: 6,
  };
  const result = await axios.post(BASE_URL, data);
  console.log(result.data);
  res.render("index", { banners: Object.values(result.data)[0] });
});

app.listen(3000, () => {
  console.log("App started in port 3000");
});
