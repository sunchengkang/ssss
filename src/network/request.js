import axios from "axios"
import store from "../store"

export function request(config, success, sb) {
    const instance1 = axios.create({
        baseURL: "https://www.easy-mock.com/mock/5d27ed6f9c978750370f4c14/logs/",
        timeout: 5000
    });

    instance1.interceptors.request.use(
        function (config) {
            store.state.xflag = true;
            return config;
        }, function (err) {

        }
    );

    instance1.interceptors.response.use(
        function (res) {
            store.state.xflag = false;
            return res.data;
        }, function (err) {

        }
    );


    instance1(config).then(function (res) {
        success(res);
    }).catch(function (err) {
        sb(err);
    });

}