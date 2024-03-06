import HttpService from "./http.service";

class GalleriesService extends HttpService {
    static getAllGalleries(searchTerm = "") {
        return this.request({
            method: "GET",
            url: `/api/galleries?search=${searchTerm}`,
        });
    }
    
    static getGalleryById(id) {
        return this.request({
            method: "GET",
            url: `/api/galleries/${id},`
        });
    }

    static createGallery(data) {
        return this.request({
            method: "POST",
            url: `/api/galleries`,
            data,
        });
    }

    static updateGallery(id, data) {
        return this.request({
            method: "PUT",
            url: `/api/galleries/${id}`,
            data
        });
    }

    static deleteGallery(id) {
        return this.request({
            method: "DELETE",
            url: `/api/galleries/${id}`,
        });
    }
}

export default GalleriesService;