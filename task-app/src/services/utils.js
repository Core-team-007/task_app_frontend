const config = {
   serviceUrl: 'http://localhost:8080'
}

export function createUrl(path) {
    return `${config.serviceUrl}${path}`;
}