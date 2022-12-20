import { baseUrl, axiosInstance } from './config';

export const getAdminPostlist = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/admin/tweets`);
    return res.data;
  } catch (error) {
    console.error('[Get AdminPostList failed]: ', error);
    throw error.response.data;
  }
};
