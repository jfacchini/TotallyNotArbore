import React, {Component, PropTypes} from 'react';
import styles from './ShareDetail.css';
import { Card, CardContent, CardHeader, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Text from 'material-ui/Text'
import FontAwesome from 'react-fontawesome';
import IconButton from 'material-ui/IconButton';
import { LinearProgress } from 'material-ui/Progress';
import ShareFiles from './ShareFiles2'
import Share from '../models/Share'

class ShareDetail extends Component {
  render() {
    const share = this.props.share

    const avatar = (
      <Avatar alt={share.author.name} src={share.author.avatar} />
    )
    const header = (
      <CardHeader
        avatar={avatar}
        title={share.metadata.title}
        subhead={share.metadata.description} />
    )

    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          {header}
          <div className={styles.actions}>
            <IconButton>
              <FontAwesome name='pause' />
            </IconButton>
            <IconButton>
              <FontAwesome name='stop' />
            </IconButton>
            <IconButton
              accent={share.favorite}
              onClick={this.props.onFavoriteClickGenerator(share.id)}>
              <FontAwesome name='heart' />
            </IconButton>
          </div>
        </div>
        <LinearProgress mode="determinate" value={share.progress}/>
        <div className={styles.stats}>
          <Text>1.28 Go of 2.67 Go (47.7%)</Text>
          <Text>3/4 peers</Text>
          <Text>1.03Mo/s</Text>
        </div>
        <Text type="subheading" component="h2">Description</Text>
        <Text component="p">{share.metadata.message}</Text>
        <ShareFiles share={share} />
      </div>
    );
  }
}

ShareDetail.propTypes = {
  share: PropTypes.instanceOf(Share).isRequired,
  onFavoriteClickGenerator: PropTypes.func.isRequired
};
ShareDetail.defaultProps = {};

export default ShareDetail;
