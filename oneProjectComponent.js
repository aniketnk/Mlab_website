'use strict';

class OneProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }

  componentDidMount() {
    var details = this.props.details && JSON.parse(this.props.details)
    details.pptPreview = details && (details.pptLink.split('view')[0] + "preview")
    this.setState(details)
    this.setState({ isLoaded: true })
  }
  render() {
    if (this.state.isLoaded)
      return (
        <div>
          <h3>{this.props.id || ''}. {this.state.title || 'No title'}</h3>
          <div className="tab">
            <p><b>Description: </b><br />{this.state.description || 'No description'}</p>
            <p><b> Domain: </b> <br />{this.state.domain || 'No domain specified'}</p >
            <p><b> Presentation Link: </ b><br /><a target="_blank" href={this.state.pptLink}>{this.state.pptLink || 'No link specified'}</a></p>
            <div className="ppt-container">
              <iframe src={this.state.pptPreview} width="640" height="360"></iframe>
            </div>
          </div>
          <hr />
        </div >
      );
    else
      return (
        <p> Not loaded yet.</p >
      );
  }
}

var runReact = () => {
  document.querySelectorAll('.oneProject')
    .forEach(domContainer => {
      // const commentID = parseInt(domContainer.dataset.commentid, 10);
      const details = domContainer.dataset.details
      const number = domContainer.dataset.id
      ReactDOM.render(<OneProject details={details} id={number} />, domContainer);
    });
}
runReact()