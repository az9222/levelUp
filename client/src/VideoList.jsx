import React from 'react';

const ResultsList = (props) => (
  <div className="resultsList">
      {props.searchResults.map((result) => {
        return (
        <div className="single-result">
          <img className="video-thumbnail" src={result.snippet.thumbnails.default.url} alt="thumbnail" />
          <div className="video-title-description">
            <p className="video-title">{result.snippet.title}</p>
            <button className="save-button" onClick={(e, videoInfo) => props.saveResource(e, result.snippet)} >Save</button>
            <br />
            <p>Description: </p>
            {result.snippet.description}
            <br />
          </div>
        </div>
        )
      })}
  </div>
);

export default ResultsList;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const styles = {
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// };

// const ResultsList = (props) => (
//   const { classes } = props;
//   return (
//     {props.searchResults.map((result) => 
//     return (
//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={result.snippet.thumbnails.default.url} 
//           title="video thumbnail"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {result.snippet.title}
//           </Typography>
//           <Typography component="p">
//             {result.snippet.description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Save 
//         </Button>
//       </CardActions>
//     </Card>
//     )
//   )}
//   );
// )

// MediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(MediaCard);