import { h, Component } from 'preact'
/** @jsx h */

export default class PaperList extends Component {
  render () {
    const {items, title} = this.props
    const last = items.length -1

    const listStyle = {
      boxSizing: 'border-box',
      width: '100%',
      maxWidth: '600px',
      backgroundColor: 'rgb(255, 252, 250)',
      padding: '10px 0 0 20px',
      paddingRight: 0,
      margin: '0 0 20px 0',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.4), inset -10px 0 50px rgba(0, 0, 0, 0.2)'
    }

    const ulStyle = {
      margin: 0,
      padding: 0
    }

    const list = items.map((item, i) => {
      const liStyle = {
        listStyleType: 'none',
        borderBottom: '1px solid rgba(5, 230, 230, 0.4)',
        padding: '20px 10px 20px 0',
        zIndex: 3
      }

      if(i === last) {
        liStyle.borderBottom = 'none',
        liStyle.paddingBottom = '25px'
      }

      return (<li style={liStyle}>{item}</li>)
    })

    return (
      <div style={listStyle}>
        <h3 style={{fontSize: '1.8em'}}>{title}</h3>
        <ul style={ulStyle}>
          {list}
        </ul>
      </div>
    )
  }
}
