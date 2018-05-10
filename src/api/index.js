// import { REST_API } from '../config';
export default {
  flow: `/flowable/v1`,
  login: {
    token: `/uaa/oauth/token`,
    account: `/account/v1/account/users/current`
  },
}