import axios from 'axios';

export const payment = (paymentData) => {
  return axios.post(`${process.env.REACT_APP_AWS_URL}/checkout`, { ...paymentData });
};
