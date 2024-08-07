import axios from 'axios';

export interface ErrorResponse {
    message: string;
    code: number;
}

const errorHandler = (error: any): ErrorResponse => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            const { data, status } = error.response;

            return {
                message: data?.message || 'Request failed with status code ' + status,
                code: data?.code || status,
            };
        }
        else if (error.request) {
            return {
                message: 'No response received from the server.',
                code: 0,
            };
        }
        else {
            return {
                message: 'Error setting up the request.',
                code: 0,
            };
        }
    } else {
        return {
            message: 'An unexpected error occurred.',
            code: 0,
        };
    }
};

export default errorHandler;
