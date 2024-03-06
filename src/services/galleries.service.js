import HttpService from "./http.service";

class GalleriesService extends HttpService {
    static getAllGalleries(searchTerm = "") {
        return this.request({
            method: "GET",
            url: `/galleries?search=${searchTerm}`,
        });
    }
    
    static getGalleryById(id) {
        return this.request({
            method: "GET",
            url: `/galleries/${id},`
        });
    }

    static createGallery(data) {
        return this.request({
            method: "POST",
            url: `galleries`,
            data,
        });
    }

    static updateGallery(id, data) {
        return this.request({
            method: "PUT",
            url: `galleries/${id}`,
            data
        });
    }

    static deleteGallery(id) {
        return this.request({
            method: "DELETE",
            url: `/galleries/${id}`,
        });
    }
}

export default GalleriesService;