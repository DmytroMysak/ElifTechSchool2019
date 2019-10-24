import { models } from '../models/index.js';

const { users_tokens: usersTokensModel } = models;

const createUserToken = ({ userId, refreshToken }) => usersTokensModel
  .create({ user_id: userId, refresh_token: refreshToken, expiration_date: new Date(Date.now()).toISOString() });

const getUsersTokens = () => usersTokensModel.findAll({ raw: true });

const getTokenByUserId = (userId) => usersTokensModel.findOne({
  where: { user_id: userId },
});

const updateUserRefreshToken = ({ userId, refreshToken }) => usersTokensModel.update(
  { refresh_token: refreshToken },
  {
    where: { user_id: userId },
  },
);

const deleteUserToken = (id) => usersTokensModel.destroy({
  where: { id },
});

export default {
  createUserToken,
  getUsersTokens,
  getTokenByUserId,
  deleteUserToken,
  updateUserRefreshToken,
};
