import UserService from '../services/userService.js';

class AuthController {
  async login() {

  }

  async logout() {

  }

  async registration(request, response, next) {
    try {
      const {email, password} = request.body;
      const userData = await UserService.registration(email, password);

      response.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

      return response.status(200).json(userData);
    } catch (error) {
      console.log(error);
    }
  }

  async refresh() {

  }

  async activate() {

  }
}

export default new AuthController;
