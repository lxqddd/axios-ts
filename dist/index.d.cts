type Method = 'get' | 'GET' | 'delete' | 'Delete' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH';
interface AxiosRequestConfig {
    url: string;
    method: Method;
    data?: any;
    params?: any;
}

declare function axios(config: AxiosRequestConfig): void;

export { axios as default };
