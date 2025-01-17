// Test in :
// https://functions.chain.link/playground
const apiResponse = await Functions.makeHttpRequest({url: `https://userclub.opendatasoft.com/api/explore/v2.1/catalog/datasets/les-eruptions-volcaniques-dans-le-monde/records?limit=20&refine=country%3A%22United%20States%22&refine=date%3A%221980%2F05%22`});
if (apiResponse.error) {console.error(apiResponse.error);throw Error('Request failed');}
const { data } = apiResponse;
console.log('API response data:');
const latRaw = data.results[0].coordinates.lat;
console.log(latRaw);
const latScaled = latRaw*100;
console.log(latScaled);
return Functions.encodeInt256(latScaled);
// Format the Function script with the following 
// tool to add quotes for each line for Solidity:
// https://onlinetexttools.com/add-quotes-to-lines

// Try on a single line with no comments:
// ""