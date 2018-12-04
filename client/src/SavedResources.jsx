// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const styles = theme => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// });

// function SimpleExpansionPanel(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading}>Math</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading}>Language Arts</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading}>Science</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading}>Social Studies</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//     </div>
//   );
// }

// SimpleExpansionPanel.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SimpleExpansionPanel);

import React from 'react';
import SavedList from './SavedList.jsx';
const axios = require('axios');

const SearchButton = (props) => (
  <button type="button" value="searchButton" onClick={props.onClickHomeButton} className="backToSearch">Back to Search</button>
)

class SavedResources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listResources: [],
      fontColor: 'blue',
    }
  this.deleteResource = this.deleteResource.bind(this);
  this.favoriteResource = this.favoriteResource.bind(this);
};

componentDidMount(){
  this.getListOfResources();
}

getListOfResources() {
  fetch('/savedResources')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    this.setState({
      listResources: data
    })
  })
  .catch((error) => {console.log(error)});
};

deleteResource(e, item) {
  e.preventDefault();
  alert(`${item.info.title} deleted`);
  axios.delete(`/savedResources/${item._id}`)
  .then((response) => {
    this.setState({
      listResources: response.data
    })
    // this.getListOfResources();
  })
  .catch((error) => {console.log(error)});
};

favoriteResource(e, title) {
  e.preventDefault();
  this.setState({
    fontColor: '#B01C1C'
  });
};

render(){
  return (
    <div>
      <p className="header-title">Saved Resources</p>
      <SearchButton onClickHomeButton={this.props.onClickHomeButton} />
      <SavedList savedItem = {this.state.listResources.length > 0 ? this.state.listResources : []} deleteResource = {this.deleteResource} favoriteResource={this.favoriteResource} defaultColor = {this.state.fontColor} />
    </div>
    )
  }
};

export default SavedResources;
