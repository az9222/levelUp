import React from 'react';

const ResultsList = (props) => {
  return (
    <div className="resultsList">
      {props.searchResults.map((result) => {
        return (
        <div className="single-result">
          <img className="video-thumbnail" 
            src={props.searchType === "video" ? result.snippet.thumbnails.default.url : result.volumeInfo.imageLinks.thumbnail} 
            alt="thumbnail" />
          <div className="video-title-description">
            <p className="list-title">{props.searchType === "video" ? result.snippet.title : `${result.volumeInfo.title} by ${result.volumeInfo.authors[0]}`}</p>
            <button className="save-button" 
              onClick={ (e, videoInfo) =>{
                if (props.searchType === "video") {
                  props.saveResource(e, result.snippet);
                } else {
                  props.saveResource(e, result.volumeInfo)
                }
              }} >
            Save</button>
            <br />
            <p>Description: </p>
            {props.searchType === "video" ? result.snippet.description : result.volumeInfo.description}
            <br />
          </div>
        </div>
        )
      })}
    </div>
  );
}

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