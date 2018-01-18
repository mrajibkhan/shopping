import React, { Component }  from "react";
import { connect } from "react-redux";
// import { addCatalog } from "./js/actions/catalogActions";

// const mapDispatchToProps = dispatch => {
//     return {
//         addCatalog: catalogs => dispatch(addCatalog(catalogs))
//     };
// };

const mapStateToProps = state => {
    console.log("Catalogs: ", state);
    return { catalogs: state.catalogs }
};

class ConnectedList extends Component {
  // componentDidMount() {
  //   fetch('/catalogs')
  //     .then(res => res.json())
  //     .then(catalogs => catalogs.map(c => (this.props.addCatalog(c))));
  // }

  render() {
    const { catalogs } = this.props
    return (
        <ul className="list-group list-group-flush">
            {catalogs.map(el => (
                <li className="list-group-item" key={el.catalogName}>
                    {el.catalogName}
                </li>
            ))}
        </ul>
    );
  }
}

const CatalogList = connect(mapStateToProps)(ConnectedList);

export default CatalogList;