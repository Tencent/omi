import axios from "axios";

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com/";

export default function () {
  return new (class {
    data = {
      topics: [],
      count: 0
    };
    decrement = () => {
      this.data.count--;
    };
    increment = () => {
      this.data.count++;
    };

    increment1 = () => {
      this.data.topics.push(1);
    };

    getDoubleCount = () => {
      return this.data.count * 2;
    };

    getTopics = () => {
      return axios
        .get("posts")
        .then(response => {
          if (response.statusText === "OK") {
            this.data.topics = response.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    };

  })();
}
