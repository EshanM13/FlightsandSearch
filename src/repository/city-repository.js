const { City } = require ('./models/city.js');

class cityrepo {
    async createCity ({name}){
        try {
            const city = await City.create({name});
            return city;
        }
        catch(error){
            throw (error)
        }
    }

    async deleteCity({cityId}){
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
        }
        catch(error){
            throw(error);
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        }
        catch(error){
            throw(error);
        }
    }

    async updateCity(cityId, data){
        try{
            await City.update(data, {
                where: {
                    id: cityId
                }
            }
            );
            return city;  
        }
        catch(e){
            throw(e);

        }
    }
}

module.exports = {
    cityrepo
};