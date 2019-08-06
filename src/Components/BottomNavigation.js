import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import HobbiesIcon from '@material-ui/icons/Schedule';
import ForumIcon from '@material-ui/icons/Forum';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    paddingBottom: '16px',
    background: '#F0F0F0',
  }, 
});

const  iconStyles = makeStyles( {
  root: {
    color: "#959595",
    "&$selected": {
      color: "#FFB100"
    }
  },
  selected: {}
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const iconClasses=  iconStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
    console.log(newValue);
    if (newValue === "work"){
      console.log ("hello");
      }
  }

  

  return (
    
    <div>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction classes={iconClasses} component={Link} to='/' label="About" value="About" icon={<PersonIcon />} />
      <BottomNavigationAction classes={iconClasses} component={Link} to='/work' label="Work" value="work" icon={<WorkIcon />}  />
      <BottomNavigationAction classes={iconClasses} component={Link} to='/education'label="Edu" value="education" icon={<SchoolIcon />} />
      <BottomNavigationAction classes={iconClasses} component={Link} to='/contact' label="Contact" value="contact" icon={<ForumIcon />} />
    </BottomNavigation>
    </div>
  );
}

