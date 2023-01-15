import { mockUserData } from '../../utiles/utiles';
export default {
    $get: jest.fn().mockResolvedValue({ data: mockUserData }),
    $post: jest.fn().mockResolvedValue({ data: mockUserData }),
    $put: jest.fn().mockResolvedValue({ data: mockUserData }),
    $delete: jest.fn().mockResolvedValue({ data: mockUserData }),
};
