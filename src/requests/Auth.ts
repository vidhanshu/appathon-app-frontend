import {
  CREATE_USER,
  DELETE_USER,
  FORGOT_PASSWORD,
  GET_USER,
  LOGIN_USER,
  LOGOUT_USER,
  RESET_PASSWORD,
  UPDATE_EMAIL,
  UPDATE_NAME,
  UPDATE_PASSWORD,
  UPDATE_USERNAME,
  ax,
} from '../configs';
import {LoginDataType, SignUpDataType} from '../@types';
import {
  checkForValidEmail,
  checkForValidPassword,
  checkForValidUsername,
  sendResponse,
} from '../utils';

export const createUser = async (user_data: SignUpDataType) => {
  try {
    const res = await ax.post(CREATE_USER, user_data);
    return sendResponse(false, 'User created', res.data);
  } catch (error: any) {
    return sendResponse(
      true,
      'Either email is already taken or username is already taken please try with different details',
      null,
    );
  }
};

export const LoginUser = async (data: LoginDataType) => {
  if (
    (checkForValidEmail(data.email) || checkForValidUsername(data.email)) &&
    checkForValidPassword(data.password)
  ) {
    try {
      const res = await ax.post(LOGIN_USER, data);
      return sendResponse(false, 'User logged in', res.data);
    } catch (error: any) {
      if (error.response.status === 401) {
        return sendResponse(true, 'Invalid Credentials', null);
      }
      return sendResponse(true, 'Something went wrong', null);
    }
  } else {
    return sendResponse(true, 'Please fill the valid data', null);
  }
};

export const LogoutUser = async (token: string) => {
  try {
    if (!token) {
      return sendResponse(true, 'Something went wrong', null);
    }
    const res = await ax.post(
      LOGOUT_USER,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return sendResponse(false, 'User logged out', res.data);
  } catch (error: any) {
    if (error.response.status === 401) {
      return sendResponse(true, 'You are not authorized', null);
    }
    return sendResponse(true, 'Something went wrong', null);
  }
};

export const UpdateUser = async (data: any, token: string | null) => {
  try {
    if (!token || !data) {
      return sendResponse(true, 'Something went wrong', null);
    }
    const ListOfUpdatedFields = [];
    if (data.username) {
      if (!checkForValidUsername(data.username)) {
        return sendResponse(true, 'Invalid Username', null);
      }
      const {data: userData} = await ax.patch(
        UPDATE_USERNAME,
        {username: data.username},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (userData.error) {
        return sendResponse(true, userData.code, null);
      }
      ListOfUpdatedFields.push('username');
    }
    if (data.email) {
      if (!checkForValidEmail(data.email)) {
        return sendResponse(true, 'Invalid Email', null);
      }
      const {data: userData} = await ax.patch(
        UPDATE_EMAIL,
        {email: data.email},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (userData.error) {
        return sendResponse(true, userData.code, null);
      }
      ListOfUpdatedFields.push('email');
    }
    if (data.password) {
      if (!checkForValidPassword(data.password)) {
        return sendResponse(
          true,
          'Invalid Password : Password must be 8 characters long, must contain at least one uppercase letter, one lowercase letter, one number and one special character',
          null,
        );
      }
      const {data: userData} = await ax.patch(
        UPDATE_PASSWORD,
        {password: data.password},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (userData.error) {
        return sendResponse(true, userData.code, null);
      }
      ListOfUpdatedFields.push('password');
    }
    if (data.name) {
      const {data: userData} = await ax.patch(
        UPDATE_NAME,
        {name: data.name},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (userData.error) {
        return sendResponse(true, userData.code, null);
      }
      ListOfUpdatedFields.push('name');
    }
    if (ListOfUpdatedFields.length === 0) {
      return sendResponse(true, 'Nothing to update', null);
    }
    if (
      ListOfUpdatedFields.length === 1 &&
      ListOfUpdatedFields[0] === 'password'
    ) {
      return sendResponse(false, 'Password Updated Successfully', null);
    }
    const {data: userData} = await ax.get(GET_USER(data.id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return sendResponse(
      false,
      ListOfUpdatedFields.join(', ') + ' Updated Successfully',
      userData,
    );
  } catch (error: any) {
    console.error(error);
    return sendResponse(true, 'Something went wrong', null);
  }
};

export const ForgotPassword = async (email: string) => {
  try {
    const res = await ax.post(FORGOT_PASSWORD, {
      email,
    });
    return sendResponse(false, 'Email sent', res.data);
  } catch (error: any) {
    return sendResponse(true, error.message, null);
  }
};
export const ResetPassword = async (code: string, password: string) => {
  try {
    const res = await ax.post(RESET_PASSWORD, {
      code,
      password,
    });
    return sendResponse(false, 'Password Reset Successfully', res.data);
  } catch (error: any) {
    console.error(error);
    return sendResponse(
      true,
      'Either your token might have expired or you are providing invalid token\nMake sure to copy entire token from mail',
      null,
    );
  }
};

export const DeleteUser = async (token: string) => {
  try {
    const res = await ax.delete(DELETE_USER, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return sendResponse(false, 'User deleted', res.data);
  } catch (err) {
    console.error(err);
    return sendResponse(true, 'Something went wrong', null);
  }
};
