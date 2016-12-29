import { h, Component } from 'preact'
/** @jsx h */

export default class RecipeHeader extends Component {
  render () {
    const {name, image, tag} = this.props

    const headStyle = {
      position: 'relative',
      width: '100%',
      height: '350px',
      margin: '0 0 -80px 0',
      outline: 'hidden'
    }

    const recipeImage = {
      position: 'absolute',
      top: 60,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundImage: `url('${image}')`,
      backgroundSize: 'cover',
      display: 'block',
      filter: 'blur(3px)',
      zIndex: -10
    }

    const recipeInfo = {
      display: 'absolute',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '80px 20px 20px 20px',
      zIndex: 3
    }

    return (
      <div style={headStyle}>
        <div style={recipeImage} />
        <div style={{
          backgroundColor: 'rgba(240, 240, 240, 0.5)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -2
        }} />
        <div style={{
          backgroundColor: 'rgb(215, 215, 215)',
          position: 'absolute',
          boxShadow: '0 -2px 2px rgba(0, 0, 0, 0.1)',
          left: 0,
          right: 0,
          height: 30,
          bottom: -20,
          zIndex: -1
        }} />
        <div style={recipeInfo}>
          <h2 style={{fontSize: '2.2em', textShadow: '1px 1px 1px rgba(20, 20, 20, 0.7)'}}>{name}</h2>
          <span style={{fontSize: '1.2em', fontWeight: 100, textShadow: '1px 1px 1px rgba(20, 20, 20, 0.7)'}}>”{tag}”</span>
        </div>
      </div>
    )
  }
}
