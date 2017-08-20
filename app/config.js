// Sets the MongoDB Database options

module.exports = {

    mongolab:
    {
        name: "scotch-user-map-ec2",
        url: "mongodb://kgmean:QH1VEHEwFJzojRgggebG2ReDTLFKqRNnpD1JlZKcTIz8knm2oTaAJSsr2UhcsQyyZrT4d4s0ivU1pgFUGTmqfA==@kgmean.documents.azure.com:10255/?ssl=true&replicaSet=globaldb",
        port: 27017
    },

    local:
    {
        name: "scotch-user-map-local",
        url: "mongodb://localhost/MeanMapApp",
        port: 27017
    }

};
