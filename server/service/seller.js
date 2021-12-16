const sellerDAO = require('../dao/seller');

class SellerService {

    getSeller (id) {
        return sellerDAO.getSeller(id);
    }

    updateSeller (id, body) {
        return sellerDAO.updateSeller(id, body)
    }

    createSeller (user, sellerInfo) {
        const {username, name, lastName, description, phoneNumber, address} = sellerInfo

        return sellerDAO.createSeller(user._id, username, name, lastName, description, phoneNumber, address)
    }

    getSellerWithToken (id) {
        return sellerDAO.getSellerWithToken(id)
    }
}

module.exports = new SellerService();