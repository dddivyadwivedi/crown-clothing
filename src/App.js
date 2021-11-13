import React from 'react';
import './App.css';
import {  Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SigninAndSignup from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth , createUserProfile } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
  this.unsubscribeFromAuth =   auth.onAuthStateChanged( async userAuth =>{

      //this.setState({currentUser: user});
      if(userAuth){
        const userRef =  createUserProfile(userAuth);
        userRef.onSnapshot(snapshot =>{
          this.setState({currentUser: {
            id : snapshot.id,
            ...snapshot.data()
          }
        },()=>{
          console.log(this.state);
        }  )
        });

      }
     this.setState({currentUser : userAuth});
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }  
  render(){
    return (
      <div >
        <Header user={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route  path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SigninAndSignup}></Route>
        </Switch>
       
      </div>
    );
  }
  
}

export default App;
