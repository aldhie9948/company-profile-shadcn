import { base } from "$app/paths";
import axios from "axios";

const api = axios.create({
	baseURL: base,
	withCredentials: true
});

// Interceptor untuk menangani error global
api.interceptors.response.use(
	(response) => response, // Jika sukses, kembalikan response
	(error) => {
		if (axios.isAxiosError(error)) {
			const status = error.response?.status;
			const message = error.response?.data?.message || "Terjadi kesalahan pada server.";

			switch (status) {
				case 400:
					return Promise.reject({ type: "BAD_REQUEST", message });
				case 401:
					return Promise.reject({ type: "UNAUTHORIZED", message: "Akses ditolak, silakan login." });
				case 403:
					return Promise.reject({ type: "FORBIDDEN", message: "Anda tidak memiliki izin." });
				case 404:
					return Promise.reject({ type: "NOT_FOUND", message: "Data tidak ditemukan." });
				case 500:
					return Promise.reject({ type: "SERVER_ERROR", message: "Kesalahan pada server." });
				default:
					return Promise.reject({ type: "UNKNOWN_ERROR", message });
			}
		}

		return Promise.reject({ type: "NETWORK_ERROR", message: "Koneksi internet bermasalah." });
	}
);

export default api;
