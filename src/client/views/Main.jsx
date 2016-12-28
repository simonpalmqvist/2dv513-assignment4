import { h, Component } from 'preact'
import DangerButton from '../components/DangerButton.jsx'
import Recipe from './Recipe.jsx'
/** @jsx h */

class Loading extends Component {

  render () {
    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgb(208, 50, 8)',
      transition: 'transform 0.3s',
      transformOrigin: 'top',
      transform: 'scaleY(0)',
      willChange: 'transform'
    }

    if (this.props.loading) {
      style.transform = 'scaleY(1)'
    }

    return <div style={style}></div>
  }
}

export default class Main extends Component {

  constructor () {
    super()

    this.state = {
      showRecipe: true,
      loading: false
    }

    this._showRecipe = this._showRecipe.bind(this)
  }

  _showRecipe () {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.setState({
        showRecipe: true,
        loading: false
      })
    }, 500)

  }

  render () {
    const center = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      padding: 0,
      margin: 0
    }

    const wrapper = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'scroll'
    }

    let show = (
      <div style={center}>
        <DangerButton onClick={this._showRecipe} />
      </div>
    )

    if (this.state.showRecipe) {
      show = (<Recipe />)
    }

    return (
      <div style={wrapper}>
        {show}
        <Loading loading={this.state.loading}/>
      </div>
    )
  }
}
