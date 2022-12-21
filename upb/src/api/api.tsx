import axios from "axios";

export default axios.create({
    baseURL: "https://upb-webpage-default-rtdb.firebaseio.com/",
});
