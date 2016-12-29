import { h, Component } from 'preact'
import DangerButton from '../components/DangerButton.jsx'
import Loading from '../components/Loading.jsx'
import Recipe from './Recipe.jsx'
/** @jsx h */


export default class Main extends Component {
  constructor () {
    super()

    this.user = localStorage.getItem('user_id')

    this.state = {
      showRecipe: false,
      loading: !!this.user,
      recipe: undefined
    }

    this._showRecipe = this._showRecipe.bind(this)
  }

  componentDidMount () {
    if (this.user) {
      fetch(`/api/recipe?user=${this.user}`)
        .then((response) => response.json())
        .then((json) => this.setState({
          showRecipe: !!json.recipe,
          loading: false,
          recipe: json.recipe
        }))
        .catch(() => this._fetchUser())
    } else {
      this._fetchUser()
    }
  }

  _fetchUser () {
    fetch('/api/user')
      .then((response) => response.json())
      .then((json) => this.user = json.user)
      .then(() => localStorage.setItem('user_id', this.user))
  }

  _showRecipe () {
    this.setState({loading: true})

    fetch(`/api/recipe/new?user=${this.user}`)
      .then((response) => response.json())
      .then((json) => this.setState({
        showRecipe: true,
        loading: false,
        recipe: json.recipe
      }))
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
      overflowY: 'scroll',
      WebkitOverflowScrolling: 'touch'
    }

    let show = (
      <div style={center}>
        <DangerButton onClick={this._showRecipe} />
      </div>
    )

    if (this.state.showRecipe) {
      show = (<Recipe recipe={this.state.recipe} />)
    }

    return (
      <div style={wrapper}>
        {show}
        <Loading loading={this.state.loading}/>
      </div>
    )
  }
}
