import { h, Component } from 'preact'
/** @jsx h */

export default class Loading extends Component {

  render () {
    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgb(208, 50, 8)',
      transition: 'transform 1.3s',
      transformOrigin: 'top',
      transform: 'scaleY(0)',
      willChange: 'transform',
      zIndex: 500
    }

    if (this.props.loading) {
      style.transitionDuration = 0.3
      style.transform = 'scaleY(1)'
    }

    return <div style={style}></div>
  }
}
