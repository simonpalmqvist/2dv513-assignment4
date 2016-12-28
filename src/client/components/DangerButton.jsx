import { h, Component } from 'preact'
/** @jsx h */

export default class DangerButton extends Component {

  constructor () {
    super()

    this._handleClick = this._handleClick.bind(this)
    this._animationDone = this._animationDone.bind(this)
    this.state = {
      clicked: false
    }
  }

  _handleClick () {
    this.setState({clicked: true})
  }

  _animationDone () {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick()
    }
  }

  render () {
    const buttonStyle = {
      position: 'relative',
      display: 'block',
      width: '200px',
      height: '200px',
      backgroundColor: 'transparent',
      border: 'none',
      margin: '0 auto'
    }

    const buttonTopStyle = {
      position: 'absolute',
      top: '0%',
      left: '8%',
      width: '84%',
      height: '84%',
      borderRadius: '50%',
      backgroundColor: 'rgb(208, 50, 8)',
      transition: 'transform 0.2s',
      border: 'none',
      willChange: 'transform'
    }

    const buttonBodyStyle = {
      position: 'absolute',
      top: '8%',
      left: '8%',
      width: '84%',
      height: '84%',
      borderRadius: '50%',
      backgroundColor: 'rgb(154, 38, 7)'
    }

    const buttonBottomStyle = {
      position: 'absolute',
      top: '5%',
      left: '5%',
      width: '90%',
      height: '90%',
      borderRadius: '50%',
      backgroundColor: 'rgb(180, 180, 180)'
    }

    const buttonBottomShadowStyle = {
      position: 'absolute',
      top: '8%',
      left: '5%',
      width: '90%',
      height: '90%',
      borderRadius: '50%',
      backgroundColor: 'rgb(75, 75, 75)'
    }

    if (this.state.clicked) {
      buttonTopStyle.transform = 'translateY(9%)'
    }

    return (
      <div style={buttonStyle}>
        <div style={buttonBottomShadowStyle} />
        <div style={buttonBottomStyle} />
        <div style={buttonBodyStyle} />
        <button
          style={buttonTopStyle}
          onClick={this._handleClick}
          onTransitionEnd={this._animationDone}
          />
      </div>
    )
  }
}
