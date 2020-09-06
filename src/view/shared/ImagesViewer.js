import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { i18n } from 'i18n';
import { Carousel } from 'antd';
import UploadFile from '../../modules/shared/upload/upload';
import ImagesViewerWrapper from 'view/shared/styles/ImagesViewerWrapper';

class ImagesViewer extends Component {
  render() {
    if (!this.props.value || !this.props.value.length) {
      return <p>{i18n('imagesViewer.noImage')}</p>;
    }

    return (
      <ImagesViewerWrapper>
        <Carousel autoplay vertical effect="fade">
          {this.props.value.map((item, index) => {
            return (
              <img
                key={index}
                src={UploadFile.getPath(
                  item.key,
                  item.token,
                )}
                alt={item.name}
              />
            );
          })}
        </Carousel>
      </ImagesViewerWrapper>
    );
  }
}

ImagesViewer.propTypes = {
  value: PropTypes.array,
};

export default ImagesViewer;
