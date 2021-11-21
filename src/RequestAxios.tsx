import axios from "axios";

export default (url: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
