import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, Modal } from 'antd';
import Errors from 'modules/shared/error/errors';
import ImagesUploaderWrapper from '../styles/ImagesUploaderWrapper';
import { i18n } from 'i18n';
import UploadFile from '../../../modules/shared/upload/upload';
class ImagesUploader extends Component {
  state = {
    loading: false,
    previewVisible: false,
    previewImage: '',
  };

  schema = () => {
    return {
      ...this.props.schema,
      image: true,
    };
  };

  value = () => {
    const { value } = this.props;
    if (!value) {
      return [];
    }

    return Array.isArray(value) ? value : [value];
  };

  fileList = () => {
    return this.value().map((item, index) => ({
      uid: index,
      name: item.originalname,
      status: 'done',
      url: UploadFile.getPath(item.key, item.token),
    }));
  };

  handleCancel = () =>
    this.setState({ previewVisible: false });

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url,
      previewVisible: true,
    });
  };

  handleSuccess = (file) => {
    this.setState({ loading: false });
    this.props.onChange([...this.value(), file]);
  };

  handleError = (error) => {
    this.setState({ loading: false });
    Errors.showMessage(error);
  };

  handleRemove = (id) => {
    this.props.onChange(null);
    this.setState({
      loading: false,
      previewVisible: false,
      previewImage: '',
    });
  };

  handleChange = (file) => {
    if (!file || !file.file || !file.file.status) {
      return;
    }
    if (file.file.status === 'removed') {
      this.handleRemove(file.file.uid);
    } else {
      this.setState({ loading: true });
    }
  };

  validate = (file) => {
    try {
      return UploadFile.validate(file, this.schema());
    } catch (error) {
      this.handleError(error);
      return false;
    }
  };

  render() {
    const { previewVisible, previewImage } = this.state;

    const { max } = this.props;

    const uploadButton = (
      <div>
        <Icon
          type={this.state.loading ? 'loading' : 'plus'}
        />
        <div className="ant-upload-text">
          {i18n('fileUploader.upload')}
        </div>
      </div>
    );

    return (
      <ImagesUploaderWrapper>
        <Upload
          accept="image/*"
          fileList={this.fileList()}
          listType="picture-card"
          customRequest={(request) => {
            UploadFile.uploadFromRequest(
              this.props.path,
              request,
              this.schema(),
              (file) => {
                this.handleSuccess(file);
              },
              (error) => {
                this.handleError(error);
              },
            );
          }}
          onChange={this.handleChange}
          onPreview={this.handlePreview}
          beforeUpload={this.validate}
        >
          {max && this.fileList().length >= max
            ? null
            : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img
            alt={previewImage}
            style={{ width: '100%' }}
            src={previewImage}
          />
        </Modal>
      </ImagesUploaderWrapper>
    );
  }
}

ImagesUploader.propTypes = {
  path: PropTypes.string.isRequired,
  max: PropTypes.number,
  schema: PropTypes.shape({
    size: PropTypes.number,
  }),
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default ImagesUploader;
