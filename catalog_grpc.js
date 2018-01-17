var PROTO_PATH = __dirname + '/protos/catalog.proto';
var async = require('async');
var grpc = require('grpc');

var catalog = grpc.load(PROTO_PATH);
var client = new catalog.CatalogService('localhost:50051',
    grpc.credentials.createInsecure());


function getCatalogs(callback) {
    var call = client.getCatalogs(new catalog.Empty());
    var data = [];
    var error = null;
    call.on('data', function(catalogs) {
        console.log('Found catalogs: ', catalogs);
        //callback(null, catalogs);
        data.push(catalogs);
        console.log('data: ', data);
    });
    call.on('status', function(status) {
        // process status
        console.log('Status: ', status);
    });
    call.on('error', function(err) {
        console.log('error: ', err);
        error = err;
    });


    call.on('end', function() {
      console.log("END CALLED");
      callback(error, data)
    });
}

function getCatalogByName(callback) {
    client.getCatalogByName({catalogName: "Flowers", productName: ""}, function(err, response) {
      console.log('Response:', response, " Err: ", err);
    });
}

function main() {
    async.series([
        getCatalogs,
        getCatalogByName
    ]);
}

if (require.main === module) {
    main();
}

exports.getCatalogs = getCatalogs;
exports.getCatalogByName = getCatalogByName;
