import PropTypes from 'prop-types';
//import { useLocation } from 'react-router-dom'
import Button from './Button';

const Header = ({title, onAdd, showAdd}) => {
 //const location = useLocation()
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} 
        onClick= {onAdd}/>

    </header>

  )
}

Header.defaultProps = {
    title: 'Task Tracker', 
}

Header.propTypes = 
{
  title: PropTypes.string.isRequired,

}

// CSS in JS
// const HeadingStyle = 
// {
//   color: 'red', 
//   backgroundColor: 'black'
// }
// then in h1, do this: <h1 style={HeadingStyle}>

export default Header