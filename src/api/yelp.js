import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer uLEocktWyIvZTmBNeqIaNOTQ7Wzu3gJyJP8VmLG4mAcQbA_o6GbyorwjzcLZqYL0LWW-cALwummlV4j_NI_qAIs1_lsPtOkdjKTgQBYUBgnofE3qxecwAWwPaw8VXnYx'
  }
});
