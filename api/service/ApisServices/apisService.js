const config = require('./config');
const axios = require('axios');
const apisController = require('../../controllers/apisController');

const apiService = {
    response: "",
    accessToken: "",
    apiname: "",
    page: 1,
    pageSize: 25,
};

const call = async (params) => {
    if (params.apisname in config)
    {
        try {
            apiService.apiname = params.apisname;
            apiService.page = params.page ?? (params.pageSize) ? params.pageSize * (params.page-1) : 1;
            apiService.pageSize = params.pageSize ?? 25;
            await initCall();
        } catch(error)
        {

        }
        console.log("RETURN RESPONSE " + apiService.response);
        return apiService.response;
    } else {
        throw new Error('api name doesn\'t exist');
    }
};

const initCall = async () => {
    if(config[apiService.apiname].authRequired)
    {        
        await authToken();
        await getData();
    } else {
        await getData();
    }
};

const authToken = () => {
    const call = axios({
        url: config[apiService.apiname].authUrl,
        method: config[apiService.apiname].authType,
      }).then(function (response) {
        // handle success
        let data = response;
        config[apiService.apiname].authResponseKey.forEach(element => {
            data = data[element];
        });
        apiService.accessToken = data;
        console.log('SETTING BEARER', apiService.accessToken);
    })
    .catch(function (error) {
        // handle error
        //console.log(error);
    })
    .finally(function () {
        // always executed
    });

    return call;
};

const getData = () => {
    const headers = {};
    let data = config[apiService.apiname].postData ?? "";
    if(data.includes("limit"))
    {
        data = data.replace("limit", "limit "+apiService.pageSize);
    }
    if(data.includes("offset"))
    {
        data = data.replace("offset", "offset "+apiService.page);
    }
console.log(data);
    if(config[apiService.apiname].headers)
    {
        Object.keys(config[apiService.apiname].headers).map((key) => {
            if(key === "Authorization")
            {
                headers[key] = (config[apiService.apiname].headers[key].includes("accessToken")) ? 
                    config[apiService.apiname].headers[key].replace("accessToken", apiService.accessToken) 
                    : config[apiService.apiname].headers[key]; 
            } else {
                headers[key] = config[apiService.apiname].headers[key];
            }
        });
    }
console.log("HEADERS "+ JSON.stringify(headers));

    const call = axios({
        url: config[apiService.apiname].uriPath,
        method: config[apiService.apiname].callType,
        headers,
        data,
      }).then(function (response) {
        // handle success
        console.log("SUCCESS GETDATA");
        apiService.response = response.data;
    })
    .catch(function (error) {
        // handle error
        console.log("ERROR GETDATA " + error);
        apiService.response = error;
    })
    .finally(function () {
        // always executed
    });
    return call;
};

const handleResponse = (res) => {

};

module.exports =  call;