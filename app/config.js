// Sets the MongoDB Database options

module.exports = {

    mongolab:
    {
        name: "scotch-user-map-ec2",
        port: 27017
    },

    local:
    {
        name: "scotch-user-map-local",
        url: "mongodb://localhost/MeanMapApp",
        port: 27017
    }

};
