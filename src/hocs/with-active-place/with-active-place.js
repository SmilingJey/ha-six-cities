import React, {PureComponent} from 'react';

const withActivePlace = (Component) => {
  class WithActivePlace extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activePlace: null,
      };
      this.handlerActivatePlace = this.handlerActivatePlace.bind(this);
    }

    render() {
      const {activePlace} = this.state;
      return <Component
        {...this.props}
        activePlace={activePlace}
        onActivatePlace={this.handlerActivatePlace}
      />;
    }

    handlerActivatePlace(activePlace) {
      this.setState({activePlace});
    }
  }

  return WithActivePlace;
};

export default withActivePlace;
