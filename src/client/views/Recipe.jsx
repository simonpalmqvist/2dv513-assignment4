import { h, Component } from 'preact'
/** @jsx h */

export default class Recipe extends Component {

  constructor () {
    super()
  }

  render () {
    const headStyle = {
      position: 'relative',
      width: '100%',
      height: '350px',
      margin: '0 0 -60px 0',
      outline: 'hidden',
      textShadow: '0px 0px 2px rgba(20, 20, 20, 0.7)'
    }

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 20px'
    }

    const listStyle = {
      boxSizing: 'border-box',
      width: '100%',
      maxWidth: '600px',
      backgroundColor: 'rgb(255, 252, 250)',
      padding: '10px 0 0 20px',
      paddingRight: 0,
      margin: '0 20px 20px 20px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.4), inset -10px 0 50px rgba(0, 0, 0, 0.2)'
    }

    const ulStyle = {
      margin: 0,
      padding: 0
    }

    const liStyle = {
      listStyleType: 'none',
      borderBottom: '1px solid rgba(5, 230, 230, 0.4)',
      padding: '20px 10px 20px 0',
      zIndex: 3
    }

    const recipeImage = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundImage: `url('img/pasta-carbonara.jpg')`,
      backgroundSize: 'cover',
      display: 'block',
      filter: 'blur(7px)',
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
      <div style={containerStyle}>
        <div style={{
          position: 'fixed',
          backgroundColor: 'rgb(208, 50, 8)',
          boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          zIndex: 100
        }} />
        <div style={headStyle}>
          <div style={recipeImage} />
          <div style={{
            backgroundColor: 'rgba(240, 240, 240, 0.5)',
            position: 'absolute',
            top: 0,
            left: -20,
            right: -20,
            bottom: 0,
            zIndex: -2
          }} />
          <div style={{
            backgroundColor: 'rgb(215, 215, 215)',
            position: 'absolute',
            boxShadow: '0 -2px 2px rgba(0, 0, 0, 0.1)',
            left: -20,
            right: -20,
            height: 30,
            bottom: -20,
            zIndex: -1
          }} />
          <div style={recipeInfo}>
            <h2 style={{fontSize: '2.0em'}}>Pasta Carbonara</h2>
            <span style={{fontSize: '1.1em'}}>”Passar perfekt till en flaska rödtjut!”</span>
          </div>
        </div>
        <div style={listStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>400g Spaghetti</li>
            <li style={liStyle}>4 ägg</li>
            <li style={liStyle}>2 dl grädde</li>
            <li style={liStyle}>1 paket bacon</li>
            <li style={liStyle}>1 lök</li>
            <li style={liStyle}>Salt</li>
            <li style={liStyle}>Peppar</li>
          </ul>
        </div>
        <div style={listStyle}>
          <ol style={ulStyle}>
            <li style={liStyle}>Skär bacon i strimlor och finhacka löken.</li>
            <li style={liStyle}>Koka upp vatten med salt och släng sedan i pastan.</li>
            <li style={liStyle}>Stek baconet & löken gyllenbrun, blanda sedan i grädden & äggvitan. Smaksätt med salt & peppar.</li>
            <li style={liStyle}>Blanda ihop allting och servera med de kvarvarande äggulorna på.</li>
          </ol>
        </div>
      </div>
    )
  }
}
