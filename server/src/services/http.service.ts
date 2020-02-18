import _ from 'lodash';
import request from 'request';
import {from, Observable} from 'rxjs';

function post(options: any): Observable<any> {
    const headers = {
        Accept: 'application/json'
    };
    options.method = 'POST';
    options.headers = _.merge(headers, options.headers);

    return from(new Promise((resolve, reject) => {
        request(options, (error: any, response: any, body: any) => {
            if (error) {
                reject(error);
            }
          // tslint:disable-next-line:no-console
            console.log(
                'Response: ' + response.statusCode + ' ' + response.statusMessage
            );
            resolve(body);
        });
    }));
}

function get(options: any): Observable<any> {
    const headers = {
        Accept: 'application/json'
    };
    options.method = 'GET';
    options.headers = _.merge(headers, options.headers);

    return from(new Promise((resolve, reject) => {
        request(options, (error: any, response: any, body: any) => {
            if (error) {
                reject(error);
            }
          // tslint:disable-next-line:no-console
            console.log(
                'Response: ' + response.statusCode + ' ' + response.statusMessage
            );
            resolve(body);
        });
    }));
}

function put(options: any): Observable<any> {
    const headers = {
        Accept: 'application/json'
    };
    options.method = 'PUT';
    options.headers = _.merge(headers, options.headers);

    return from(new Promise((resolve, reject) => {
        request(options, (error: any, response: any, body: any) => {
            if (error) {
                reject(error);
            }
          // tslint:disable-next-line:no-console
            console.log(
                'Response: ' + response.statusCode + ' ' + response.statusMessage
            );
            resolve(body);
        });
    }));
}

export {
    post,
    get,
    put
};

// hostname: 'google.com',
//     path: '/recaptcha/api/siteverify?secret=' + secret + '&response=' + DataService.AppConstants.token,
//     method: 'POST'
