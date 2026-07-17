"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
class ApiService {
    async request(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const ok = Math.random() > 0.1;
                if (ok) {
                    resolve(data);
                }
                else {
                    reject(new Error("Api Error"));
                }
            });
        });
    }
}
exports.ApiService = ApiService;
