import { getStore } from 'modules/store';
import config from 'config';

export default class UploadFile {
  static validate(file, schema) {
    return true;
  }
  static async uploadFromRequest(
    path,
    request,
    schema,
    onSuccess,
    onError,
  ) {
    try {
      this.validate(request.file, schema);
    } catch (error) {
      request.onError(error);
      onError(error);
      return;
    }

    let token = getStore().getState().auth.jwt_token;

    const files = request.file;

    const formData = new FormData();
    formData.append('file', files);

    let response = await fetch(
      `${config.storageApi}/upload`,
      {
        headers: {
          Authorization: token,
          path: path + files.name.replace(/ /g, ''),
        },
        method: 'POST',

        body: formData,
      },
    );

    let data = await response.json();
    request.onSuccess();

    onSuccess(data);
  }
  static getPath(file) {
    let token = getStore().getState().auth.jwt_token;

    // let res = fetch(
    //   `${config.storageApi}/fn/get-download-url/${file.key}`,
    //   {
    //     headers: {
    //       Authorization: token,
    //     },
    //   },
    // );
    // let newToken = res.json();
    if (file && file.token) {
      return `${config.storageApi}/file/${file.key}?token=${file.token}`;
    }
    return '';
  }

  static async deleteFile(file) {
    let token = getStore().getState().auth.jwt_token;
    let response = await fetch(
      `${config.storageApi}/file/${file.key}?token=${file.token}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'DELETE',
      },
    );
  }
}
