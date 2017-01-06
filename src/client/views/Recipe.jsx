import { h, Component } from 'preact'
import PaperList from '../components/PaperList.jsx'
import RecipeHeader from '../components/RecipeHeader.jsx'
/** @jsx h */

export default class Recipe extends Component {

  constructor () {
    super()
  }

  render () {
    const { recipe } = this.props

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 0px'
    }

    const headerStyle = {
      position: 'fixed',
      backgroundColor: 'rgb(208, 50, 8)',
      boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
      top: 0,
      left: 0,
      right: 0,
      height: 60,
      zIndex: 100
    }

    const ingredients = recipe.ingredients
      .map((i) => `${i.amount} ${i.amount_type} ${i.name}`.replace(/undefined /g, ''))

    const instructions = recipe.instructions
      .map((i) => `${i.step}. ${i.description}`)

    return (
      <div style={containerStyle}>
        <div style={headerStyle} />
        <RecipeHeader
          name={recipe.name}
          tag={recipe.tag}
          image={recipe.image} />
        <PaperList items={ingredients} title='Ingredienser' />
        <PaperList items={instructions} title='Instruktioner' />
      </div>
    )
  }
}
