import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, updateStream } from '../../actions';
import StreamForm from './StreamForm';
import history from '../../history';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.updateStream(this.props.match.params.id, formValues);
    history.push('/');
  };

  render() {
    if (!this.props.stream) {
      // see mapStateToProps
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, 'title', 'description')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, routerProps) => {
  return { stream: state.streams[routerProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, updateStream })(
  StreamEdit,
);
