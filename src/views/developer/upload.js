import React from 'react';
import { PostData } from '../../services/AuthPost';
import Alert from '../statics/alert';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      image: false,
      cv: false,
      alert: false,
      success: false,
      message: '',
    };
  }

  imageHandler = e => {
    const file = e.target.files[0];
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.setState({ image: !this.state.image });
        PostData('/api/developer/upload/image', { image: reader.result }).then(
          result => {
            if (result.status === 1) {
              this.setState({
                alert: true,
                success: true,
                message: result.message,
                image: false,
              });
            } else {
              this.setState({
                alert: true,
                message: result.errors.email,
                image: false,
              });
            }
          }
        );
      };
      reader.onerror = error => reject(error);
    });
  };
  cvHandler = e => {
    const file = e.target.files[0];
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.setState({ cv: !this.state.cv });
        PostData('/api/developer/upload/cv', { cv: reader.result }).then(
          result => {
            if (result.status === 1) {
              this.setState({
                alert: true,
                success: true,
                message: result.message,
              });
            } else {
              this.setState({ alert: true, message: result.error });
            }
            this.setState({ cv: !this.state.cv });
          }
        );
      };
      reader.onerror = error => reject(error);
    });
  };

  render() {
    const { loading, image, cv, alert, success, message } = this.state;
    return (
      <div>
        <div className="w3-container">
          <Alert
            display={alert}
            onClick={() => {
              this.setState({ alert: false });
            }}
            message={message}
            success={success}
          />
          <form>
            <div className="row">
              <div className="col-lg-6">
                <span className="pf-title">Profile Picture</span>
                <div className="pf-field">
                  <input
                    type="file"
                    onChange={this.imageHandler}
                    name="image"
                    className="w3-input w3-border"
                  />
                  {image ? <i className="la la-spinner la-spin" /> : ''}
                </div>
              </div>
              <div className="col-lg-6">
                <span className="pf-title">Upload Cv</span>
                <div className="pf-field">
                  <input
                    type="file"
                    onChange={this.cvHandler}
                    name="cv"
                    className="w3-input w3-border"
                  />
                  {cv ? <i className="la la-spinner la-spin" /> : ''}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Upload;
