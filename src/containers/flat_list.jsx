import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';
import Flat from './flat';

class FlatList extends Component {

 // static defaultProps = { flats: [{
 //                                   "name": "Charm at the Steps of Montmartre",
 //                                   "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
 //                                   "price": 164,
  //                                  "priceCurrency": "EUR"
  //                               }]
  //                            };
  componentWillMount() {
    this.props.setFlats();
}

  render() {
      return (
        <div className="col-sm-7 flat-list">
         {this.props.flats.map( flat => {
           return <Flat flat={flat} key={flat.name}/>
          })}
        </div>
        );
    }
  }

  function mapDispatchToProps(dispatch) {

    return bindActionCreators(
      { setFlats: setFlats },
                dispatch
    );
  }

  function mapReduxStateToProps(reduxState) {
    return {

        flats: reduxState.flats
    }
  }

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
